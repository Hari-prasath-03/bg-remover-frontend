import { footerIcons } from "../assets";
import Logo from "../assets/Logo";

const Footer = () => (
  <footer className="flex text-sm sm:text-base items-center justify-center gap-2 sm:gap-4 px-4 lg:px-44 py-5 mt-10 border-t border-neutral-100 dark:border-neutral-800">
    <Logo />
    <p className="mr-3 sm:mr-5">
      &copy; {new Date().getFullYear()} Made with 💛 by Hp.
    </p>
    <div className="flex gap-2 sm:gap-6">
      {footerIcons.map((icon) => (
        <a
          key={icon.url}
          href={icon.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={icon.icon} alt="logo" className="size-5" />
        </a>
      ))}
    </div>
  </footer>
);

export default Footer;
