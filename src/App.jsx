import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './views/landing'; // Adjust path as needed
import Signup from './views/Signup'; // Replace with your signup component
import Login from './views/Login'; // Replace with your login component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
