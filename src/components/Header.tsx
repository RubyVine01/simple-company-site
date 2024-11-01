import { AppBar, Button, colors, Toolbar, Typography } from "@mui/material";
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
          margin: "15px 45px 15px 0",
        }}
      >
        <Link href="/" passHref>
          <Typography
            sx={{
              color: "#000",
              fontWeight: "500",
              fontSize: "1.5rem",
            }}
          >
            Some Company
          </Typography>
        </Link>
        <ContactButton />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
