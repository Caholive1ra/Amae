import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import ReadingProgress from "./components/ReadingProgress";
import PageTransition from "./components/PageTransition";
import { ProductProvider } from "./contexts/ProductContext";
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./pages/Home";
import Collections from "./pages/Collections";
import Pieces from "./pages/Pieces";
import PieceDetail from "./pages/PieceDetail";
import Processes from "./pages/Processes";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function ScrollToTop() {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);
  
  return null;
}

const App = () => {
  const basePath = import.meta.env.VITE_BASE_PATH || "/";

  useEffect(() => {
    document.documentElement.classList.add('smooth-scroll');
  }, []);

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <TooltipProvider>
            <ProductProvider>
              <Toaster />
              <Sonner />
              <BrowserRouter basename={basePath}>
                <div className="min-h-screen flex flex-col">
                  <Preloader />
                  <ReadingProgress />
                  <Header />
                  <ScrollToTop />
                  <main className="flex-1">
                    <PageTransition>
                      <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/colecoes" element={<Collections />} />
                        <Route path="/pecas" element={<Pieces />} />
                        <Route path="/peca/:id" element={<PieceDetail />} />
                        <Route path="/processos" element={<Processes />} />
                        <Route path="/sobre" element={<About />} />
                        <Route path="/contato" element={<Contact />} />
                        <Route path="*" element={<NotFound />} />
                      </Routes>
                    </PageTransition>
                  </main>
                  <Footer />
                </div>
              </BrowserRouter>
            </ProductProvider>
          </TooltipProvider>
        </HelmetProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default App;
