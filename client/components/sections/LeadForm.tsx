import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import { useId, useState } from "react";

export default function LeadForm() {
  const formId = useId();
  const [outlets, setOutlets] = useState("1");

  return (
    <Box sx={{ position: "relative", zIndex: 2, pb: { xs: 8, md: 12 }, pt: { xs: 8, md: 10 }, bgcolor: "#f2f4f6" }} id="get-started">
      <Container sx={{ maxWidth: "lg" as const }}>
        <Paper elevation={8} sx={{ p: { xs: 3, md: 5 }, borderRadius: 3, boxShadow: "0 0 0 1px rgba(65,56,23,0.06), 0 10px 15px -3px rgba(65,56,23,0.22), 0 4px 6px -4px rgba(0,0,0,0.1)" }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>We'd love to answer your questions</Typography>
              <Typography color="text.secondary" sx={{ mb: { xs: 2, md: 0 } }}>
                Have a query? We'd be happy to answer any questions you might have.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <form action="#" onSubmit={(e)=>e.preventDefault()}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Name" name={`name-${formId}`} required />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Phone or Email" name={`contact-${formId}`} required />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField select fullWidth label="Outlets" value={outlets} onChange={(e)=>setOutlets(e.target.value)}>
                      {['1','2-3','4-10','10+'].map(v=> <MenuItem key={v} value={v}>{v}</MenuItem>)}
                    </TextField>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="City" name={`city-${formId}`} />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField fullWidth multiline minRows={3} label="Tell us about your setup" />
                  </Grid>
                  <Grid item xs={12}>
                    <Button type="submit" variant="contained" size="large" fullWidth>Request Demo</Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}
