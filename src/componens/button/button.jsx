import "./button.scss";
import PropTypes from 'prop-types';

const Button = ({children, type = 'default', onClick, disabled, isActive}) => {
  return (
    <button
      className={`
        action-button
        action-button_${type}
        ${disabled ? 'action-button_disabled' : ''}
        ${isActive ? 'action-button_active' : ''}
      `}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  isActive: PropTypes.bool
};

export default Button;
