import { useAuth, useClerk } from "@clerk/clerk-react";
import { plans } from "../assets";
import PricingCard from "../components/PricingCard";
import { placeOrder } from "../api/placeOrder";
import { useAuthContext } from "../context/AuthContext";

const Pricing = () => {
  const { loadUserCredits } = useAuthContext();
  const { isSignedIn, getToken } = useAuth();
  const { openSignIn } = useClerk();

  const handleOrder = (planId: string) => {
    if (!isSignedIn) {
      return openSignIn();
    }
    placeOrder({
      planId,
      getToken,
      onSuccess: () => loadUserCredits(),
    });
  };

  return (
    <section className="relative px-4 md:px-10 md:mx-20 min-h-[75vh]">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="page-heading">Choose your perfect package.</h2>
          <p className="mx-auto text-[12px] sm:text-base max-w-2xl text-text-muted dark:text-dark-text-muted">
            Whether you're a casual user or a professional, we have a plan that
            fits your needs. Enjoy your background removal with our affordable
            pricing options.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {plans.map((plan) => (
            <PricingCard key={plan.id} {...plan} onOrder={handleOrder} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
