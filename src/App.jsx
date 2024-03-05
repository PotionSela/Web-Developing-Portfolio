// Bringing in the required imports
import { Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import ProfilePage from './pages/ProfilePage';

const App = () => {
    // 
    return (
        <Routes>
            <Route
                index
                path='/'
                element={<HomePage />}
                />

            <Route
                path='/contact'
                element={<ContactPage />}
                />

            <Route
                path='/about'
                element={<AboutPage />}
                />

            <Route
                path='/portfolio'
                element={<PortfolioPage />}
                />

            <Route
                path='/profile'
                element={<ProfilePage />}
                />
        </Routes>
    )};

export default App;