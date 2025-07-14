/* eslint-disable react-refresh/only-export-components */
import React, {
  createContext,
  useContext,
  useState,
  type PropsWithChildren,
} from "react";
import axiosInstance from "../api/axiosInstance";
import { useAuth, useClerk, useUser } from "@clerk/clerk-react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export type AuthContextType = {
  credits: number;
  setCredits: React.Dispatch<React.SetStateAction<number>>;
  loadUserCredits: () => Promise<void>;
  removeBg: (selectedImage: Blob | MediaSource | null) => Promise<void>;
  image: Blob | MediaSource | null;
  setImage: React.Dispatch<React.SetStateAction<Blob | MediaSource | null>>;
  resultImage: string | Blob | MediaSource | undefined;
  setResultImage: React.Dispatch<
    React.SetStateAction<string | Blob | MediaSource | undefined>
  >;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

const AuthContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const { getToken } = useAuth();
  const { isSignedIn } = useUser();
  const { openSignIn } = useClerk();
  const navigate = useNavigate();
  const [credits, setCredits] = useState(0);

  const [image, setImage] = useState<AuthContextType["image"]>(null);
  const [resultImage, setResultImage] =
    useState<AuthContextType["resultImage"]>(undefined);

  const removeBg = async (selectedImage: Blob | MediaSource | null) => {
    try {
      if (!isSignedIn) return openSignIn();
      setImage(selectedImage);
      setResultImage(undefined);
      navigate("/result");

      const token = await getToken();
      const formData = new FormData();
      console.log("Selected image:", selectedImage);
      if (selectedImage && selectedImage instanceof Blob) {
        formData.append("file", selectedImage);
      }
      const { data: base64Image } = await axiosInstance.post(
        "/images/remove-bg",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setResultImage(base64Image);
      setCredits((prev) => prev - 1);
      toast.success("Background removed successfully!");
    } catch (error) {
      console.error("Error removing background:", error);
      toast.error("Failed to remove background. Please try again.");
      setResultImage(undefined);
    }
  };

  const loadUserCredits = async () => {
    try {
      const token = await getToken();
      const response = await axiosInstance.get("/users/credits", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCredits(response.data.data.credits);
    } catch (error) {
      console.log("Error loading user credits:", error);
      toast.error("Error loading user credits");
    }
  };

  

  const value = {
    credits,
    setCredits,
    loadUserCredits,
    image,
    setImage,
    resultImage,
    setResultImage,
    removeBg,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(
      "useAuthContext must be used within an AuthContextProvider"
    );
  }
  return context;
};

export { AuthContextProvider, useAuthContext };
