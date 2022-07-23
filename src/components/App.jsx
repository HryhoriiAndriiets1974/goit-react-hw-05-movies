import {Routes, Route} from 'react-router-dom';
import AppBar from './AppBar';
import Container from './Container';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFound from 'pages/NotFound';
import Home from 'pages/Home/Home';

export const App = () => {
  return (
    <Container>
      <AppBar />
      <ToastContainer
        autoClose={5000}
      />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </Container>
  );
};
