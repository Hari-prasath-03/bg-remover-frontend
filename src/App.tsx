import Footer from "./sections/Footer";
import Navbar from "./components/Navbar";
import ThemeToggleButton from "./components/ThemeToggleButton";
import AppRoutes from "./routes/AppRoutes";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import { AuthContextProvider } from "./context/AuthContext";
import UserSyncHandler from "./sync/UserSyncHandler";

const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!publishableKey) {
  throw new Error("VITE_CLERK_PUBLISHABLE_KEY is not defined in .env file");
}

const App = () => (
  <div>
    <BrowserRouter>
      <ClerkProvider publishableKey={publishableKey}>
        <AuthContextProvider>
          <UserSyncHandler />
          <Navbar />
          <Toaster />
          <ThemeToggleButton />
          <AppRoutes />
          <Footer />
        </AuthContextProvider>
      </ClerkProvider>
    </BrowserRouter>
  </div>
);

export default App;
