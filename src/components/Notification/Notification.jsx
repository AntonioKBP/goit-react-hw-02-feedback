import PropTypes from 'prop-types';

import { NotifyTitle, NotyContainer } from './Notification.styled';

export const Notification = ({ message }) => {
  return (
    <NotyContainer>
      <NotifyTitle>{message}</NotifyTitle>
    </NotyContainer>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
