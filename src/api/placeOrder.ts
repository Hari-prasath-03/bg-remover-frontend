import toast from "react-hot-toast";
import axiosInstance from "./axiosInstance";

export const placeOrder = async ({
  planId,
  getToken,
  onSuccess,
}: {
  planId: string;
  getToken: () => Promise<string | null>;
  onSuccess: () => void;
}) => {
  try {
    const token = await getToken();
    const response = await axiosInstance.post(
      `/orders?planId=${planId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.status === 200) {
      initializePayment({
        order: response.data.data,
        getToken,
        onSuccess,
      });
    }
  } catch (error) {
    const errorMessage =
      typeof error === "object" && error !== null && "message" in error
        ? (error as { message?: string }).message || "Unknown error"
        : "Unknown error";
    toast.error(`Error placing order: ${errorMessage}`);
  }
};

type OrderType = {
  id: string;
  amount: number;
  currency: string;
};

const initializePayment = ({
  order,
  getToken,
  onSuccess,
}: {
  order: OrderType;
  getToken: () => Promise<string | null>;
  onSuccess: () => void;
}) => {
  const options = {
    key: import.meta.env.VITE_RAZORPAY_KEY,
    amount: order.amount,
    currency: order.currency,
    name: "Credit Payment",
    description: "Purchase credits",
    order_id: order.id,
    handler: async (paymentDetails) => {
      try {
        const token = await getToken();
        const res = await axiosInstance.post("/orders/verify", paymentDetails, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (res.status === 200)
          toast.success("Credits purchased successfully!");
        onSuccess?.();
      } catch (error) {
        toast.error(
          error instanceof Error ? error.message : "Payment verification failed"
        );
      }
    },
  };
  const razorpay = new (window as any).Razorpay(options);
  razorpay.open();
};
