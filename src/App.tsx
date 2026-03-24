import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ScrollToTop from "./components/ScrollToTop";
import ContactPage from "./pages/ContactPage";
import EventPage from "./pages/EventPage";
import ProjectPage from "./pages/ProjectPage";
import TeamPage from "./pages/TeamPage";
import ProjectPage2 from "./pages/ProjectPage2";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/event" element={<EventPage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/project2" element={<ProjectPage2 />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
