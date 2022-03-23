import { Container } from "@mui/material";
import {GlobalStyles, BoxCenter } from "./styles/GlobalStyles";
import React from "react";
import Upload from "./pages/Upload";

function App() {
  return (
    <Container maxWidth="sm">
      <GlobalStyles />
      <BoxCenter>
        <Upload />
      </BoxCenter>
    </Container>
  );
}

export default App;
