import { FunctionComponent } from "react";

import { TestContainer } from "./styles/StyledTest";

import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { resetSeconds } from "../redux/store/timerSlice";
import { setIsTestFinished, resetTestState } from "../redux/store/testSlice";
import { resetTextState, setText } from "../redux/store/textSlice";

import { restoreText } from "../helpers/charTransform";

import Text from "./Text";
import Stats from "./Stats";
import ModalWindow from "./ui/ModalWindow";
import Button from "./ui/Button";

const Test: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const isTestFinished = useAppSelector(
    (state) => state.testSlice.isTestFinished
  );
  const text = useAppSelector((state) => state.textSlice.text);

  function restart() {
    dispatch(resetSeconds());
    dispatch(resetTextState());
    dispatch(setText(restoreText(text)));

    if (isTestFinished) {
      dispatch(setIsTestFinished(false));
    }
  }

  function newTest() {
    dispatch(resetTestState());
    dispatch(resetTextState());
    dispatch(resetSeconds());
  }

  return (
    <TestContainer>
      <Stats>
        <Button
          btnText="restart"
          onClick={restart}
          onFocus={(event) => event.target.blur()}
        />
      </Stats>
      <Text />
      {isTestFinished && (
        <ModalWindow title="Test completed!">
          <Stats />
          <Button
            btnText="restart"
            onClick={restart}
            style={{ margin: "0 auto 15px" }}
          />
          <Button
            btnText="new test"
            onClick={newTest}
            style={{ margin: "auto" }}
          />
        </ModalWindow>
      )}
    </TestContainer>
  );
};

export default Test;
