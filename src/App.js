// App.js
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Dashboard from './Pages/dashboard';
import Settings from './Pages/Settings';
import { AuthProvider } from './contexts/authContext';
const App = () => {
 return (
    <>
    <AuthProvider>

       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/Settings" element={<Settings />} />
       </Routes>
    </AuthProvider>
    </>
 );
};

export default App;