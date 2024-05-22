"use client";

import { ThemeProvider } from "styled-components";
import theme from "./theme";
import BaseStyle from "../styles/Base.style";


export default function CustomThemeProvider({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <BaseStyle />
      {children}
    </ThemeProvider>
  );
}
