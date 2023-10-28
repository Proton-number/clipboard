import {
  Box,
  Typography,
  createTheme,
  ThemeProvider,
  Stack,
  Button,
} from "@mui/material";
import { motion, useTransform, useScroll } from "framer-motion";
import React from "react";
import logo from "/src/images/logo.svg";

function Top() {
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
    <Box
      id="top"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        marginBottom: "40px",
      }}
    >
      <Stack spacing={6} sx={{ marginTop: "40px" }}>
        <Box>
          <Box
            component={motion.img}
            src={logo}
            sx={{ width: { sm: "20%" } }}
          />
        </Box>

        <Typography sx={{ opacity: "60%" }} variant="h3" component={motion.h3}>
          {" "}
          <b>A history of everything you copy</b>{" "}
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography sx={{ opacity: "50%", width: { xs: "70%", sm: "80%" } }}>
            Clipboard allows you to track and organize everything you
            copy.Instantly access your clipboard on all your devices.
          </Typography>
        </Box>

        <Stack
          direction={{ sm: "row", xs: "column" }}
          sx={{ display: "flex", justifyContent: "center" }}
          spacing={3}
        >
          <Box>
            <ThemeProvider theme={theme}>
              <Button
                sx={{
                  textTransform: "none",
                  padding: { xs: "16px", sm: "10px" },
                  borderRadius: "28px",
                  color: "white",
                }}
                variant="contained"
              >
                <b>Download for iOS</b>
              </Button>
            </ThemeProvider>
          </Box>

          <Box>
            <ThemeProvider theme={theme}>
              <Button
                sx={{
                  padding: { xs: "16px", sm: "10px" },
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
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Top;
