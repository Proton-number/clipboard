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
        textAlign: "center",
      }}
    >
      <Typography sx={{ opacity: "60%" }} variant="h3" component={motion.h3}>
        <b>Access Clipboard anywhere</b>
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{ opacity: "50%", textAlign: "center", width: {xs:'58%' ,sm: "55%" } }}
        >
          Whether you're on the go, or at your computer, you can access all your
          Clipboard snippets in a few clicks.
        </Typography>
      </Box>
      <Box
        component={motion.img}
        src={devices}
        sx={{ width: {xs:'340px', sm: "700px" } }}
      />
    </Stack>
  );
}

export default Access;
