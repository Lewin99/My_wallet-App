import { useEffect } from "react";
import Dashboard from "./components/Dashboard_comp/Dashboard";
import { useTheme } from "./components/contexts/ThemeContext";

function App() {
  const { mode } = useTheme();

  useEffect(() => {
    const body = document.body;
    if (mode === "light") {
      body.style.backgroundColor = "#f6f6f9";
      body.style.color = "#46484a";
    } else {
      body.style.backgroundColor = "#181a1e";
      body.style.color = "#7d8da1";
    }
  }, [mode]);
  return (
    <>
      <Dashboard />
    </>
  );
}

export default App;
