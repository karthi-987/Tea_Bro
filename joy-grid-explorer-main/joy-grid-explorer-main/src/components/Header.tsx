import { LogIn, LogOut } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import teaBroLogo from "@/assets/tea-bro-logo.png";

const Header = () => {
  const { isAdmin, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-card shadow-sm px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
        <img src={teaBroLogo} alt="Tea Bro" className="h-9 w-auto rounded" />
        <h1 className="font-display text-xl font-bold text-foreground">Tea Bro</h1>
      </div>
      {isAdmin ? (
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate("/admin")}
            className="text-xs font-semibold text-primary hover:underline"
          >
            Dashboard
          </button>
          <button
            onClick={logout}
            className="flex items-center gap-1 px-3 py-1.5 rounded-md bg-secondary text-foreground text-xs font-semibold hover:bg-muted transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" /> Logout
          </button>
        </div>
      ) : (
        <button
          onClick={() => navigate("/admin-login")}
          className="flex items-center gap-1 px-3 py-1.5 rounded-md bg-primary text-primary-foreground text-xs font-semibold hover:opacity-90 transition-opacity"
        >
          <LogIn className="w-3.5 h-3.5" /> Admin
        </button>
      )}
    </header>
  );
};

export default Header;
