import { Route, Routes, Navigate } from 'react-router-dom';

import Header from "./components/UI/Header";
import HomePage from "./pages/HomePage";
import Auth from "./pages/Auth";
import Todos from "./pages/Todos";

import classes from './App.module.css';
function App() {
  return (
    <>
      <Header />
      {/* <Auth /> */}
      {/* <Todos /> */}

      {/* <main className={classes.main}>
      <Navigate to='/home-page' />
  */}
      <Routes>
        {/* <Route path="/">
          <Navigate to='/home-page' />
        </Route> */}
        <Route path="/home-page" element={<HomePage />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/todos" element={<Todos />} />
    </Routes>
      {/* </main>  */ }
    </>
  );
}

export default App;
