import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { OffersProvider } from "@/context/OffersContext";
import { CartProvider } from "@/context/CartContext";
import { MenuProvider } from "@/context/MenuContext";
import { AuthProvider } from "@/context/AuthContext";
import Index from "./pages/Index";
import Cart from "./pages/Cart";
import AdminLogin from "./pages/AdminLogin";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <MenuProvider>
          <OffersProvider>
            <CartProvider>
              <Toaster />
              <Sonner />
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/admin-login" element={<AdminLogin />} />
                  <Route path="/admin" element={<Admin />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </BrowserRouter>
            </CartProvider>
          </OffersProvider>
        </MenuProvider>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
