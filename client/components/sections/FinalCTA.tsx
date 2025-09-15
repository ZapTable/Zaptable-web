import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function FinalCTA() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 } }}>
      <Container sx={{ textAlign: "center" }}>
        <Typography variant="h4" sx={{ fontWeight: 800 }}>Ready to run your restaurant smarter?</Typography>
        <Box sx={{ display: "flex", gap: 2, justifyContent: "center", mt: 3 }}>
          <Button href="#get-started" size="large" variant="contained">Get Started</Button>
          <Button href="#demo" size="large" variant="outlined">Book a Demo</Button>
        </Box>
      </Container>
    </Box>
  );
}
