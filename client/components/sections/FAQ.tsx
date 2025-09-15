import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqs = [
  {
    q: "Does ZapTable work without internet?",
    a: "Yes. Billing and orders continue offline. Your data syncs automatically once the connection is restored.",
  },
  {
    q: "What hardware do I need?",
    a: "Any modern Android tablet/phone or Windows machine works. We support receipt printers, cash drawers, and barcode scanners.",
  },
  {
    q: "Is it GST compliant?",
    a: "Yes. We support GST-ready invoices, HSN/SAC, and exportable returns reports.",
  },
  {
    q: "Can I use it across multiple outlets?",
    a: "Absolutely. Manage menus, pricing, and inventory centrally and get outlet-wise reports.",
  },
  {
    q: "What integrations are available?",
    a: "KOT/printer, SMS/email notifications, and popular payment gateways. Ask us for custom integrations.",
  },
  {
    q: "How do I migrate from my current POS?",
    a: "We help import your menu, customers, and inventory. Onboarding usually finishes within a day.",
  },
  {
    q: "Is my data secure?",
    a: "All data is encrypted in transit and at rest with role-based access control.",
  },
  {
    q: "What support do you provide?",
    a: "Email and chat support 7 days a week, with priority SLAs on Pro and Enterprise.",
  },
];

export default function FAQ() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 } }}>
      <Container>
        <Typography variant="overline" color="text.secondary">Support</Typography>
        <Typography variant="h3" sx={{ fontWeight: 800, mb: 2 }}>Frequently asked questions</Typography>
        {faqs.map((f, i) => (
          <Accordion key={i} defaultExpanded={i===0} sx={{ bgcolor: "background.paper", borderRadius: 2, mb: 1, border: "1px solid", borderColor: "divider" }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}> <Typography sx={{ fontWeight: 600 }}>{f.q}</Typography> </AccordionSummary>
            <AccordionDetails> <Typography color="text.secondary">{f.a}</Typography> </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
}
