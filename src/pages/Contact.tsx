import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
// import { FaMapMarkerAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useState, FormEvent } from "react";

// import { Link } from "react-router-dom";
import Book from "../components/Book";
import MobileLink from "../components/MobileLink";

export default function Contact() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const [formData, setFormData] = useState({
    Token: "testtoken123",
    first_name: "",
    last_name: "",
    email: "",
    contact_number: "",
    location: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // clear error on typing
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.first_name.trim())
      newErrors.first_name = t("contact.formFields.firstNameRequired");
    if (!formData.last_name.trim())
      newErrors.last_name = t("contact.formFields.lastNameRequired");
    if (!formData.email.trim()) {
      newErrors.email = t("contact.formFields.emailRequired");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = t("contact.formFields.emailInvalid");
    }

if (
  !formData.contact_number.trim() ||
  !/^\d{8,14}$/.test(formData.contact_number)
) {
  newErrors.contact_number = t("contact.formFields.contactInvalid");
}

      newErrors.contact_number = t("contact.formFields.contactInvalid");
    if (!formData.location.trim())
      newErrors.location = t("contact.formFields.locationRequired");
    if (!formData.service.trim())
      newErrors.service = t("contact.formFields.serviceRequired");

    return newErrors;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const fullFormData = {
      ...formData,
      contact_number: `+966${formData.contact_number}`,
    };

    const form = new FormData();
    (Object.keys(fullFormData) as Array<keyof typeof fullFormData>).forEach(
      (key) => {
        form.append(key, fullFormData[key]);
      }
    );

    try {
      const response = await fetch(
        "https://jawdah.yatrasaathi.in/api/contact_submit.php",
        {
          method: "POST",
          body: form,
        }
      );

      const result = await response.json();
      if (result.Status) {
        setResponseMsg("✅ " + result.data);
        // clear form after successful submission
        setFormData({
          Token: "testtoken123",
          first_name: "",
          last_name: "",
          email: "",
          contact_number: "",
          location: "",
          service: "",
          message: "",
        });
        setErrors({});
      } else {
        setResponseMsg("❌ " + result.data);
      }
    } catch (error) {
      console.error("Error submitting form", error);
      setResponseMsg(t("networkError"));
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-black">
      {/* Hero Section */}
      <div className="relative md:h-[70vh] sm:h-screen overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <img
          src="/Images/IMG_0271.JPG"
          alt=""
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "#00000078" }}
        ></div>

        {/* Title */}
        <div
          onClick={() => {
            document
              .getElementById("contactForm")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          // Removed max-w-[30%] to allow text to wrap naturally
          className={`hover:cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out absolute top-[5%] ${
            isArabic ? "right-[8%]" : "left-[8%]"
          } z-10 p-4`} // Added p-4 for some padding on smaller screens
        >
          <span
            className="md:text-[4rem] mb-2 text-[2rem] text-wrap"
            style={{ color: "rgb(26 184 179)", lineHeight: "4rem" }}
          >
            <strong>{t("contact.title")}</strong>
          </span>
        </div>

        {/* Locate Us */}
        <div
          onClick={() => {
            document
              .getElementById("contactForm")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          // Removed max-w-[30%] to allow text to wrap naturally
          className={`hover:cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out absolute md:top-[17%] top-[30%] ${
            isArabic ? "right-[8%]" : "left-[8%]"
          } z-10 p-4`} // Added p-4 for some padding on smaller screens
        >
          <span className="md:text-[3rem] text-[2rem] text-white text-wrap">
            {t("contact.locateUs")}
          </span>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-black container mx-auto p-4" id="contactForm">
        <div
          className="gap-4 flex md:flex-row flex-col items-center justify-center pt-15 pb-10"
          style={{ direction: isArabic ? "rtl" : "ltr" }}
        >
          {/* Form */}
          <div className="text-white rounded-lg shadow h-[550px] flex items-center w-full md:w-[70%] ">
            <div className="w-full flex justify-center">
              <div className="w-full max-w-[90%]">
                <h2 className="text-left text-7xl font-semibold mb-10">
                  {t("contact.head")}
                </h2>
                <form onSubmit={handleSubmit}>
                  {/* First & Last Name */}
                  <div className="flex justify-between items-center gap-4 mb-5">
                    <div className="w-[48%]">
                      <input
                        onChange={handleChange}
                        type="text"
                        name="first_name"
                        value={formData.first_name}
                        placeholder={t("contact.formFields.firstName")}
                        className={`w-full h-[48px] px-4 rounded-[8px] text-white bg-black border ${
                          errors.first_name ? "border-red-500" : "border-white"
                        } ${isArabic ? "text-right" : "text-left"}`}
                      />
                      {errors.first_name && (
                        <small className="text-red-500">
                          {errors.first_name}
                        </small>
                      )}
                    </div>

                    <div className="w-[48%]">
                      <input
                        onChange={handleChange}
                        type="text"
                        name="last_name"
                        value={formData.last_name}
                        placeholder={t("contact.formFields.lastName")}
                        className={`w-full h-[48px] px-4 rounded-[8px] text-white bg-black border ${
                          errors.last_name ? "border-red-500" : "border-white"
                        } ${isArabic ? "text-right" : "text-left"}`}
                      />
                      {errors.last_name && (
                        <small className="text-red-500">
                          {errors.last_name}
                        </small>
                      )}
                    </div>
                  </div>

                  {/* Email & Contact */}
                  <div className="flex justify-between items-center gap-4 mb-5">
                    <div className="w-[48%]">
                      <input
                        onChange={handleChange}
                        type="email"
                        name="email"
                        value={formData.email}
                        placeholder={t("contact.formFields.emailAddress")}
                        className={`w-full h-[48px] px-4 rounded-[8px] text-white bg-black border ${
                          errors.email ? "border-red-500" : "border-white"
                        } ${isArabic ? "text-right" : "text-left"}`}
                      />
                      {errors.email && (
                        <small className="text-red-500">{errors.email}</small>
                      )}
                    </div>

                    <div className="relative w-[48%]">
                      <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white">
                        +966
                      </span>
                      <input
                        onChange={handleChange}
                        onInput={(e) => {
                          e.currentTarget.value = e.currentTarget.value.replace(
                            /[^0-9]/g,
                            ""
                          );
                        }}
                        type="text"
                        maxLength={10}
                        name="contact_number"
                        value={formData.contact_number}
                        placeholder={t("contact.formFields.contact")}
                        className={`w-full h-[48px] pl-14 rounded-[8px] text-white bg-black border ${
                          errors.contact_number
                            ? "border-red-500"
                            : "border-white"
                        } ${isArabic ? "text-right" : "text-left"}`}
                      />
                      {errors.contact_number && (
                        <small className="text-red-500">
                          {errors.contact_number}
                        </small>
                      )}
                    </div>
                  </div>

                  {/* Location */}
                  <div className="mb-5">
                    <select
                      onChange={handleChange}
                      name="location"
                      value={formData.location}
                      className={`w-full h-[48px] px-4 rounded-[8px] text-white bg-black border ${
                        errors.location ? "border-red-500" : "border-white"
                      } ${isArabic ? "text-right" : "text-left"}`}
                    >
                      <option value="">
                        {t("contact.formFields.location")}
                      </option>
                      <option value="NozhaBranchMakkah">
                        {t("branches.nozha")}
                      </option>
                      <option value="JuffaliBranchMakkah">
                        {t("branches.juffali")}
                      </option>
                      <option value="AlSaudBranchMakkah">
                        {t("branches.alsaud")}
                      </option>
                      <option value="ShawkiyaBranchMakkah">
                        {t("branches.shawkiya")}
                      </option>
                      <option value="TahliaBranchJeddah">
                        {t("branches.tahlia")}
                      </option>
                      <option value="HiraBranchJeddah">
                        {t("branches.hira")}
                      </option>
                      <option value="HamdaniyaBranchJeddah">
                        {t("branches.hamdaniya")}
                      </option>
                      <option value="OlayaBranchTabuk">
                        {t("branches.olaya")}
                      </option>
                    </select>
                    {errors.location && (
                      <small className="text-red-500">{errors.location}</small>
                    )}
                  </div>

                  {/* Service */}
                  <div className="mb-5">
                    <select
                      onChange={handleChange}
                      name="service"
                      value={formData.service}
                      className={`w-full h-[48px] px-4 rounded-[8px] text-white bg-black border ${
                        errors.service ? "border-red-500" : "border-white"
                      } ${isArabic ? "text-right" : "text-left"}`}
                    >
                      <option value="">
                        {t("contact.formFields.service")}
                      </option>
                      <option value="Inquiry">{t("branches.inquiry")}</option>
                      <option value="Complaint">
                        {t("branches.complaint")}
                      </option>
                    </select>
                    {errors.service && (
                      <small className="text-red-500">{errors.service}</small>
                    )}
                  </div>

                  {/* Message */}
                  <div className="mb-5">
                    <textarea
                      onChange={handleChange}
                      name="message"
                      value={formData.message}
                      placeholder={t("contact.formFields.message")}
                      className={`w-full h-[100px] px-4 py-2 rounded-[8px] text-white bg-black border border-white ${
                        isArabic ? "text-right" : "text-left"
                      }`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-primary text-[20px] font-light text-white w-[200px] h-[45px] rounded-md cursor-pointer mt-1"
                  >
                    {t("contact.formFields.submit")}
                  </button>
                </form>

                {responseMsg && <p className="mt-4">{responseMsg}</p>}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="text-white rounded-lg shadow w-full md:w-[70%] h-[550px] flex justify-center items-center overflow-hidden">
            <img
              src={"/Images/Customer Service (1).JPG"}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="container mx-auto py-16">
        <div className="lg:grid-cols-1 gap-6">
          <div className="lg:col-span-2 pb-15 pt-10">
            <div className="flex md:flex-row flex-col justify-center space-y-6 md:space-y-0 md:gap-6">
              {/* <div className="bg-gradient-custom h-[110px] md:w-[32%] p-6 rounded-2xl text-white transform hover:scale-105 transition-all duration-300 shadow-lg">
                <Link to="/Discover">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center gap-3">
                      <FaMapMarkerAlt className="w-6 h-6" />
                      <h4 className="font-semibold">{t("contact.locateUs")}</h4>
                    </div>
                    <p className="text-gray-100">{t("contact.clinic")}</p>
                  </div>
                </Link>
              </div> */}

              <div className="bg-gradient-custom h-[110px] md:w-[32%] p-6 rounded-2xl text-white transform hover:scale-105 transition-all duration-300 shadow-lg">
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center gap-3">
                    <FaPhoneAlt className="w-6 h-6" />
                    <h4 className="font-semibold">{t("contact.phone")}</h4>
                  </div>
                  <a
                    href="tel:+966920004864"
                    className="text-gray-100 hover:text-white transition-colors"
                  >
                    +966920004864
                  </a>
                </div>
              </div>

              <div className="bg-gradient-custom h-[110px] md:w-[32%] p-6 rounded-2xl text-white transform hover:scale-105 transition-all duration-300 shadow-lg">
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center gap-3">
                    <MdOutlineEmail className="w-6 h-6" />
                    <h4 className="font-semibold">{t("contact.email")}</h4>
                  </div>
                  <a
                    href="mailto:care@aljawdahclinic.com"
                    className="text-gray-100 hover:text-white transition-colors"
                  >
                    care@aljawdahclinic.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Book />
      <MobileLink />
    </div>
  );
}
