import Moon from 'lucide-react/dist/esm/icons/moon.mjs';
import Sun from 'lucide-react/dist/esm/icons/sun.mjs';
import { useTheme } from '../../context/useTheme';

/** 44px circular control in the header. The label names the theme it switches to. */
export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const next = theme === 'dark' ? 'light' : 'dark';

  return (
    <button
      type="button"
      className="theme-toggle-btn"
      onClick={toggleTheme}
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
    >
      {theme === 'dark' ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
    </button>
  );
}
