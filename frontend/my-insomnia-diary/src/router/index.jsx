import { createBrowserRouter } from 'react-router-dom';
import First from '../pages/First.jsx';
import Login from '../pages/Login.jsx';
import Signup from '../pages/Signup.jsx';
import SignupUserInfo from '../pages/SignupUserInfo.jsx';
import SignupDetail from '../pages/SignupDetail.jsx';
import Calendar from '../pages/Calendar.jsx';
import Write from '../pages/Write.jsx';
import Diary from '../pages/Diary.jsx';
import Home from '../pages/Home.jsx';
import Settings from '../pages/Settings.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <First />,
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
    path: '/home',
    element: <Home />,
  },
  {
    path: '/first',
    element: <First />,
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
  {
    path: '/settings',
    element: <Settings />,
  },
]);

export default router;
