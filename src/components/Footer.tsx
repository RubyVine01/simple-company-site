import React from "react";
import { Box, Typography } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Box
      position="sticky"
      component="footer"
      sx={{
        padding: "50px 0",
        textAlign: "center",
        borderTop: "1px solid #e0e0e0",
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: "1.5rem" }}>
        {" "}
        Some Company 2024
      </Typography>
    </Box>
  );
};

export default Footer;
