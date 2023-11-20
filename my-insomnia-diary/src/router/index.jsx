import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import Login from '../pages/Login.jsx';
import Signup from '../pages/Signup.jsx';
import SignupUserInfo from '../pages/SignupUserInfo.jsx';
import SignupDetail from '../pages/SignupDetail.jsx';
import Calendar from '../pages/Calendar.jsx';
import Write from '../pages/Write.jsx';
import Diary from '../pages/Diary.jsx';
import HomeStie from '../pages/HomeSite.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/Homesite',
    element: <HomeStie />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/signup/userinfo',
    element: <SignupUserInfo />,
  },
  {
    path: '/signup/detail',
    element: <SignupDetail />,
  },
  {
    path: '/calendar',
    element: <Calendar />,
  },
  {
    path: '/write',
    element: <Write />,
  },
  {
    path: '/diary',
    element: <Diary />,
  },
]);

export default router;
