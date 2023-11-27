import { Navigate, createBrowserRouter } from 'react-router-dom';
import Login from './views/Login';
import Attendance from './views/Attendance';
import GuessLayout from './layouts/GuessLayout';
import UsersLayout from './layouts/UsersLayout';
import Dashboard from './views/Dashboard';
import ManageUsers from './views/ManageUsers';
import ManageStudents from './views/ManageStudents';
import Profile from './views/Profile';
import ManageSubjects from './views/ManageSubjects';
import Records from './views/Records';

const router = createBrowserRouter([
    {
        path:'/',
        element:<GuessLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to="/login" />
            },
            {
                path: '/login',
                element: <Login />
            }
        ]
    },
    {
        path:'/',
        element: <UsersLayout />,
        children:[
            {
                path: '/dashboard',
                element: <Dashboard />
            },
        
            {
                path: '/manageUsers',
                element: <ManageUsers />
            },
            {
                path: '/manageStudents',
                element: <ManageStudents />
            },
            {
                path: '/manageSubjects',
                element: <ManageSubjects />
            },
            {
                path: '/profile',
                element: <Profile />
            },
           
            {
                path: '/attendance',
                element: <Attendance />
            },
            {
                path: '/records',
                element: <Records />
            },
        ]
    },

])

export default router








