import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import { motion, useTransform, useScroll } from "framer-motion";
import computer from "/src/images/image-computer.png";

function Keep() {
  return (
    <Stack
      sx={{
        textAlign: "center",
        marginTop: "100px",
      }}
      spacing={6}
    >
      <Stack spacing={3}>
        <Typography sx={{ opacity: "60%" }} variant="h3" component={motion.h3}>
          <b>Keep track of your snippets</b>
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography sx={{ opacity: "50%", width: { xs: "70%", sm: "47%" } }}>
            Clipboard instantly stores any item you copy in the cloud, meaning
            you can access your snippets immediately on all your devices. Our
            Mac and iOS apps will help you organize everything.
          </Typography>
        </Box>
      </Stack>

      <Stack
        direction={{ lg: "row" }}
        sx={{ alignItems: "center", justifyContent: "space-between" }}
      >
        <Box
          component={motion.img}
          src={computer}
          sx={{ width: { lg: "800px" } }}
        />

        <Stack sx={{ textAlign: "left" }} spacing={3}>
          <Stack spacing={2}>
            <Typography variant="h4" sx={{ opacity: "60%" }}>
              {" "}
              <b>Quick Search</b>{" "}
            </Typography>
            <Typography sx={{ width: { lg: "55%" }, opacity: "50%" }}>
              {" "}
              Easily search your snippets by content, category, web address,
              application, and more.
            </Typography>
          </Stack>
          <Stack spacing={2}>
            <Typography variant="h4" sx={{ opacity: "60%" }}>
              <b>iCloud Sync</b>
            </Typography>
            <Typography sx={{ width: { lg: "55%" }, opacity: "50%" }}>
              Instantly saves and syncs snippets across all your devices.
            </Typography>
          </Stack>
          <Stack spacing={2}>
            <Typography variant="h4" sx={{ opacity: "60%" }}>
              <b>Complete History</b>
            </Typography>
            <Typography sx={{ width: { lg: "55%" }, opacity: "50%" }}>
              Retrieve any snippets from the first moment you started using the
              app.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Keep;
