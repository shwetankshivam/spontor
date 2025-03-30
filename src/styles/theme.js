import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#3328BF",
        },
        secondary: {
            main: "#dc004e",
        },
        background: {
            default: "#fff",
        },
    },
    typography: {
        fontFamily: "Plus Jakarta Sans, sans-serif",
    },
});

export default theme;