// Bringing in the required imports
import { Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import ResumePage from './pages/ResumePage';

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
                path='/resume'
                element={<ResumePage />}
                />
        </Routes>
    )};

export default App;