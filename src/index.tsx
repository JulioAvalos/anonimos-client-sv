
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";

import App from "./App";
import Header from "./components/Navigation/Header";
import theme from "./utils/Theme";

const app = (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Header />
      <App />
    </BrowserRouter>
  </ThemeProvider>
);

ReactDOM.render(app, document.getElementById("root"));
