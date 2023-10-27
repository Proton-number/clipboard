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
      direction={{ lg: "row" }}
      sx={{
        backgroundColor: "hsl(210, 11%, 96%)",
        justifyContent: "space-evenly",
        marginTop: "40px",
        padding: { lg: "20px" },
      }}
    >
      <Box component={motion.img} src={logo} />

      <Stack>
        <Typography>FAQS</Typography>
        <Typography>Contact Us</Typography>
      </Stack>

      <Stack>
        <Typography>Privacy Policy</Typography>
        <Typography>Press Kit </Typography>
      </Stack>

      <Stack>
        <Typography>Install Guide</Typography>
      </Stack>

      <Stack direction={{ lg: "row" }} spacing={{lg:2}}>
        <Box
          component={motion.img}
          src={facebook}
          sx={{ width: { lg: "50px" }, height: { lg: "50px" } }}
        />
        <Box
          component={motion.img}
          src={twitter}
          sx={{ width: { lg: "50px" }, height: { lg: "50px" } }}
        />
        <Box
          component={motion.img}
          src={instagram}
          sx={{ width: { lg: "50px" }, height: { lg: "50px" } }}
        />
      </Stack>
    </Stack>
  );
}

export default Footer;
