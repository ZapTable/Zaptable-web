import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const points = [
  { title: "Offline-first", desc: "Works even without internet—syncs automatically when back online.", color: "#56e39f" },
  { title: "All-in-one platform", desc: "POS, inventory, CRM, reports—everything in a single dashboard.", color: "#59c9a5" },
  { title: "Made for India", desc: "GST-ready, multi-outlet, KOTs—built for Indian restaurants.", color: "#124559" },
];

export default function WhyChooseUs() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "rgba(17, 22, 30, 0.02)" }}>
      <Container>
        <Typography variant="overline" color="text.secondary">Why Choose Us</Typography>
        <Typography variant="h3" sx={{ fontWeight: 800, mb: 4 }}>Built for modern restaurants</Typography>
        <Grid container spacing={3}>
          {points.map((p) => (
            <Grid key={p.title} item xs={12} md={4}>
              <Box sx={{ p: 3, border: "1px solid", borderColor: "divider", borderRadius: 3, bgcolor: "background.paper", height: "100%" }}>
                <Box sx={{ width: 6, height: 6, borderRadius: 99, bgcolor: p.color, mb: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 700 }}>{p.title}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>{p.desc}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
