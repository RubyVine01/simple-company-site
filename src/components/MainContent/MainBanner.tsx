import React from "react";
import { Box, Typography } from "@mui/material";
import YouTubeEmbed from "../YouTubeEmbed";

const MainBanner: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        columnGap: "200px",
        padding: "30px 30px 85px 30px",
        alignItems: "center",
        backgroundColor: "#f4f4f4",
      }}
    >
      <Box sx={{ flex: 13 }}>
        <Typography
          variant="h1"
          sx={{
            fontWeight: "bold",
            fontSize: "3.1rem",
            marginBottom: "16px",
          }}
        >
          Most important title on the page
        </Typography>
        <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum ultricies, sem urna convallis metus, vel suscipit nibh lacus tincidunt ante.
        </Typography>
      </Box>
      <Box
        sx={{
          flex: 16,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid #e0e0e0",
          width: "100%",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: "800px",
            paddingTop: "45%",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          >
            <YouTubeEmbed videoId="dQw4w9WgXcQ" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MainBanner;
