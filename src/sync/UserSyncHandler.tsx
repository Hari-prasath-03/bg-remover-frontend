import { useAuth, useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const UserSyncHandler = () => {
  const { loadUserCredits } = useAuthContext()
  const { isLoaded, isSignedIn, getToken } = useAuth();
  const [synced, setSynced] = useState(false);
  const { user } = useUser();

  useEffect(() => {
    const syncUserData = async () => {
      if (!isLoaded || !isSignedIn || synced) return;

      try {
        const token = await getToken();
        const payload = {
          clerkId: user?.id,
          firstName: user?.firstName,
          lastName: user?.lastName,
          email: user?.primaryEmailAddress?.emailAddress,
          photoUrl: user?.imageUrl,
        };

        axiosInstance.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${token}`;
        
        await axiosInstance.post("/sync-user", payload);
        setSynced(true);
        await loadUserCredits();
        toast.success("user data synced");
      } catch (error) {
        console.error("Error syncing user data:", error);
        toast.error("user data not synced");
      }
    };

    syncUserData();
  }, [getToken, isLoaded, isSignedIn, synced, user]);

  return null;
};

export default UserSyncHandler;
