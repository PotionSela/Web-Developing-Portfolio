// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';

function App() {
    // The Outlet component will conditionally swap between the different pages
    return (
        <>
        <Nav />
        <Outlet />
        </>
    );
}

export default App;