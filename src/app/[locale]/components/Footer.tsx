import Icon from "./Icon";
import VercelLogo from "~icons/logos/vercel.jsx";
const Footer = () => {
  return (
    <div className="w-20 h-20 bg-red-700">
      <Icon icon="ic:round-facebook" width="25" height="25" />
      testing
      <VercelLogo width={72} height={16} fill="currentColor" />
    </div>
  );
};

export default Footer;
