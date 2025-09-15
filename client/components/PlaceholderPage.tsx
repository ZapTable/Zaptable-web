import Layout from "@/components/layout/Layout";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function PlaceholderPage({ title }: { title: string }) {
  return (
    <Layout>
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container>
          <Typography variant="h3" sx={{ fontWeight: 800 }}>{title}</Typography>
          <Typography sx={{ mt: 1 }} color="text.secondary">
            This page is a placeholder. Tell me what you want here and I will build it.
          </Typography>
        </Container>
      </Box>
    </Layout>
  );
}
