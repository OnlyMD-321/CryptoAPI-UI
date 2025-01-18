import PropTypes from 'prop-types';
import logo from '../assets/logo.png'; // Adjust the path if needed

const Logo = ({ width = '150px', height = 'auto' }) => {
    return (
        <div className="text-center mb-4">
            <img
                src={logo}
                alt="CryptoCore Logo"
                style={{ width, height }}
            />
        </div>
    );
};
Logo.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
};

export default Logo;
