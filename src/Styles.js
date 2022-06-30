import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// Material UI
export function MUIStyleOverrides() {
  const theme = createTheme({
    colorScheme: "dark",
    palette: {
      primary: {
        main: "#ffffff",
      },
      error: {
        main: "#e57373",
      },
    },
    typography: {
      fontFamily: [
        "Poppins",
        "Pier Sans",
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
      ].join(","),
      body1: {
        fontFamily: "Pier Sans, Arial, sans-serif",
      },
    },
    components: {
      MuiButton: {
        variants: [
          {
            props: { variant: "contained" },
            style: {
              textTransform: "none",
              border: `10px dashed red`,
            },
          },
        ],
      },
    },
  });

  return responsiveFontSizes(theme);
}

// Mantine
export function MantineStyleOverrides(colorSwitch) {
  console.log("Color Switch: ");
  console.log(colorSwitch);
  const theme = {
    fontFamily: "Poppins, Pier Sans, sans-serif",
    colorScheme: colorSwitch,
    colors: {
      gray:
        [
          "#eceae5",
          "#d4d3ce",
          "#bdbbb7",
          "#a5a4a0",
          "#8c8677",
          "#757063",
          "#5e594f",
          "#46433b",
          "#2f2d28",
          "#171614",
          "#000000",

          // "#EDEDE9",
          // "#E8E5E0",
          // "#E2DDD6",
          // "#D6CCC2",
          // "#E6DCD1",
          // "#F5EBE0",
          // "#ECE0D5",

          // // Text Colour
          // "#E3D5CA",
          // // "#967744",
          // // Text Colour
          
          // "#DCC9BD",
          // "#D5BDAF",
        ],
      dark: [
        "#d5d7e0",
        "#acaebf",
        "#8c8fa3",
        "#666980",
        "#4d4f66",
        "#34354a",
        "#2b2b2b",
        "#1d1e30",
        "#0c0d21",
        "#01010a",
      ],
    },
  };

  return theme;
}
