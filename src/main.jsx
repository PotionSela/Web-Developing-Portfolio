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
        errorElement: <Error />,
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
            {
                path: '/Error',
                element: <ErrorPage />,
            },
        ]
    }
]);

// Rendering the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);