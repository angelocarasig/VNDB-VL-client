import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import AnimatedRoutes from "./components/Routing/AnimatedRoutes";

//Styling
import { MUIStyleOverrides, MantineStyleOverrides } from "./Styles";
import "./App.css";

import { MantineProvider } from "@mantine/core";
import { ThemeProvider } from "@mui/material";

import {
  ColorSchemeProvider,
} from "@mantine/core";

function App() {

  const [colorScheme, setColorScheme] = useState("dark");
  const toggleColorScheme = () => {
    if (colorScheme === "dark") {
      setColorScheme("light");
    }
    else {
      setColorScheme("dark");
    }
  }

  return (
    // Theme / Style settings
    <>
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <ThemeProvider theme={MUIStyleOverrides()}>
        <MantineProvider theme={MantineStyleOverrides(colorScheme)}>
          {/* Actual Stuff */}
          <BrowserRouter>
            <AnimatedRoutes />
          </BrowserRouter>
          
        </MantineProvider>
      </ThemeProvider>
      </ColorSchemeProvider>
    </>
  );
}

export default App;
