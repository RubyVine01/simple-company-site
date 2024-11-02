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
        width: "1200px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f4f4f4",
        height: "calc(100vh - 95px)",
      }}
    >
      <Typography
        variant="h2"
        sx={{ fontWeight: "bold", fontSize: "2rem", textAlign: "center" }}
      >
        {message ? message : "Thank you for your submission!"}
      </Typography>
    </Box>
  );
};

export default SuccessResponse;
