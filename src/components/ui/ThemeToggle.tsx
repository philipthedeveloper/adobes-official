import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '@/redux/theme/themeSlice';
import { Sun, Moon } from 'lucide-react';
import { RootState } from '@/redux/store';

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.Theme.theme);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <button
      onClick={handleToggle}
      className="fixed top-4 right-4 z-50 p-2 bg-gray-200 dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-shadow"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
};

export default ThemeToggle;