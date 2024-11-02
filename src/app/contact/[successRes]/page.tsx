"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import { useSearchParams } from "next/navigation";

const SuccessResponse: React.FC = () => {
  const searchParams = useSearchParams();
  const message = searchParams.get("message");

  return (
    <Box
      sx={{
        width: { xs: "100%", md: "1200px" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: { xs: "30px", md: "0" },
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
          textAlign: "center",
        }}
      >
        {message ? message : "Thank you for your submission!"}
      </Typography>
    </Box>
  );
};

export default SuccessResponse;
