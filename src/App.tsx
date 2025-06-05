
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Overview from "./pages/Overview";
import OurApproach from "./pages/OurApproach";
import Careers from "./pages/Careers";
import Solutions from "./pages/Solutions";
import ForBorrowers from "./pages/ForBorrowers";
import ForInvestors from "./pages/ForInvestors";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/overview" element={<Overview />} />
          <Route path="/about/approach" element={<OurApproach />} />
          <Route path="/about/team" element={<Team />} />
          <Route path="/about/careers" element={<Careers />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/borrowers" element={<ForBorrowers />} />
          <Route path="/solutions/investors" element={<ForInvestors />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
