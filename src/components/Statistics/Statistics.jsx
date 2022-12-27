import { StatsContainer, StatsDescription } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatsContainer>
      <StatsDescription>Good: {good}</StatsDescription>
      <StatsDescription>Neutral: {neutral}</StatsDescription>
      <StatsDescription>Bad: {bad}</StatsDescription>
      <StatsDescription>Total: {total}</StatsDescription>
      <StatsDescription>
        Positive feedback: {positivePercentage}%
      </StatsDescription>
    </StatsContainer>
  );
};
