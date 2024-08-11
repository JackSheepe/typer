import { FunctionComponent, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  fetchText,
  setText,
  setCurrentCharIndex,
  increasePressingCount,
  setMistakes,
} from "../redux/store/textSlice";
import { setIsTimerOn } from "../redux/store/timerSlice";
import { setIsTestFinished } from "../redux/store/testSlice";

import { getCurrentChar, compareChars } from "../helpers/charTransform";

import { TestTextWrapper, TestLoadingText } from "./styles/StyledTest";
import { ErrorText } from "./styles/StyledTypography";

const Text: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const text = useAppSelector((state) => state.textSlice.text);
  const isLoading = useAppSelector((state) => state.textSlice.isLoading);
  const error = useAppSelector((state) => state.textSlice.error);
  const currentCharIndex = useAppSelector(
    (state) => state.textSlice.currentCharIndex
  );
  const mistakes = useAppSelector((state) => state.textSlice.mistakes);
  const pressingCount = useAppSelector(
    (state) => state.textSlice.pressingCount
  );
  const sentences = useAppSelector((state) => state.testSlice.sentences);

  useEffect(() => {
    dispatch(fetchText(sentences));
  }, [dispatch, sentences]);

  useEffect(() => {
    const newText = getCurrentChar(text, currentCharIndex);
    dispatch(setText(newText));
  }, [dispatch, currentCharIndex, text]);

  useEffect(() => {
    if (pressingCount === 0 && text.length > 0) {
      dispatch(setIsTimerOn(true));
    }

    if (currentCharIndex < text.length) {
      const keyPressHandler = (event: KeyboardEvent) => {
        const [newText, newCurrentIndex, newMistakes] = compareChars(
          text,
          currentCharIndex,
          event.key,
          mistakes
        );

        dispatch(setCurrentCharIndex(newCurrentIndex));
        dispatch(setText(newText));
        dispatch(setMistakes(newMistakes));
        dispatch(increasePressingCount());

        if (newCurrentIndex === text.length) {
          dispatch(setIsTimerOn(false));
          dispatch(setIsTestFinished(true));
        }
      };

      document.addEventListener("keypress", keyPressHandler);

      return () => {
        document.removeEventListener("keypress", keyPressHandler);
      };
    }
  }, [dispatch, text, pressingCount, currentCharIndex, mistakes]);

  return (
    <TestTextWrapper>
      {error && <ErrorText>{error}</ErrorText>}
      {isLoading ? (
        <TestLoadingText>Loading text...</TestLoadingText>
      ) : (
        <div>
          {text.map((item, index) => {
            return (
              <span className={item.class} key={index}>
                {item.char}
              </span>
            );
          })}
        </div>
      )}
    </TestTextWrapper>
  );
};

export default Text;
