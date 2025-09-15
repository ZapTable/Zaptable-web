import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container sx={{ textAlign: "center" }}>
          <Typography variant="h2" sx={{ fontWeight: 800 }}>404</Typography>
          <Typography color="text.secondary" sx={{ mt: 1 }}>Oops! Page not found</Typography>
          <Button href="/" sx={{ mt: 3 }} variant="contained">Return to Home</Button>
        </Container>
      </Box>
    </Layout>
  );
};

export default NotFound;
