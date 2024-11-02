import React from "react";
import { Box, Typography } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        padding:  { xs: "20px 0", sm: "50px 0"},
        textAlign: "center",
        borderTop: "1px solid #e0e0e0",
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: "bold", fontSize:  { xs: "1.2rem", sm: "1.5rem"}, }}>
        Some Company 2024
      </Typography>
    </Box>
  );
};

export default Footer;
