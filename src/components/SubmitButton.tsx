import React from "react";
import { Button } from "@mui/material";

const SubmitButton: React.FC = () => {
  return (
    <Button
      type="submit"
      variant="contained"
      color="primary"
      fullWidth
      aria-label="Submit the form"
      sx={{
        backgroundColor: "var(--primary-color)",
        color: "#fff",
        textTransform: "none",
        fontWeight: "300",
        fontSize: "1rem",
        borderRadius: "9px",
        paddingY: "5px",
        "&:hover": {
          backgroundColor: "var(--secondary-color)",
        },
      }}
    >
      Submit
    </Button>
  );
};

export default SubmitButton;
