import { CiLight } from 'react-icons/ci';
import { BiMoon } from 'react-icons/bi';

const Header = ({ theme, setTheme }) => {
  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  return (
    <div className="border-b py-3">
      <div className="dark:text-gray-50 flex justify-between">
        <h1>Inter-Study</h1>
        <div className="flex justify-between">
          <h1>signup</h1>
          <h1>signin</h1>
          <button onClick={handleThemeSwitch}>
            {theme === 'light' ? <CiLight /> : <BiMoon />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
