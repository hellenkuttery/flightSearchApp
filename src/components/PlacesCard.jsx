import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";

export default function PlacesCard() {
  const { places } = useSelector((state) => state.flight);
  return (
    <Box>
      <Box
        style={{
          backgroundColor: "#292828",
          padding: "1rem",
          width: "100%",
          borderRadius: "2rem",
          display: "flex",
          justifyContent: { sm: "flex-start", md: "center" },
          flexWrap: "wrap",
          gap: "1rem",
          alignItems: "center",
          boxShadow: "0px 0px 3px #afa9a9",
          margin: "1rem",
          minHeight: "500px",
        }}
      >
        {places?.map((place, index) => (
          <Card sx={{ maxWidth: 345 }} key={index}>
            <CardActionArea>
              <Typography
                gutterBottom
                variant="h5"
                component="Box"
                sx={{ marginLeft: 2 }}
              >
                {place.name}
              </Typography>
              <CardMedia
                component="img"
                height="140"
                image={place.image_url}
                alt="green iguana"
                sx={{ padding: 2, border: "2px solid #DB6E6E" }}
              />
              <CardContent>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Cupiditate officiis maiores explicabo numquam blanditiis
                  perspiciatis incidunt adipisci nobis voluptas molestias!
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
