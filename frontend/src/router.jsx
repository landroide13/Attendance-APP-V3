import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Signup from './views/Signup';
import Login from './views/Login';
import Attendance from './views/Attendance';
import GuessLayout from './components/GuessLayout';
import UsersLayout from './components/UsersLayout';

const router = createBrowserRouter([
    {
        path:'/',
        element:<GuessLayout />,
        children: [
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
                path: '/',
                element: <App />
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








