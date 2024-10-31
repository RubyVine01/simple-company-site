import React from "react";
import { Button } from "@mui/material";
import Link from "next/link";

const ContactButton: React.FC = () => {
  return (
    <Link href="/contact">
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#333",
          color: "#fff",
          textTransform: "none",
          fontWeight: "300",
          fontSize: "1rem",
          borderRadius: "7px",
          padding: "5px 50px",
          "&:hover": {
            backgroundColor: "#555",
          },
        }}
      >
        Contact us
      </Button>
    </Link>
  );
};

export default ContactButton;
