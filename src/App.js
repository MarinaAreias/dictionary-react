import React, { useState } from "react";
import "./App.css";
import Dictionary from "./Dictionary";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Switch, Paper } from "@material-ui/core";

export default function App(props) {
  // set theme
  const [darkMode, setDarkMode] = useState(false);

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  });

  const handleDarkMode = function () {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ minHeight: "100vh" }}>
        <div className="app">
          <div className="container">
            <header className="header text-center">
              <ul>
                <li>
                  <h1>Your Dictionary</h1>
                </li>
                <li className="ms-5">
                  <Switch onChange={handleDarkMode} value={darkMode} />
                </li>
              </ul>
            </header>
            <main>
              <Dictionary />
            </main>
            <footer className="text-center">Created by Marina Areias</footer>
          </div>
        </div>
      </Paper>
    </ThemeProvider>
  );
}
