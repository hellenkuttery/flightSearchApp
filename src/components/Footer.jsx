import React from "react";
import { Box, TextField, Button, Typography, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import { socialButtonsStyle } from "../styles/globalStyles";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#222",
        color: "white",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
    
      <Typography variant="h5" sx={{ mb: 2 }}>
        Stay Updated!
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          gap: 2,
          justifyContent: "center",
          width: "100%",
        }}
      >
        <TextField
          label="Enter your email"
          variant="outlined"
          sx={{
            backgroundColor: "white",
            borderRadius: "5px",
            width: { xs: "90%", sm: "250px" },
          }}
        />
        <Button
          variant="contained"
          color="primary"
          sx={{
            mt: { xs: 2, sm: 0 },
            width: { xs: "90%", sm: "250px" },
            height: "60px",
          }}
        >
          Subscribe
        </Button>
      </Box>

      <Box>
        <IconButton sx={socialButtonsStyle}>
          <Facebook />
        </IconButton>
        <IconButton sx={socialButtonsStyle}>
          <Twitter />
        </IconButton>
        <IconButton sx={socialButtonsStyle}>
          <Instagram />
        </IconButton>
        <IconButton sx={socialButtonsStyle}>
          <LinkedIn />
        </IconButton>
      </Box>

      {/* Telif Hakkı */}
      <Typography variant="body2" sx={{ mt: 2, opacity: 0.7 }}>
        © 2024 All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
