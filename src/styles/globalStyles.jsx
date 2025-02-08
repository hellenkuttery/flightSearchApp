export const bodyStyle = {
  margin: 0,
  padding: "1.5rem",
  boxSizing: "border-box",
  fontFamily: '"Roboto", sans-serif',
  backgroundImage: "linear-gradient(to right,#8f8888dd,#996b6bdd,#8f8888dd)",
};
export const flexColumn = {
  display: "flex",
  flexDirection: "column",
  gap: 2,
};
export const containerStyle = {
  backgroundColor: "primary.main",
  width: "95vw",
  margin: "0 auto",
  padding: "10px 0",
  borderRadius: "10px",
};

export const sliderStyle = {
  backgroundImage: `radial-gradient(circle, rgba(255, 88, 94,0.4), rgba(40, 40, 40,0.3)), url(src/assets/flight.jpeg)`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "500px",
};

export const btnStyle = {
  backgroundColor: "secondary.main",
  border: "2px solid white",
  color: "white",
  maxWidth: "200px",
  marginTop: "1rem",
  borderRadius: "2rem",
};
export const largeGradientBorderWrapperStyle = {
  display: "inline-flex",
  position: "relative",
  borderRadius: "50%",
  padding: "5px",
  width: "110px",
  height: "110px",
  background: "linear-gradient(45deg, #282828, #ff585e)",
  justifyContent: "center",
  alignItems: "center",
  margin: "1rem",
};

export const smallGradientBorderWrapperStyle = {
  display: "inline-flex",
  position: "relative",
  borderRadius: "50%",
  padding: "5px",
  width: "80px",
  height: "80px",
  background: "linear-gradient(45deg, #282828, #ff585e)",
  justifyContent: "center",
  alignItems: "center",
  margin: "1rem",
};

export const largeGradientBorderStyle = {
  width: "100px",
  height: "100px",
  borderRadius: "50%",
  backgroundColor: "#282828",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#fff",
  fontSize: "2rem",
  fontWeight: "bold",
};

export const smallGradientBorderStyle = {
  width: "70px",
  height: "70px",
  borderRadius: "50%",
  backgroundColor: "#282828",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#fff",
  fontSize: "1.5rem",
  fontWeight: "bold",
};

export const gradientBorderCardStyle = {
  display: "inline-block",
  position: "relative",
  background: "transparent",
  padding: "5px",
  borderRadius: "1rem",
  backgroundImage: "linear-gradient(45deg, #282828, #ff585e)",

  marginTop: "1rem",
};

export const gradientCardStyle = {
  padding: "20px",
  fontSize: "2rem",
  fontWeight: "bold",
  color: "#fff",
  backgroundColor: "#282828",
  borderRadius: "1rem",
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const borderAnimaiton = {
  color: "white",
  padding: "1rem",
  fontSize: "1.2rem",
  position: "relative",
  display: "inline-block",
  "&::after": {
    content: '""',
    position: "absolute",
    left: 0,
    bottom: "-2px",
    width: "100%",
    height: "2px",
    background: "linear-gradient(90deg, #8b0303, #464642, #ff7b00, #2e2c2c)",
    backgroundSize: "200% 100%",
    animation: "moveGradient 2s linear infinite",
  },
  "@keyframes moveGradient": {
    "0%": { backgroundPosition: "0% 50%" },
    "100%": { backgroundPosition: "200% 50%" },
  },
};

export const socialButtonsStyle = {
  color: "white",
  fontSize: "2rem",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    color: "secondary.main",
    transform: "scale(1.2)",
  },
};
