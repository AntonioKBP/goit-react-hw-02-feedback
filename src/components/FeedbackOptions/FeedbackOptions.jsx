import { ButtonList, ButtonItem, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ option, onFeedbackClick }) => {
  return (
    <ButtonList>
      {option.map(el => (
        <ButtonItem key={el}>
          <Button type="button" onClick={() => onFeedbackClick(el)}>
            {el}
          </Button>
        </ButtonItem>
      ))}
    </ButtonList>
  );
};
