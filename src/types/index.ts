export type Pricing = {
  id: string;
  name: string;
  price: number;
  discount: number;
  credits: number;
  description: string;
  popular: boolean;
  onOrder?: (planId: string) => void;
};
