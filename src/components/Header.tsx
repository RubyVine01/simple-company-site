import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

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
      </Toolbar>
    </AppBar>
  );
};

export default Header;
