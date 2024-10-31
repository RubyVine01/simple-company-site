import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import ContactButton from "./ContactButton";

const Header: React.FC = () => {
  return (
    <AppBar
      position="sticky"
      color="inherit"
      sx={{ boxShadow: "none", borderBottom: "1px solid #e0e0e0" }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "30px 20px",
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
        >
          Some Company
        </Typography>
        <ContactButton />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
