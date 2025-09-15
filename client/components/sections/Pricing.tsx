import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";

const basePrices = {
  starter: 999,
  pro: 1999,
  enterprise: 0,
};

export default function Pricing() {
  const [annual, setAnnual] = useState(true);
  const multiplier = annual ? 10 : 1; // simple pricing: 2 months free annually (12 vs 10)

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "rgba(1,22,30,0.03)" }} id="pricing">
      <Container>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 2 }}>
          <Box>
            <Typography variant="overline" color="text.secondary">Plans</Typography>
            <Typography variant="h3" sx={{ fontWeight: 800, mb: 1 }}>Simple pricing</Typography>
            <Typography color="text.secondary">Monthly or annual billing in INR. Taxes extra.</Typography>
          </Box>
          <FormControlLabel
            control={<Switch checked={annual} onChange={(e) => setAnnual(e.target.checked)} />}
            label={annual ? "Annual (2 months free)" : "Monthly"}
          />
        </Box>

        <Grid container spacing={3} sx={{ mt: 2 }}>
          <Grid item xs={12} md={4}>
            <Plan
              name="Starter"
              price={basePrices.starter * multiplier}
              features={["Single outlet", "Offline billing", "Basic reports"]}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Plan
              highlight
              name="Pro"
              price={basePrices.pro * multiplier}
              features={["Multi-outlet", "Inventory & recipes", "CRM & loyalty", "Advanced reports"]}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Plan name="Enterprise" price={basePrices.enterprise} features={["Custom SLAs", "Dedicated support", "Custom integrations"]} contact />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

import { useState } from "react";

function Plan({ name, price, features, highlight, contact }: { name: string; price: number; features: string[]; highlight?: boolean; contact?: boolean }) {
  return (
    <Box sx={{ p: 3, borderRadius: 3, border: "1px solid", borderColor: highlight ? "primary.main" : "divider", bgcolor: "background.paper", boxShadow: highlight ? "0 12px 30px rgba(86, 227, 159, 0.25)" : "none", height: "100%" }}>
      <Typography variant="subtitle2" color={highlight ? "primary.main" : "text.secondary"} sx={{ fontWeight: 800 }}>{name}</Typography>
      <Box sx={{ display: "flex", alignItems: "baseline", gap: 1, mt: 1 }}>
        {contact ? (
          <Typography variant="h5" sx={{ fontWeight: 800 }}>Contact us</Typography>
        ) : (
          <>
            <Typography variant="h4" sx={{ fontWeight: 800 }}>₹{price}</Typography>
            <Typography color="text.secondary">/{" "} {price > 0 ? ("mo") : ("")}</Typography>
          </>
        )}
      </Box>
      <Box sx={{ mt: 2, display: "grid", gap: 1 }}>
        {features.map((f) => (
          <Typography key={f} variant="body2">• {f}</Typography>
        ))}
      </Box>
      <Button fullWidth sx={{ mt: 3 }} variant={highlight ? "contained" : "outlined"}>{contact ? "Contact Sales" : "Get Started"}</Button>
    </Box>
  );
}
