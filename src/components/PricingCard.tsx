import type { Pricing } from "../types";
import Button from "./Button";

const PricingCard: React.FC<Pricing> = ({
  id,
  name,
  price,
  discount,
  credits,
  description,
  popular,
  onOrder,
}) => {
  const calcDiscount = (price: number, savePercentage: number) => {
    const finalPrice = price * (1 - savePercentage / 100);
    return Number(finalPrice.toFixed(2));
  };

  return (
    <div className="relative p-5 bg-[linear-gradient(145deg,var(--color-bg)30%,var(--color-bg-50)120%)] dark:bg-[linear-gradient(145deg,var(--color-dark-bg-50)30%,var(--color-dark-bg)90%)] transform hover:-translate-y-1 transition-all duration-300 rounded-2xl shadow dark:shadow-dark">
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary text-neutral-800 px-3 py-1 text-sm font-semibold">
          Most Popular
        </div>
      )}
      <div className="text-center p-3 space-y-3">
        <h3 className="text-2xl opacity-90 font-semibold mb-4">{name}</h3>

        <p className="text-sm text-text-muted dark:text-dark-text-muted space-x-1.5">
          <del>&#8377;{price}</del>{" "}
          <span className="bg-neutral-300 dark:bg-neutral-700 px-2 py-1 rounded-full">
            save {discount.toFixed(0)}%
          </span>
        </p>

        <p className="text-4xl font-bold">
          &#8377;{calcDiscount(price, discount)}{" "}
          <span className="text-sm text-text-muted dark:text-dark-text-muted">
            / month
          </span>
        </p>
        <p className="text-text-muted dark:text-dark-text-muted">
          {description}
        </p>
        <div className="mb-4">
          <span className="text-lg font-semibold">{credits} Credits</span>
        </div>
        <Button onClick={() => onOrder?.(id)} className="w-full bg-primary hover:bg-primary-accent text-neutral-50 rounded-full">
          Choose Plan
        </Button>
      </div>
    </div>
  );
};

export default PricingCard;
