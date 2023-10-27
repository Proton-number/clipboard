import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import { motion, useTransform, useScroll } from "framer-motion";
import devices from "/src/images/image-devices.png";

function Access() {
  return (
    <Stack
      spacing={2}
      sx={{
        marginTop: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography sx={{ opacity: "60%" }} variant="h3" component={motion.h3}>
        <b>Access Clipboard anywhere</b>
      </Typography>
      <Typography sx={{ opacity: "50%" }}>
        Whether you're on the go, or at your computer, you can access all your
        Clipboard snippets in a few clicks.
      </Typography>
      <Box component={motion.img} src={devices} />
    </Stack>
  );
}

export default Access;
