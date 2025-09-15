import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import TableBarIcon from "@mui/icons-material/TableBar";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import LoyaltyIcon from "@mui/icons-material/Loyalty";

export default function Features() {
  const items = [
    {
      title: "POS & Billing",
      description: "Fast, offline-first billing with GST-ready receipts.",
      Icon: ReceiptLongIcon,
      color: "#56e39f",
    },
    {
      title: "Table & Order Management",
      description: "Track tables, KOTs, and order flow in real-time.",
      Icon: TableBarIcon,
      color: "#59c9a5",
    },
    {
      title: "Inventory & Recipes",
      description: "Smart stock, wastage, and recipe-level costing.",
      Icon: Inventory2Icon,
      color: "#598392",
    },
    {
      title: "CRM & Loyalty",
      description: "Delight customers with points, offers, and feedback.",
      Icon: LoyaltyIcon,
      color: "#124559",
    },
  ];

  return (
    <Box sx={{ py: { xs: 8, md: 12 } }}>
      <Container>
        <Typography variant="overline" color="text.secondary">Capabilities</Typography>
        <Typography variant="h3" sx={{ fontWeight: 800, mb: 4 }}>Everything you need to run your restaurant</Typography>
        <Grid container spacing={3}>
          {items.map(({ title, description, Icon, color }) => (
            <Grid key={title} item xs={12} sm={6} md={3}>
              <Box sx={{ p: 3, border: "1px solid", borderColor: "divider", borderRadius: 3, bgcolor: "background.paper", height: "100%" }}>
                <Box sx={{ width: 44, height: 44, borderRadius: 2, bgcolor: `${color}22`, display: "grid", placeItems: "center", mb: 1 }}>
                  <Icon sx={{ color }} />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>{title}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>{description}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
