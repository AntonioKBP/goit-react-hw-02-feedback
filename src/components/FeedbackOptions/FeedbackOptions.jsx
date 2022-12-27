import PropTypes from 'prop-types';

import { ButtonList, ButtonItem, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onFeedbackClick }) => {
  return (
    <ButtonList>
      {options.map(option => (
        <ButtonItem key={option}>
          <Button type="button" onClick={() => onFeedbackClick(option)}>
            {option}
          </Button>
        </ButtonItem>
      ))}
    </ButtonList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onFeedbackClick: PropTypes.func.isRequired,
};
