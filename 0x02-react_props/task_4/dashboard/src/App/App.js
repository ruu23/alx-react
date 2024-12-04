import React, { Fragment } from 'react';
import 'prop-types';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';

function App({ isLoggedIn=false }) {
  return (
    <Fragment>
      <Notifications />
      <div className="App">
        <Header />
        {isLoggedIn ? <CourseList /> : <Login />}
        <Footer />
      </div>
    </Fragment>
  );
}

export default App;
