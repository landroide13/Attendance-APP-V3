import { Navigate, createBrowserRouter } from 'react-router-dom';
import App from './App';
import Signup from './views/Signup';
import Login from './views/Login';
import Attendance from './views/Attendance';
import GuessLayout from './components/GuessLayout';
import UsersLayout from './components/UsersLayout';
import Dashboard from './views/Dashboard';

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
                path: '/register',
                element: <Signup />
            },
           
            {
                path: '/attendance',
                element: <Attendance />
            }
        ]
    },

])

export default router








