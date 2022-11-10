import "./button.scss";
import PropTypes from 'prop-types';

const Button = ({children, type = 'secondary', onClick, disabled, className, isNotify = false, isPromocode = false}) => {
  return (
    <button
      className={`
        ${className ? className : ''}
        action-button
        action-button_${type}
        ${disabled ? 'action-button_disabled' : ''}
        ${isPromocode ? 'action-button_promocode' : ''}
      `}
      onClick={disabled ? null : onClick}
      disabled={disabled}
    >
      {isNotify && <span className="action-button__notify"/>}
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  isNotify: PropTypes.bool,
  isPromocode: PropTypes.bool
};

export default Button;
