import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import InsertChartIcon from "@mui/icons-material/InsertChart";

const steps = [
  { title: "Take Orders", Icon: RestaurantIcon, color: "#56e39f" },
  { title: "Kitchen", Icon: LocalDiningIcon, color: "#59c9a5" },
  { title: "Billing", Icon: PointOfSaleIcon, color: "#598392" },
  { title: "Reports", Icon: InsertChartIcon, color: "#124559" },
];

export default function HowItWorks() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "rgba(86,227,159,0.06)" }}>
      <Container>
        <Typography variant="overline" color="text.secondary">Flow</Typography>
        <Typography variant="h3" sx={{ fontWeight: 800, mb: 4 }}>How it works</Typography>
        <Grid container spacing={2} alignItems="center">
          {steps.map((s, i) => (
            <Grid key={s.title} item xs={12} sm={6} md={3}>
              <Box sx={{ p: 3, textAlign: "center" }}>
                <Box sx={{ width: 64, height: 64, borderRadius: 3, bgcolor: `${s.color}22`, display: "grid", placeItems: "center", mx: "auto", mb: 1 }}>
                  <s.Icon sx={{ color: s.color }} />
                </Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>{s.title}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ display: { xs: "none", md: "flex" }, justifyContent: "space-between", mt: 2 }}>
          <ArrowForwardIcon sx={{ color: "#5b6c5d" }} />
          <ArrowForwardIcon sx={{ color: "#5b6c5d" }} />
          <ArrowForwardIcon sx={{ color: "#5b6c5d" }} />
        </Box>
      </Container>
    </Box>
  );
}
