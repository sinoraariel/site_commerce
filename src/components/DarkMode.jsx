import React from 'react'
import { Sun, Moon, Monitor } from 'lucide-react'

const Darkmode = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") || "system"
  );
  const [open, setOpen] = React.useState(false);
  const dropdownRef = React.useRef(null);

  // Appliquer le thème
  React.useEffect(() => {
    const element = document.documentElement;
    
    if (theme === "dark") {
      element.classList.add("dark");
    } else if (theme === "light") {
      element.classList.remove("dark");
    } else {
      // System
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      prefersDark ? element.classList.add("dark") : element.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Fermer le dropdown en cliquant dehors
  React.useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getIcon = () => {
    if (theme === "dark") return <Moon size={18} />;
    if (theme === "light") return <Sun size={18} />;
    return <Monitor size={18} />;
  };

  const options = [
    { value: "light", label: "Light", icon: <Sun size={16} /> },
    { value: "dark",  label: "Dark",  icon: <Moon size={16} /> },
    { value: "system",label: "System",icon: <Monitor size={16} /> },
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Bouton trigger */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center w-9 h-9 rounded-full 
                   bg-neutral-100 dark:bg-neutral-800 
                   text-neutral-700 dark:text-neutral-200
                   hover:bg-neutral-200 dark:hover:bg-neutral-700
                   transition-all duration-200"
      >
        {getIcon()}
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-36 rounded-lg shadow-lg 
                        bg-white dark:bg-neutral-800 
                        border border-neutral-200 dark:border-neutral-700
                        z-50 overflow-hidden">
          {options.map((opt) => (
            <button
              key={opt.value}
              onClick={() => { setTheme(opt.value); setOpen(false); }}
              className={`flex items-center gap-2 w-full px-4 py-2 text-sm
                          transition-colors duration-150
                          ${theme === opt.value 
                            ? "bg-primary/10 text-primary font-medium" 
                            : "text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-700"
                          }`}
            >
              {opt.icon}
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Darkmode;