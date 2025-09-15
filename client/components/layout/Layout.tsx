import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";

const navItems = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Support", href: "/support" },
  { label: "Contact", href: "/contact" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ minHeight: "100dvh", bgcolor: "background.default" }}>
      <AppBar position="sticky" elevation={0} color="transparent" sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Toolbar>
          <IconButton aria-label="menu" sx={{ display: { xs: "inline-flex", md: "none" }, mr: 1 }} onClick={() => setOpen(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 800, color: "text.primary" }}>
            ZapTable
          </Typography>
          <Box sx={{ gap: 3, alignItems: "center", display: { xs: "none", md: "flex" } }}>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} underline="none" color="text.secondary" sx={{ fontWeight: 600 }}>
                {item.label}
              </Link>
            ))}
            <Link href="/signin" underline="none" color="text.secondary" sx={{ fontWeight: 600 }}>Sign in</Link>
            <Button href="/signup" variant="outlined" color="primary">Sign up</Button>
            <Button href="#get-started" variant="contained" color="primary">Book a Demo</Button>
            <Button href="#get-started" variant="outlined" color="primary">Get Started</Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 280 }} role="presentation" onClick={() => setOpen(false)}>
          <List>
            {navItems.map((item) => (
              <ListItem key={item.href} disablePadding>
                <ListItemButton component="a" href={item.href}>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem disablePadding>
              <ListItemButton component="a" href="/signin">
                <ListItemText primary="Sign in" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="/signup">
                <ListItemText primary="Sign up" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#get-started">
                <ListItemText primary="Book a Demo" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#get-started">
                <ListItemText primary="Get Started" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>

      <main>{children}</main>

      <Box component="footer" sx={{ bgcolor: "#0f172a", color: "#eff6e0", mt: 10 }}>
        <Container sx={{ py: 6, display: "grid", gap: 4, gridTemplateColumns: { xs: "1fr", md: "2fr 1fr 1fr 1fr" } }}>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 800 }}>ZapTable</Typography>
            <Typography variant="body2" sx={{ mt: 1, opacity: 0.8 }}>
              Run your restaurant smarter with a fast, offline-first POS and all-in-one management platform.
            </Typography>
          </Box>
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1 }}>Product</Typography>
            <FooterLink href="/features">Features</FooterLink>
            <FooterLink href="/pricing">Pricing</FooterLink>
            <FooterLink href="/support">Support</FooterLink>
          </Box>
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1 }}>Company</Typography>
            <FooterLink href="/about">About</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
          </Box>
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1 }}>Get Started</Typography>
            <FooterLink href="#get-started">Create Account</FooterLink>
            <FooterLink href="#demo">Book a Demo</FooterLink>
          </Box>
        </Container>
        <Box sx={{ borderTop: "1px solid rgba(255,255,255,0.1)", py: 2 }}>
          <Container sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Typography variant="caption">© {new Date().getFullYear()} ZapTable</Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <FooterLink href="#" underline="hover">Terms</FooterLink>
              <FooterLink href="#" underline="hover">Privacy</FooterLink>
            </Box>
          </Container>
        </Box>
      </Box>
    </Box>
  );
}

function FooterLink({ href, children, underline }: { href: string; children: React.ReactNode; underline?: "none" | "hover" | "always" }) {
  return (
    <Link href={href} color="#eff6e0" underline={underline ?? "none"} sx={{ display: "block", my: 0.5, opacity: 0.85 }}>
      {children}
    </Link>
  );
}
