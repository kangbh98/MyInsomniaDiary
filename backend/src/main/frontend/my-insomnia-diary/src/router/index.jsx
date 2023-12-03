import { createBrowserRouter } from 'react-router-dom';
import First from '../pages/First.jsx';
import Login from '../pages/Login.jsx';
import Signup from '../pages/Signup.jsx';
import SignupUserInfo from '../pages/SignupUserInfo.jsx';
import SignupDetail from '../pages/SignupDetail.jsx';
import Calendarpage from '../pages/Calendarpage.jsx';
import Write from '../pages/Write.jsx';
import Diary from '../pages/Diary.jsx';
import Home from '../pages/Home.jsx';
import Settings from '../pages/Settings.jsx';
import Alarm from '../pages/Alarm.jsx';
import WriteDiary from '../pages/WriteDiary.jsx';
import Recommendations from '../pages/Recommendations.jsx';

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
    path: '/calendarpage',
    element: <Calendarpage />,
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
  {
    path: '/alarm',
    element: <Alarm />,
  },
  {
    path: '/writeDiary',
    element: <WriteDiary />,
  },
  {
    path: '/recommendations',
    element: <Recommendations />,
  },
]);

export default router;
