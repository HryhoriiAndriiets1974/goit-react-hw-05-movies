import PropTypes from 'prop-types';
import { Title } from './Header.styled';

export default function Header({text}) {
  return <Title>{text}</Title>
};

Header.propTypes = {
  text: PropTypes.string.isRequired,
}
