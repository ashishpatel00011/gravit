import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaTiktok,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaSnapchatGhost,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { HashLink } from "react-router-hash-link";
import { useState } from "react"; // Import useState

const footer = [
  {
    icon: <FaTiktok />,
    link: "https://www.facebook.com/AljawdahClinics/", // Note: This link is Facebook, not TikTok, but keeping as is per your request
  },
  {
    icon: <FaFacebookF />,
    link: "https://www.facebook.com/AljawdahClinics/",
  },
  {
    icon: <FaInstagram />,
    link: "https://www.instagram.com/aljawdahclinics/#",
  },
  {
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/company/quality-clinics/",
  },
  {
    icon: <FaTwitter />,
    link: "https://x.com/aljawdahclinics",
  },
  {
    icon: <FaSnapchatGhost />,
    link: "https://www.snapchat.com/add/aljawdahclinics",
  },
];

export default function Footer() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // const [isSubmitting, setIsSubmitting] = useState(false);

  // YOUR GOOGLE APPS SCRIPT WEB APP URL
    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbzchjzfMXx2eOavG95tKcZVBgsCBmgXehT6kRJFEfI96-MU2WLoQIJcNjMtNW6tGfA-vg/exec";

    const formData = new FormData();
    formData.append("email", email);

    try {
      await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });
      setMessage("✔️ Subscribed!");
      setEmail("");
    } catch (error) {
      console.error("Error:", error);
      setMessage("❌ Subscription failed.");
    }
  };

  return (
    <footer className="bg-black px-6 py-10 text-sm border-t-[1px] border-t-[#1ab8b3b9]">
      <div className="px-5 mx-auto space-y-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-gray-400">
          {/* Column 1 - Contact Info */}
          <div className="md:ml-28">
            <Link to="/">
              <img
                src="/Images/logo-3.png"
                alt={t("footer.logo.alt")}
                className="h-8 sm:h-10 md:h-12 w-auto object-contain"
              />
            </Link>
            <ul className="space-y-4 mt-4">
              <li className="hover:text-primary text-white">
                {t("footer.contact.address")}
              </li>
              <li className="hover:text-primary text-white">
                {t("footer.contact.phone")}
              </li>
              <li className="hover:text-primary text-white">
                {t("footer.contact.email")}
              </li>
            </ul>
          </div>

          {/* Column 2 - Navigation (Quick Links) */}
          <div className="md:ml-28">
            <h4
              className="text-primary mb-4"
              style={{ fontSize: "16px", fontWeight: 400 }}
            >
              {t("footer.navigation.title")}
            </h4>
            <ul className="space-y-2 text-white">
              <li>
                <Link to="/" className="hover:text-primary">
                  {t("footer.navigation.home")}
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary">
                  {t("footer.navigation.about")}
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-primary">
                  {t("footer.navigation.contact")}
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-primary">
                  {t("footer.navigation.referrals")}
                </Link>
              </li>
              <li>
                <Link to="/qualitygallery" className="hover:text-primary">
                  {t("footer.navigation.treatments")}
                </Link>
              </li>
              {/* <li>
                <Link to="/technology" className="hover:text-primary">
                  {t("footer.navigation.technology")}
                </Link>
              </li> */}
               {/* <li>
                <Link to="/discover" className="hover:text-primary">
                  {t("footer.navigation.discover")}
                </Link>
              </li> */}
              {/* ADDED THIS NEW LINK */}
              <li>
                <HashLink
                  smooth
                  to={"#mobile"}
                  className="hover:text-primary"
                >
                  {t("footer.navigation.ourApp")}
                </HashLink>
              </li>
            </ul>
          </div>

          {/* Column 3 - Useful Links */}
          <div className="md:ml-15">
            <h4
              className="text-primary mb-4"
              style={{ fontSize: "16px", fontWeight: 400 }}
            >
              {t("footer.useful.title")}
            </h4>
            <ul className="space-y-2 text-white">
              <li>
                <Link to="/blogs" className="hover:text-primary">
                  {t("footer.useful.blog")}
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-primary">
                  {t("footer.useful.complaints")}
                </Link>
              </li>

            </ul>
          </div>


          {/* Column 5 - Subscribe */}
          <div className="">
            <h4
              className="text-primary mb-4"
              style={{ fontSize: "16px", fontWeight: 400 }}
            >
              {t("footer.subscribe.title")}
            </h4>
            <p className="text-gray-300 mb-4">
              {t("footer.subscribe.description")}
            </p>
            {/* Modified Form for Email Subscription */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  placeholder={t("footer.subscribe.placeholder")}
                  className="w-full p-2 rounded-md bg-black/10 outline focus:ring-2 focus:ring-violet-500"
                  value={email}
                   onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="cursor-pointer border-[1px] border-[#1AB8B3] text-[#1AB8B3] px-4 py-2 rounded-md transition outline-none focus:outline-[#1AB8B3] hover:bg-[#1AB8B3] hover:text-white"
                 
                >
              {t("buttons.subscribe")}
                </button>
              </div>
              {message && (
                <p
                  className={`text-sm mt-2 ${ // Added mt-2 for spacing
                    message.includes("success") ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {message}
                </p>
              )}
            </form>
            <p className="text-xs text-gray-500 mt-4"> {/* Added mt-4 for spacing */}
              {t("footer.subscribe.terms")}
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white border-t border-gray-700 pt-6 md:mr-[50px] mr-[0px]">
          <p>{t("footer.copyright.development")}</p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-400">
            <small>{t("footer.copyright.rights")}</small>
            <small className="underline cursor-pointer hover:text-primary">
              {t("footer.copyright.privacy")}
            </small>
            <small className="underline cursor-pointer hover:text-primary">
              {t("footer.copyright.terms")}
            </small>
            <small className="underline cursor-pointer hover:text-primary">
              {t("footer.copyright.cookies")}
            </small>
          </div>
          <div className="flex gap-3">
            {footer.map((ele, i) => (
              <Link
                to={ele.link}
                target="_blank"
                key={i}
                className="flex items-center justify-center rounded-full border border-gray-400 bg-gray-100 text-black w-6 h-6 sm:w-8 sm:h-8 transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:text-secondary hover:border-primary"
              >
                <span className="text-lg sm:text-xl">{ele.icon}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}