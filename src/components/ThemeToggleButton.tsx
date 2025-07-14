import { Moon, Sun } from "lucide-react";
import useTheme from "../hooks/useTheme";

const ThemeToggleButton = () => {
  const [isDark, toggleTheme] = useTheme();
  return (
    <div className="fixed z-50 sm:top-30 right-0 bg-bg-50 dark:bg-dark-bg-50 shadow-sm dark:shadow-dark rounded-l-full group">
      <button
        className="px-3 py-1.5 flex gap-1 items-center cursor-pointer hover:text-primary-accent transition-all duration-300 ease-in-out"
        onClick={toggleTheme}
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
        <span className="max-w-0 font-semibold overflow-hidden group-hover:max-w-[100px] whitespace-nowrap transition-all duration-300 ease-in-out">
          {isDark ? "Light" : "Dark"}
        </span>
      </button>
    </div>
  );
};

export default ThemeToggleButton;
