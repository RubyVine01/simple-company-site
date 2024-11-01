import React from "react";
import { Box, Typography } from "@mui/material";
import ContactButton from "../ContactButton";

const CallToActionSection: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f4f4f4",
        paddingTop: "80px",

        paddingBottom: "70px",

        textAlign: "center",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",
          fontSize: "3rem",
          marginBottom: "40px",
        }}
      >
        Less important title
      </Typography>
      <ContactButton />
    </Box>
  );
};

export default CallToActionSection;
