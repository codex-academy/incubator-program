import React from "react";
import { CssBaseline } from "@material-ui/core";
import { StylesProvider } from "@material-ui/core/styles";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');

    body {
        overflow-x: hidden;
        overflow-y: scroll;
        font-family: Roboto, Arial, sans-serif;
    }
`;

const Global = (props) => {
  const { children } = props;

  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <GlobalStyle />
      
      {children}
    </StylesProvider>
  );
};

export default Global;
