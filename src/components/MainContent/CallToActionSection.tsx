import React from "react";
import { Box, Typography } from "@mui/material";
import ContactButton from "../ContactButton";

const CallToActionSection: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f4f4f4",
        paddingTop: { xs: "40px", sm: "60px", md: "80px" },
        paddingBottom: { xs: "35px", sm: "53px", md: "70px" },
        textAlign: "center",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "2rem", sm: "2.4rem", md: "2.65rem", lg: "3rem" },
          marginBottom: { xs: "20px", sm: "30px", md: "40px" },
        }}
      >
        Less important title
      </Typography>
      <ContactButton />
    </Box>
  );
};

export default CallToActionSection;
