import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export default function Screenshots() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 } }}>
      <Container>
        <Typography variant="overline" color="text.secondary">Product</Typography>
        <Typography variant="h3" sx={{ fontWeight: 800, mb: 4 }}>Screenshots</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <ScreenMock title="POS Screen" color="#56e39f" height={340} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <ScreenMock title="Waiter App" color="#59c9a5" height={160} />
              </Grid>
              <Grid item xs={12}>
                <ScreenMock title="Manager Dashboard" color="#598392" height={160} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

function ScreenMock({ title, color, height }: { title: string; color: string; height: number }) {
  const src = title.includes("POS") ? "/demo/pos.svg" : title.includes("Waiter") ? "/demo/waiter.svg" : "/demo/dashboard.svg";
  return (
    <Box sx={{ p: 2, border: "1px solid", borderColor: "divider", borderRadius: 3, bgcolor: "background.paper" }}>
      <Box sx={{ height, borderRadius: 2, overflow: "hidden", border: "1px solid", borderColor: "divider" }}>
        <img src={src} alt={title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </Box>
      <Typography variant="subtitle2" color="text.secondary" sx={{ mt: 1 }}>{title}</Typography>
    </Box>
  );
}
