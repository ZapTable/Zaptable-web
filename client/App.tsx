import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PlaceholderPage from "@/components/PlaceholderPage";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/features" element={<PlaceholderPage title="Features" />} />
            <Route path="/pricing" element={<PlaceholderPage title="Pricing" />} />
            <Route path="/support" element={<PlaceholderPage title="Support" />} />
            <Route path="/contact" element={<PlaceholderPage title="Contact" />} />
            <Route path="/about" element={<PlaceholderPage title="About" />} />
            <Route path="/signin" element={<PlaceholderPage title="Sign in" />} />
            <Route path="/signup" element={<PlaceholderPage title="Sign up" />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
