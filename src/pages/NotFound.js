import { NotFound404 } from "./NotFound.styled";
import Header from '../components/Header/Header';

export default function NotFound() {
  return (
    <>
      <Header text='404 Not Found' />
      <NotFound404 />
    </>
  );
}
