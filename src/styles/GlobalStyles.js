import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
        background-color: #e9e7e7;
    }

    *, button, input {
        border: 0;
        outline: 0;
        font-family: 'Roboto', sans-serif;
    }

    button {
        cursor: pointer;
    }
    
`;

export const BoxCenter = styled.div`
  margin-top: 20px;
  background-color: #fbfbfb;
  height: -moz-calc(100vh - 40px);
  height: -webkit-calc(100vh - 40);
  height: calc(100vh - 40px);
  display: block;
  -webkit-box-shadow: 5px 5px 20px 1px rgba(0, 0, 0, 0.22);
  box-shadow: 5px 5px 20px 1px rgba(0, 0, 0, 0.22);
`;

