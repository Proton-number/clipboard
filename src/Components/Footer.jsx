import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import { motion, useTransform, useScroll } from "framer-motion";
import logo from "/src/images/logo.svg";
import facebook from "/src/images/icon-facebook.svg";
import twitter from "/src/images/icon-twitter.svg";
import instagram from "/src/images/icon-instagram.svg";

function Footer() {
  return (
    <Stack
      spacing={{ xs: 1 }}
      direction={{ sm: "row", lg: "row" }}
      sx={{
        backgroundColor: "hsl(210, 11%, 96%)",
        alignItems: { sm: "center" },
        justifyContent: { sm: "space-evenly", lg: "space-evenly" },
        marginTop: "40px",
        padding: { xs: "20px", sm: "24px", lg: "20px" },
        textAlign: "center",
      }}
    >
      <Box>
        <Box
          component={motion.img}
          src={logo}
          sx={{ width: { xs: "50px", sm: "100px" } }}
        />
      </Box>

      <Stack spacing={{ xs: 0.5 }}>
        <Typography
          sx={{
            cursor: "pointer",
            "&:hover": { color: "hsl(171, 100%, 37%)" },
          }}
        >
          FAQS
        </Typography>
        <Typography
          sx={{
            cursor: "pointer",
            "&:hover": { color: "hsl(171, 100%, 37%)" },
          }}
        >
          Contact Us
        </Typography>
      </Stack>

      <Stack spacing={{ xs: 0.5 }}>
        <Typography
          sx={{
            cursor: "pointer",
            "&:hover": { color: "hsl(171, 100%, 37%)" },
          }}
        >
          Privacy Policy
        </Typography>
        <Typography
          sx={{
            cursor: "pointer",
            "&:hover": { color: "hsl(171, 100%, 37%)" },
          }}
        >
          Press Kit{" "}
        </Typography>
      </Stack>

      <Stack>
        <Typography
          sx={{
            cursor: "pointer",
            "&:hover": { color: "hsl(171, 100%, 37%)" },
          }}
        >
          Install Guide
        </Typography>
      </Stack>

      <Stack
        sx={{ display: "flex", justifyContent: "center" }}
        direction={{ xs: "row", sm: "row", lg: "row" }}
        spacing={{xs:4, sm: 2, lg: 2 }}
      >
        <Box
          component={motion.img}
          src={facebook}
          sx={{
            width: { lg: "50px" },
            height: { lg: "50px" },
            "&:hover": {
              filter:
                " brightness(0) saturate(100%) invert(29%) sepia(49%) saturate(3225%) hue-rotate(154deg) brightness(91%) contrast(101%)",
            },
          }}
        />
        <Box
          component={motion.img}
          src={twitter}
          sx={{
            width: { lg: "50px" },
            height: { lg: "50px" },
            "&:hover": {
              filter:
                " brightness(0) saturate(100%) invert(29%) sepia(49%) saturate(3225%) hue-rotate(154deg) brightness(91%) contrast(101%)",
            },
          }}
        />
        <Box
          component={motion.img}
          src={instagram}
          sx={{
            width: { lg: "50px" },
            height: { lg: "50px" },
            "&:hover": {
              filter:
                " brightness(0) saturate(100%) invert(29%) sepia(49%) saturate(3225%) hue-rotate(154deg) brightness(91%) contrast(101%)",
            },
          }}
        />
      </Stack>
    </Stack>
  );
}

export default Footer;
