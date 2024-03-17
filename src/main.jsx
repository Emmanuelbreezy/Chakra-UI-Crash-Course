import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    50: "#ECF9F2",
    100: "#CAEDDA",
    200: "#A7E2C3",
    300: "#85D6AB",
    400: "#62CA93",
    500: "#40BF7B",
    600: "#339963",
    700: "#26734A",
    800: "#1A4C31",
    900: "#0D2619",
  },
};

const fonts = {
  body: "Poppins, sans-serif",
  heading: "Outfit, sans-serif",
};

const theme = extendTheme({
  colors: colors,
  fonts: fonts,
});

//green
// "50": "#ECF9F2",
// "100": "#CAEDDA",
// "200": "#A7E2C3",
// "300": "#85D6AB",
// "400": "#62CA93",
// "500": "#40BF7B",
// "600": "#339963",
// "700": "#26734A",
// "800": "#1A4C31",
// "900": "#0D2619"

//Purple
// "50": "#EFEBFA",
// "100": "#D3C6F0",
// "200": "#B7A2E7",
// "300": "#9B7DDE",
// "400": "#7F59D4",
// "500": "#6334CB",
// "600": "#4F2AA2",
// "700": "#3B1F7A",
// "800": "#281551",
// "900": "#140A29"

// Orange
// 50: "#FCF0E9",
// 100: "#F6D6C0",
// 200: "#F1BB98",
// 300: "#EBA170",
// 400: "#E58648",
// 500: "#E06C1F",
// 600: "#B35619",
// 700: "#864113",
// 800: "#5A2B0C",
// 900: "#2D1606",

//Red
// "50": "#FCE8E8",
// "100": "#F7BFBF",
// "200": "#F39696",
// "300": "#EE6D6D",
// "400": "#E94444",
// "500": "#E41B1B",
// "600": "#B61616",
// "700": "#891010",
// "800": "#5B0B0B",
// "900": "#2E0505"

//Blue
// "50": "#E5ECFF",
// "100": "#B8CBFF",
// "200": "#8AA9FF",
// "300": "#5C87FF",
// "400": "#2E66FF",
// "500": "#0044FF",
// "600": "#0036CC",
// "700": "#002999",
// "800": "#001B66",
// "900": "#000E33"

//pink
// "50": "#FAEAF2",
// "100": "#F2C5DC",
// "200": "#E99FC5",
// "300": "#E17AAF",
// "400": "#D85598",
// "500": "#D02F82",
// "600": "#A62668",
// "700": "#7D1C4E",
// "800": "#531334",
// "900": "#2A091A"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
