import React from "react";
import { Button } from "@mui/material";
import Link from "next/link";

const ContactButton: React.FC = () => {
  return (
    <Link href="/contact">
      <Button
        variant="contained"
        aria-label="Navigate to Contact Us page"
        sx={{
          backgroundColor: "var(--primary-color)",
          color: "#fff",
          textTransform: "none",
          fontWeight: "300",
          fontSize: { xs: "0.9rem", sm: "1rem" },
          borderRadius: "9px",
          padding: { xs: "2px 30px", sm: "2px 48px" },
          "&:hover": {
            backgroundColor: "var(--secondary-color)",
          },
        }}
      >
        Contact us
      </Button>
    </Link>
  );
};

export default ContactButton;
