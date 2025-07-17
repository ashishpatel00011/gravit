import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

interface ButtonProps {
  children?: React.ReactNode;
  externalLink?: string;
  className?: string;
}

export default function Button({ children, externalLink, className }: ButtonProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleClick = () => {
    if (externalLink) {
      window.open(externalLink, "_blank");
    } else {
      navigate("/", { state: { scrollToMobileLink: true } });
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`p-4 bg-gradient-custom md:text-[18px] sm:text-[16px] text-white rounded-md hover:opacity-90 transition-all duration-300 cursor-pointer ${className}`}
    >
      {children || t("navigation.bookAppointment")}
    </button>
  );
}
