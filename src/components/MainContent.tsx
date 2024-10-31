import React from "react";
import { Box, Typography, Grid2, Paper } from "@mui/material";
import YouTubeEmbed from "./YouTubeEmbed";
import ContactButton from "./ContactButton";

const MainContent: React.FC = () => {
  return (
    <Box
      sx={{
        padding: "30px",
        maxWidth: "1440px",
        margin: "0 auto",
        backgroundColor: "#f9f9f9",
      }}
    >
      {/* Первый блок: Заголовок и видео */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: "20px",
          marginBottom: "10px",
        }}
      >
        <Box sx={{ flex: 1 }}>
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
          <Typography variant="body1" sx={{ color: "#666" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            mattis, leo et condimentum ultricies, sem urna convallis metus, vel
            suscipit nibh lacus tincidunt ante.
          </Typography>
        </Box>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "40%",
          }}
        >
          <YouTubeEmbed videoId="dQw4w9WgXcQ" />
        </Box>
      </Box>

      {/* Второй блок: Сетка карточек */}
      <Box sx={{ textAlign: "center", marginBottom: "40px" }}>
        <Typography
          variant="h3"
          sx={{ fontWeight: "bold", fontSize: "1.75rem", marginBottom: "20px" }}
        >
          Also very important title
        </Typography>
        <Grid2 container spacing={2} columns={12} component="div">
          {[...Array(6)].map((_, index) => (
            <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={index} component="div">
              <Paper
                sx={{
                  padding: '20px',
                  textAlign: 'center',
                  backgroundColor: '#f9f9f9',
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  Title
                </Typography>
                <Typography variant="body2" sx={{ color: '#666', marginBottom: '16px' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum
                </Typography>
              </Paper>
            </Grid2>
          ))}
        </Grid2>
        
        <ContactButton />
      </Box>

      {/* Третий блок: Низ страницы */}
      <Box
        sx={{
          backgroundColor: "#f4f4f4",
          padding: "40px 20px",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", fontSize: "1.5rem", marginBottom: "20px" }}
        >
          Less important title
        </Typography>
        <ContactButton />
      </Box>
    </Box>
  );
};

export default MainContent;
