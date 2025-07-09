// frontend/app/provider/theme-context.tsx

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

type Theme = "dark" | "light" | "system";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: Theme; // Optional default theme
  storageKey?: string; // Optional storage key for localStorage
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultTheme = "system", // 'system' or 'light' or 'dark'
  storageKey = "vite-ui-theme", // Default key for localStorage
}) => {
  // Initialize theme state. We can't read localStorage here directly.
  // We'll set a temporary default and update it in useEffect.
  const [theme, setThemeState] = useState<Theme>(() => {
    // Attempt to read from localStorage only if window is defined (client-side)
    // This is a common pattern for initial state, but useEffect is safer for actual side effects.
    if (typeof window !== "undefined" && localStorage.getItem(storageKey)) {
      return localStorage.getItem(storageKey) as Theme;
    }
    // Fallback to system preference or defaultTheme if localStorage is not available or empty
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return "dark";
    }
    return defaultTheme === "system" ? "light" : defaultTheme; // Default to 'light' if system is not preferred or not available
  });

  // Use useEffect to handle localStorage interactions after component mounts on client
  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark"); // Clean up existing classes

    // Apply the theme class to the html element
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }

    // Save the theme to localStorage
    localStorage.setItem(storageKey, theme);
  }, [theme, storageKey]); // Re-run effect when theme or storageKey changes

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
