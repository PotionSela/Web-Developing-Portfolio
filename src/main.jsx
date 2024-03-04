// Importing the ReactDOM
import ReactDOM from 'react-dom/client';
// Importing the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Importing the pages so the router will use these
import App from './App';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PortfolioPage from './pages/PortfolioPage';
import ProfilePage from './pages/ProfilePage';

// Router
const router = createBrowserRouter([
    // Define the accessible routes
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: '/About',
                element: <AboutPage />,
            },
            {
                path: '/Contact',
                element: <ContactPage />,
            },
            {
                path: '/Portfolio',
                element: <PortfolioPage />,
            },
            {
                path: '/Profile',
                element: <ProfilePage />,
            },
        ]
    }
]);

// Rendering the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);