import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { CHANGE_THEME, DARK } from '../context/types';

const Emoji = ({ name, icon }) => (
  <div style={{ userSelect: 'none' }}>
    <span role="img" aria-label={name}>
      {icon}
    </span>
  </div>
);

const ThemeToggle = () => {
  const { dispatch, theme } = useContext(AppContext);

  const toggleTheme = () => dispatch({ type: CHANGE_THEME });
  return (
    <button
      className="bg-gray-200 rounded-full cursor-pointer p-2 border-0 focus:outline-none hover:bg-gray-300"
      onClick={toggleTheme}
    >
      {theme === DARK ? (
        <Emoji name="sun" icon="🌞" />
      ) : (
        <Emoji name="moon" icon="🌙" />
      )}
    </button>
  );
};

export default ThemeToggle;
