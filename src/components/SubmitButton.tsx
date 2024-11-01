import React from "react";
import { Button } from "@mui/material";

const SubmitButton: React.FC = () => {
  return (
    <Button
      type="submit"
      variant="contained"
      color="primary"
      fullWidth
      sx={{
        backgroundColor: "#333",
        color: "#fff",
        textTransform: "none",
        fontWeight: "300",
        fontSize: "1rem",
        borderRadius: "9px",
        paddingY: "5px",
        "&:hover": {
          backgroundColor: "#555",
        },
      }}
    >
      Submit
    </Button>
  );
};

export default SubmitButton;
