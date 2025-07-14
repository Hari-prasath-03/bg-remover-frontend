import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
}

const defaultStyles = "px-4 py-2 font-medium cursor-pointer transition-all duration-300 ease-in-out";

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button className={clsx(defaultStyles, className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
