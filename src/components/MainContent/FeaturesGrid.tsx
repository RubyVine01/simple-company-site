import React from "react";
import { Box, Typography, Grid2, Paper } from "@mui/material";
import ContactButton from "../ContactButton";

const FeaturesGrid: React.FC = () => {
  return (
    <Box sx={{ textAlign: "center", margin: " 55px 20px 40px 30px"}}>
      <Typography
        variant="h2"
        sx={{ fontWeight: "bold", fontSize: "3.1rem", marginBottom: "100px" }}
      >
        Also very important title
      </Typography>
      <Grid2 container  rowSpacing={12} columnSpacing={12}  columns={12} component="div"  sx={{
           marginBottom: '60px', marginLeft: '30px'
            }}>
        {[...Array(6)].map((_, index) => (
          <Grid2
            size={{ xs: 12, sm: 6, md: 4 }}
            sx={{
              textAlign: "start",
              display: "flex",
              flexDirection: "column",
              rowGap: "10px",
              maxWidth: "300px",
            }}
            key={index}
            component="div"
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                fontSize: "1.5rem",
              }}
            >
              Title
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#666", fontSize: "1rem" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              mattis, leo et condimentum
            </Typography>
          </Grid2>
        ))}
      </Grid2>
      <ContactButton />
    </Box>
  );
};

export default FeaturesGrid;
