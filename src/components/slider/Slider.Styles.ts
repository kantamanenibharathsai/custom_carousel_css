const sliderStyles = {
  mainContainer: {
    height: "100vh",
    width: "100%",
    pt: "50px",
  },

  heading: {
    font: "600 30px Poppins",
    fontSize: { xs: "25px", md: "40px" },
    textAlign: "center",
    color: "#000",
    mb: 7,
  },

  sliderContainer: {
    width: "1000px",
    maxWidth: "100%",
    height: { xs: "350px", sm: "400px", md: "600px" },
    margin: "auto",
    position: "relative",
    overflow: "hidden",
    // border: "2px solid red"
  },

  sliderListContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    display: "flex",
    // width: "maxContent",
    transition: "1.4s ease",
    "& img": {
      width: "1300px",
      maxWidth: "100vw",
      objectFit: "cover",
      height: "100%",
    },
  },

  BtnsContainer: {
    position: "absolute",
    top: "45%",
    left: { xs: "2%", sm: "5%" },
    width: { xs: "96%", sm: "90%" },
    display: "flex",
    // border: "2px solid red",
    justifyContent: "space-between",
    "& button": {
      width: { xs: "35px", md: "50px" },
      height: { xs: "35px", md: "50px" },
      minWidth: { xs: "0px", sm: "auto" },
      borderRadius: "50%",
      backgroundColor: "#fff5",
      color: "#fff",
      border: "none",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#fff5",
      },
    },
  },

  sliderDotsContainer: {
    position: "absolute",
    bottom: "10px",
    left: 0,
    color: "#fff",
    width: "100%",
    margin: 0,
    padding: 0,
    display: "flex",
    justifyContent: "center",
    // border: "2px solid green"
    // "& li:nth-child(1)": {
    //   width: "30px",
    // },
  },

  sliderDot: {
    listStyle: "none",
    width: { xs: "4px", sm: "10px" },
    height: { xs: "4px", sm: "10px" },
    borderRadius: { xs: "10px", sm: "20px" },
    backgroundColor: "#fff",
    margin: { xs: "8px", sm: "10px" },
    transition: `1.2s ease`,
    cursor: "pointer",
  },

  activeDot: {
    width: { xs: "20px", sm: "30px" },
  },
};

export default sliderStyles;
