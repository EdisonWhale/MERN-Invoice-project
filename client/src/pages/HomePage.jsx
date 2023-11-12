import { Box, Button, Grid, Link, styled, Typography } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import "../styles/homepage.css";

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: "12rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "9rem",
  },
}));

const SignInButton = styled(Button)({
  borderColor: "#000000",
  borderRadius: "25px",
  border: "3px solid",
  "&:hover": {
    borderColor: "#07f011",
    boxShadow: "none",
    border: "2px solid",
  },
});

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <header className="masthead main-bg-image">
        <Grid>
          <Grid item md={12} lg={12} sm={6}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <StyledTypography
                variant="h1"
                align="center"
                sx={{ textTransform: "uppercase", mt: "13rem" }}
                className="homepage-header"
              >
                WELCOME TO INVOICEPRO
              </StyledTypography>
              <Typography
                align="center"
                variant="h4"
                component="div"
                gutterBottom
                sx={{ color: "rgba(255,255,255,0.6)" }}
              >
                Whatever business you run, Creating Invoices, Receipts and
                Quotations is made easy with our app.
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                mt: 5,
              }}
            >
              <SignInButton
                variant="contained"
                color="success"
                size="large"
                sx={{ fontSize: "1.5em", borderRadius: "25px" }}
                onClick={() => navigate("/login")}
              >
                <Link
                  component={RouterLink}
                  to="/login"
                  sx={{
                    textDecoration: "none",
                    color: "white",
                    fontSize: "2rem",
                  }}
                >
                  Access Account
                </Link>
              </SignInButton>
            </Box>
          </Grid>
        </Grid>
      </header>
    </>
  );
};

export default HomePage;
