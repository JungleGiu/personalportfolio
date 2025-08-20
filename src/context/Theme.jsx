import { useState, createContext, useLayoutEffect } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    console.log('🔍 Inizializzazione theme...');
    if (typeof document !== 'undefined') {
      const saved = localStorage.getItem('theme');
      console.log('💾 Theme salvato:', saved);
      if (saved) {
        // Applica immediatamente la classe se c'è un tema salvato
        if (saved === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
        return saved;
      }
      // Se non c'è un tema salvato, impostiamo dark e aggiungiamo la classe
      console.log('🌙 Usando dark come default');
      document.documentElement.classList.add('dark');
    }
    return "dark";
  });

  useLayoutEffect(() => {
    console.log('⚡ useLayoutEffect - theme cambiato a:', theme);
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      console.log('🌙 Aggiunta classe dark');
    } else {
      root.classList.remove("dark");
      console.log('☀️ Rimossa classe dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    console.log('🔄 toggleTheme chiamato! Theme attuale:', theme);
    setTheme(t => {
      const newTheme = t === "dark" ? "light" : "dark";
      console.log('🔄 Nuovo theme:', newTheme);
      return newTheme;
    });
  };
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };