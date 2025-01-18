import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Landing = () => {
    return (
        <div >
            <div className="bg-dark text-light vh-100  d-flex flex-column justify-content-center align-items-center">
                <h1 className="display-3 mb-4 text-warning">Welcome to CryptoCore</h1>
                <p className="lead mb-5 text-light">
                    Manage your cryptocurrency portfolios with ease. Track real-time data, analyze trends, and stay ahead in the market.
                </p>
                <div>
                    <Link to="/signup" className="btn btn-warning btn-lg mx-2">
                        Get Started
                    </Link>
                    <Link to="/login" className="btn btn-outline-warning btn-lg mx-2">
                        Log In
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Landing;