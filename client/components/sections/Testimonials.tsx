import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const testimonials = [
  {
    quote: "ZapTable simplified our billing and inventory across two outlets. Works even when Wi‑Fi drops.",
    author: "Ananya, Café Bloom (Mumbai)",
  },
  {
    quote: "Training staff was easy. The kitchen gets orders instantly and mistakes are down.",
    author: "Rahul, The Curry House (Delhi)",
  },
];

export default function Testimonials() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 } }}>
      <Container>
        <Typography variant="overline" color="text.secondary">Social Proof</Typography>
        <Typography variant="h3" sx={{ fontWeight: 800, mb: 4 }}>Loved by restaurant owners</Typography>
        <Grid container spacing={3}>
          {testimonials.map((t, i) => (
            <Grid key={i} item xs={12} md={6}>
              <Box sx={{ p: 3, border: "1px solid", borderColor: "divider", borderRadius: 3, bgcolor: "background.paper", height: "100%" }}>
                <Typography variant="h6" sx={{ fontStyle: "italic" }}>“{t.quote}”</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>— {t.author}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
