import { useState } from "react";
import { ArrowLeft, LogIn } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (login(username.trim(), password)) {
      navigate("/admin");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="min-h-screen bg-background max-w-lg mx-auto">
      <header className="sticky top-0 z-50 bg-card shadow-sm px-4 py-3 flex items-center gap-3">
        <button onClick={() => navigate("/")} className="p-1">
          <ArrowLeft className="w-5 h-5 text-foreground" />
        </button>
        <h1 className="font-display text-lg font-bold text-foreground">Admin Login</h1>
      </header>

      <div className="px-6 py-12">
        <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
          <div className="text-center mb-6">
            <span className="text-4xl">🔐</span>
            <p className="text-sm text-muted-foreground mt-2">Enter owner credentials</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1 block">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Enter username"
                required
              />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1 block">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Enter password"
                required
              />
            </div>
            {error && <p className="text-xs text-destructive font-medium">{error}</p>}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 rounded-lg bg-primary text-primary-foreground py-2.5 text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              <LogIn className="w-4 h-4" /> Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
