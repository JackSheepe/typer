import { FunctionComponent, useState, useEffect } from "react";

import { StatsContainer, StatTitle, StatDesc } from "./styles/StyledStats";

import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { increaseSeconds } from "../redux/store/timerSlice";

import { speedCounting, accuracyCounting } from "../helpers/statsCounting";

type StatsProps = {
  children?: JSX.Element | JSX.Element[];
};

const Stats: FunctionComponent<StatsProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const mistakes = useAppSelector((state) => state.textSlice.mistakes);
  const pressingCount = useAppSelector(
    (state) => state.textSlice.pressingCount
  );
  const seconds = useAppSelector((state) => state.timerSlice.seconds);
  const isTimerOn = useAppSelector((state) => state.timerSlice.isTimerOn);
  const [speed, setSpeed] = useState("0.00");
  const [accuracy, setAccuracy] = useState("0.00");

  useEffect(() => {
    const correctLetters = pressingCount - mistakes;

    setAccuracy(accuracyCounting(mistakes, pressingCount));
    setSpeed(speedCounting(correctLetters, seconds));
  }, [mistakes, pressingCount, seconds]);

  useEffect(() => {
    if (isTimerOn) {
      const timer = setTimeout(() => {
        dispatch(increaseSeconds());
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isTimerOn, seconds, dispatch]);

  return (
    <StatsContainer>
      <div>
        <StatTitle>speed</StatTitle>
        <StatDesc>{speed} WPM</StatDesc>
      </div>
      <div>
        <StatTitle>accuracy</StatTitle>
        <StatDesc>{accuracy} %</StatDesc>
      </div>
      {children}
    </StatsContainer>
  );
};

export default Stats;
