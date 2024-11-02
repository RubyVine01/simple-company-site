import React from "react";
import { Box, Typography } from "@mui/material";
import YouTubeEmbed from "../YouTubeEmbed";

const MainBanner: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        columnGap: { md: "125px", md_lg: "150px", lg: "200px" },
        padding: {
          xs: "25px 20px",
          sm: "30px 30px 55px 30px",
          md: "30px 30px 85px 30px",
        },
        alignItems: "center",
        backgroundColor: "#f4f4f4",
      }}
    >
      <Box sx={{ flex: 13 }}>
        <Typography
          variant="h1"
          sx={{
            fontWeight: "bold",
            fontSize: {
              xs: "2.1rem",
              sm: "2.5rem",
              md: "2.75rem",
              lg: "3.1rem",
            },
            marginBottom: { xs: "10px", md: "16px" },
          }}
        >
          Most important title on&nbsp;the&nbsp;page
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "0.9rem", sm: "1rem" },
            marginBottom: { xs: "16px", md: "0" },
            textAlign: { xs: "justify", sm: "start" },
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          mattis, leo et&nbsp;condimentum ultricies, sem urna convallis metus,
          vel suscipit nibh lacus tincidunt ante.
        </Typography>
      </Box>
      <Box
        sx={{
          flex: 16,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
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
