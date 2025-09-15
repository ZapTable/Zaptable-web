import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function Hero() {
  return (
    <Box sx={{ position: "relative", overflow: "hidden", pb: { xs: 8, md: 12 }, pt: { xs: 8, md: 14 }, background: "linear-gradient(135deg, #eff6e0 0%, #dbe7cc 100%)" }}>
      <Container sx={{ position: "relative", zIndex: 1 }}>
        <Stack direction={{ xs: "column", md: "row" }} spacing={5} alignItems={{ md: "center" }}>
          <Box sx={{ flex: 1 }}>
            <Typography component="h1" variant="h2" sx={{ fontWeight: 800, lineHeight: 1.1 }}>
              Run Your Restaurant Smarter, Online or Offline
            </Typography>
            <Typography variant="h6" sx={{ mt: 2, color: "text.secondary", maxWidth: 720 }}>
              A complete POS and management platform for billing, orders, inventory, and more.
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mt: 4 }}>
              <Button component="a" href="#get-started" variant="contained" size="large">Get Started</Button>
              <Button component="a" href="#get-started" variant="outlined" size="large">Book a Demo</Button>
            </Stack>
            <Stack direction="row" spacing={4} sx={{ mt: 4, color: "text.secondary" }}>
              <FeatureBullet text="Offline-first billing" />
              <FeatureBullet text="Kitchen & table management" />
              <FeatureBullet text="GST-ready reports" />
            </Stack>
          </Box>
          <Box sx={{ flex: 1, display: "grid", gap: 2, gridTemplateColumns: { xs: "1fr 1fr", md: "1fr 1fr" } }}>
            <MockCard title="POS Screen" accent="#56e39f"/>
            <MockCard title="Waiter App" accent="#59c9a5" delay={80}/>
            <MockCard title="Manager Dashboard" wide accent="#598392" delay={160}/>
          </Box>
        </Stack>
      </Container>
      <GradientOrnaments />
    </Box>
  );
}

function FeatureBullet({ text }: { text: string }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <Box sx={{ width: 8, height: 8, bgcolor: "primary.main", borderRadius: 99 }} />
      <Typography variant="body2">{text}</Typography>
    </Box>
  );
}

function MockCard({ title, wide, accent, delay = 0 }: { title: string; wide?: boolean; accent: string; delay?: number }) {
  const src = title.includes("POS") ? "/demo/pos.svg" : title.includes("Waiter") ? "/demo/waiter.svg" : "/demo/dashboard.svg";
  return (
    <Box
      sx={{
        gridColumn: wide ? "span 2" : undefined,
        p: 2.5,
        borderRadius: 3,
        minHeight: 160,
        display: "flex",
        flexDirection: "column",
        gap: 1,
        background: `linear-gradient(180deg, rgba(255,255,255,0.85), rgba(255,255,255,0.95))`,
        border: "1px solid rgba(0,0,0,0.06)",
        boxShadow: `0 12px 30px rgba(0,0,0,0.06), 0 0 0 4px ${accent}22 inset`,
        animation: `floatIn 600ms ease ${delay}ms both`,
        "@keyframes floatIn": {
          from: { transform: "translateY(12px)", opacity: 0 },
          to: { transform: "translateY(0)", opacity: 1 },
        },
      }}
    >
      <Box sx={{ display: "flex", gap: 1 }}>
        <Dot color={accent} />
        <Dot color={accent} />
        <Dot color={accent} />
      </Box>
      <Box sx={{ flexGrow: 1, borderRadius: 2, border: "1px solid", borderColor: "divider", bgcolor: "background.paper", overflow: "hidden" }}>
        <img src={src} alt={title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </Box>
      <Typography variant="subtitle2" sx={{ color: "text.secondary", fontWeight: 700 }}>{title}</Typography>
    </Box>
  );
}

function Dot({ color }: { color: string }) {
  return <Box sx={{ width: 8, height: 8, bgcolor: color, borderRadius: 99 }} />;
}

function GradientOrnaments() {
  return (
    <>
      <Box sx={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <Box sx={{ position: "absolute", width: 420, height: 420, top: -60, right: -60, borderRadius: 999, background: "radial-gradient(closest-side, #56e39f33, transparent)" }} />
        <Box sx={{ position: "absolute", width: 420, height: 420, bottom: -60, left: -60, borderRadius: 999, background: "radial-gradient(closest-side, #12455922, transparent)" }} />
      </Box>
    </>
  );
}
