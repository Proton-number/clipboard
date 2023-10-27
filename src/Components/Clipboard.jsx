import React from "react";
import {
  Box,
  Typography,
  createTheme,
  ThemeProvider,
  Stack,
  Button,
} from "@mui/material";
import { motion, useTransform, useScroll } from "framer-motion";

function Clipboard() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "hsl(171, 100%, 37%)",
      },
      secondary: {
        main: "hsl(228, 92%, 65%)",
      },
    },
  });
  return (
    <Stack
      spacing={2}
      sx={{
        marginTop: "40px",
        display: "flex",
        textAlign: "center",
      }}
    >
      <Typography sx={{ opacity: "60%" }} variant="h3" component={motion.h3}>
        <b>Clipboard for iOS and Mac OS</b>
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography sx={{ opacity: "50%", width: { xs: "70%", sm: "80%", lg:'40%' } }}>
          Available for free on the App Store. Download for Mac or iOS, sync
          with iCloud and you're ready to start adding to your clipboard.
        </Typography>
      </Box>
      <Stack
        direction={{ sm: "row", xs: "column" }}
        sx={{ display: "flex", justifyContent: "center" }}
        spacing={3}
      >
        <ThemeProvider theme={theme}>
          <Button
            sx={{
              textTransform: "none",
              padding: "10px",
              borderRadius: "28px",
              color: "white",
            }}
            variant="contained"
          >
            <b>Download for iOS</b>
          </Button>
        </ThemeProvider>

        <ThemeProvider theme={theme}>
          <Button
            sx={{
              textTransform: "none",
              borderRadius: "28px",
              color: "white",
            }}
            variant="contained"
            color="secondary"
          >
            <b>Download for Mac</b>
          </Button>
        </ThemeProvider>
      </Stack>
    </Stack>
  );
}

export default Clipboard;
