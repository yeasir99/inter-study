import { CiLight } from 'react-icons/ci';
import { BiMoon } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Header = ({ theme, setTheme }) => {
  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  return (
    <div className="border-b dark:border-gray-600 py-3">
      <div className="flex justify-between">
        <Link to="/" className="text-xl font-bold uppercase px-2">
          Inter-Study
        </Link>
        <div className="flex justify-between items-center">
          <button
            onClick={handleThemeSwitch}
            className="border rounded-full border-gray-300 bg-gray-300 px-1.5 py-1.5 mr-5"
          >
            {theme === 'light' ? (
              <CiLight className="text-black text-xl" />
            ) : (
              <BiMoon className="text-black text-xl" />
            )}
          </button>
          <Link
            to="/sign-up"
            className="px-4 py-1.5 dark:text-gray-900 font-semibold bg-gray-200 rounded-md mr-5"
          >
            Signup
          </Link>
          <Link
            to="/login"
            className="px-4 py-1.5 dark:text-gray-900 font-semibold bg-gray-200 rounded-md mr-2"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
