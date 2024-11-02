import React from "react";
import { Box, Typography, Grid2 } from "@mui/material";
import ContactButton from "../ContactButton";

const FeaturesGrid: React.FC = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        margin: { xs: "20px", sm: " 55px 20px 40px 30px" },
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "2rem", sm: "2.4rem", md: "2.65rem", lg: "3rem" },
          marginBottom: { xs: "20px", sm: "50px", md: "100px" },
        }}
      >
        Also very important&nbsp;title
      </Typography>
      <Grid2
        container
        rowSpacing={{ xs: 2, sm: 6, md: 12 }}
        columnSpacing={{ xs: 2, sm: 4, md: 10 }}
        columns={12}
        component="div"
        sx={{
          margin: { xs: "0 0 15px 0", sm: "0 0 30px 0", xl: " 0 0 30px 60px" },
        }}
      >
        {[...Array(6)].map((_, index) => (
          <Grid2
            size={{ xs: 12, sm: 6, md: 4 }}
            sx={{
              textAlign: "start",
              display: "flex",
              flexDirection: "column",
              rowGap: "10px",
              margin: { xs: "0 10px", sm: "0" },
            }}
            key={index}
            component="div"
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "1.3rem", sm: "1.5rem" },
              }}
            >
              Title
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#666",
                fontSize: { xs: "0.9rem", sm: "1rem" },
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              mattis, leo et&nbsp;condimentum
            </Typography>
          </Grid2>
        ))}
      </Grid2>
      <ContactButton />
    </Box>
  );
};

export default FeaturesGrid;
