import {Routes, Route, Outlet} from 'react-router-dom';
import AppBar from './AppBar';
import Container from './Container';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFound from 'pages/NotFound';
import Home from 'pages/Home/Home';
import SearchMovie from 'pages/Movies/Movies';
import MovieDetails from 'pages/MovieDetails';
import Cast from 'pages/Cast';
import Reviews from 'pages/Reviews';
import Footer from './Footer/Footer';

export const App = () => {
  return (
    <Container>
      <AppBar />
      <ToastContainer
        autoClose={5000}
      />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='movies' element={<><Outlet /></>}>
          <Route index element={<SearchMovie />}></Route>
          <Route path=':movieId' element={<MovieDetails />}>
            <Route path='cast' element={<Cast />}></Route>
            <Route path='reviews' element={<Reviews />}></Route>
          </Route>
        </Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </Container>
  );
};
