import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import { motion, useTransform, useScroll } from "framer-motion";
import Google from "/src/images/logo-google.png";
import IBM from "/src/images/logo-ibm.png";
import Microsoft from "/src/images/logo-microsoft.png";
import Hp from "/src/images/logo-hp.png";
import Vector from "/src/images/logo-vector-graphics.png";
import Blacklist from "/src/images/icon-blacklist.svg";
import Text from "/src/images/icon-text.svg";
import Preview from "/src/images/icon-preview.svg";

function Super() {
  return (
    <Stack
      spacing={4}
      sx={{
        marginTop: "40px",
        display: "flex",
        textAlign: "center",
      }}
    >
      <Stack>
        <Typography sx={{ opacity: "60%" }} variant="h3" component={motion.h3}>
          {" "}
          <b>Supercharge your flow</b>{" "}
        </Typography>
        <Typography sx={{ opacity: "50%" }}>
          {" "}
          We've got the tools to boost your productivity.{" "}
        </Typography>
      </Stack>

      <Stack direction={{ lg: "row" }}>
        <Stack
          spacing={2}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            component={motion.img}
            src={Blacklist}
            sx={{ width: { lg: "100px" } }}
          />
          <Typography variant='h5' sx={{opacity:'70%'}}>
            <b>Create blacklists</b>
          </Typography>
          <Typography sx={{ width: { lg: "50%" }, opacity:'50%' }}>
            Ensure sensitive information never makes its way to your clipboard
            by excluding certain sources.
          </Typography>
        </Stack>
        <Stack
          spacing={2}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            component={motion.img}
            src={Text}
            sx={{ width: { lg: "100px" } }}
          />
          <Typography variant='h5' sx={{opacity:'70%'}}>
            <b>Plain text snippets</b>
          </Typography>
          <Typography sx={{ width: { lg: "50%" }, opacity:'50%' }}>
            Remove unwanted formatting from copied text for a consistent look.
          </Typography>
        </Stack>
        <Stack
          spacing={2}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            component={motion.img}
            src={Preview}
            sx={{ width: { lg: "100px" } }}
          />
          <Typography variant='h5' sx={{opacity:'70%'}}>
            <b>Sneak preview</b>
          </Typography>
          <Typography sx={{ width: { lg: "50%" }, opacity:'50%' }}>
            Quick preview of all snippets on your Clipboard for easy access.
          </Typography>
        </Stack>
      </Stack>

      <Stack direction={{ lg: "row" }} sx={{ justifyContent: "space-evenly" }}>
        <Box
          component={motion.img}
          src={Google}
          sx={{ height: { lg: "30px" } }}
        />
        <Box component={motion.img} src={IBM} sx={{ height: { lg: "30px" } }} />
        <Box
          component={motion.img}
          src={Microsoft}
          sx={{ height: { lg: "30px" } }}
        />
        <Box component={motion.img} src={Hp} sx={{ height: { lg: "35px" } }} />
        <Box
          component={motion.img}
          src={Vector}
          sx={{ height: { lg: "30px" } }}
        />
      </Stack>
    </Stack>
  );
}

export default Super;
