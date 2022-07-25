import PropTypes from 'prop-types';
import { Btn, BtnLabel } from './Button.styled';

export default function Button({onClick, label, arrow}) {

  return (
    <Btn type='button' onClick={onClick}>
      {arrow}
      <BtnLabel>
        {label}
      </BtnLabel>
    </Btn>
  )
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
}
