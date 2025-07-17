import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Book from "../components/Book";
import MobileLink from "../components/MobileLink";

export default function Careers() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const ref = useRef(null);

  // States for form fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [postApplyingFor, setPostApplyingFor] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [phone, setPhone] = useState("+966 "); // Initialize with prefix
  const [selectedFile, setSelectedFile] = useState<File | null>(null); // To store the actual File object
  const [fileName, setFileName] = useState("No file selected"); // To display the file name

  // State for validation errors
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [formSubmitted, setFormSubmitted] = useState(false); // To trigger error display on first submit attempt


  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setFileName(file.name);
      setErrors((prev) => ({ ...prev, resume: "" })); // Clear resume error
    } else {
      setSelectedFile(null);
      setFileName("No file selected");
      if (formSubmitted) { // Only set error if form has been attempted to submit
        setErrors((prev) => ({ ...prev, resume: t("careers.formFields.resumeRequired") }));
      }
    }
  };

  const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    // Ensure it always starts with +966
    if (!value.startsWith("+966 ")) {
      value = "+966 ";
    }

    // Allow only numbers after +966
    value = value.replace(/[^0-9+ ]/g, "");

    // Prevent typing more than 15 characters
    if (value.length > 15) {
      value = value.slice(0, 15);
    }

    setPhone(value);
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!firstName.trim()) {
      newErrors.firstName = t("careers.formFields.firstNameRequired");
    }
    if (!lastName.trim()) {
      newErrors.lastName = t("careers.formFields.lastNameRequired");
    }
    if (!postApplyingFor.trim()) {
      newErrors.postApplyingFor = t("careers.formFields.postApplyingForRequired");
    }
    if (!emailAddress.trim()) {
      newErrors.emailAddress = t("careers.formFields.emailRequired");
    } else if (!/\S+@\S+\.\S+/.test(emailAddress)) {
      newErrors.emailAddress = t("careers.formFields.emailInvalid");
    }
    // Basic phone validation (can be more robust based on requirements)


    if (!selectedFile) {
      newErrors.resume = t("careers.formFields.resumeRequired");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };



  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Prevent default form submission
    setFormSubmitted(true); // Mark form as attempted to submit

    if (!validateForm()) {
      console.log("Form has validation errors. Please correct them.");
      return; // Stop submission if validation fails
    }

    // If validation passes, prepare and send data
    const formData = new FormData();
    formData.append("Token", "ifksjhfkdsgjhfsjd");
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("postApplyingFor", postApplyingFor);
    formData.append("emailAddress", emailAddress);
    formData.append("phone", phone);
    if (selectedFile) {
      formData.append("resume", selectedFile);
    }

    try {
      // *** IMPORTANT: Update this URL to match your backend server ***
      // During local development: "http://localhost:5000/api/careers-submit"
      // After merging and for production: "/api/careers-submit" (if backend serves frontend)
      const response = await fetch(
        "https://jawdah.yatrasaathi.in/api/submitApplication.php",
        {
          // Assuming local backend is still separate
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log("Application submitted successfully:", result);
        alert(t("careers.submissionSuccess"));
        // Reset form after successful submission
        setFirstName("");
        setLastName("");
        setPostApplyingFor("");
        setEmailAddress("");
        setPhone("+966 ");
        setSelectedFile(null);
        setFileName("No file selected");
        setErrors({}); // Clear all errors
        setFormSubmitted(false); // Reset form submission status
      } else {
        const errorData = await response.json();
        console.error("Form submission failed:", errorData);
        alert(`${t("careers.submissionFailed")}: ${errorData.message || t("careers.unknownError")}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(t("careers.networkError"));
    }
  };

  // Updated getInputClasses to simplify width handling
  const getInputClasses = (fieldName: string) => `
    w-full
    h-[48px] px-4 py-3 rounded-[8px] font-light text-[16px] text-white outline focus:ring-2 focus:ring-violet-500
    ${isArabic ? "text-right" : "text-left"}
    ${errors[fieldName] ? "border border-red-500" : "border border-gray-600 bg-black"}
  `;

  return (
    <div className="relative -pb-8 bg-black">
      {/* Top Heading Section - Fixes for cropping */}
      <div
        ref={ref}
        className="bg-black pb-10 pt-20 md:min-h-[auto] flex flex-col items-center justify-center text-white" // Removed min-h-[50vh] and overflow-hidden
      >
        <h2 className=" whitespace-nowrap bg-gradient-to-b from-[#2f886c] via-[#c0dbdf] to-[#ffffff] bg-[length:300%] bg-clip-text text-transparent md:text-[64px] leading-tight">
          {t("careers.description")}
        </h2>
        <h2 className=" whitespace-nowrap bg-gradient-to-b from-[#2f886c] via-[#c0dbdf] to-[#ffffff] bg-[length:300%] bg-clip-text text-transparent md:text-[60px] mt-4 leading-tight">
          {t("careers.title")}
        </h2>
      </div>

      <div className=" bg-black container mx-auto p-6">
        <div
          className=" gap-4 min-h-[400px] flex md:flex-row flex-col items-center justify-center pb-20"
          style={{ direction: isArabic ? "rtl" : "ltr" }}
        >
          <div className="text-white rounded-lg shadow md:min-w-[50%] w-95">
            {/* Form Container - Removed fixed height/overflow for flexibility */}
            <div
              ref={ref}
              className="bg-black flex flex-col items-center justify-center text-white relative px-5 py-10" // Removed min-h and overflow, added general padding
              style={{
                marginTop: "", // Keep this if you have specific external margin, otherwise can remove
              }}
            >
              <form
                onSubmit={(e) => handleSubmit(e as any)}
                className="md:max-w-[1208px] text-left md:w-[100%] w-[95%] p-1 md:px-10"
              >
                <h2 className="text-left mb-15 ">{t("careers.subTitle")}</h2>
                <div className="flex justify-center items-center gap-4 mb-4 md:mt-5 ">
                  <div className="w-1/2"> {/* Set to w-1/2 for equal split */}
                    <input
                      type="text"
                      placeholder={t("careers.formFields.firstName")}
                      className={getInputClasses("firstName")}
                      value={firstName}
                      onChange={(e) => {
                        setFirstName(e.target.value);
                        setErrors((prev) => ({ ...prev, firstName: "" }));
                      }}
                    />
                    {formSubmitted && errors.firstName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.firstName}
                      </p>
                    )}
                  </div>
                  <div className="w-1/2"> {/* Set to w-1/2 for equal split */}
                    <input
                      type="text"
                      placeholder={t("careers.formFields.lastName")}
                      className={getInputClasses("lastName")}
                      value={lastName}
                      onChange={(e) => {
                        setLastName(e.target.value);
                        setErrors((prev) => ({ ...prev, lastName: "" }));
                      }}
                    />
                    {formSubmitted && errors.lastName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder={t("careers.formFields.postApplyingFor")}
                    className={getInputClasses("postApplyingFor")}
                    value={postApplyingFor}
                    onChange={(e) => {
                      setPostApplyingFor(e.target.value);
                      setErrors((prev) => ({ ...prev, postApplyingFor: "" }));
                    }}
                  />
                  {formSubmitted && errors.postApplyingFor && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.postApplyingFor}
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    placeholder={t("careers.formFields.emailAddress")}
                    className={getInputClasses("emailAddress")}
                    value={emailAddress}
                    onChange={(e) => {
                      setEmailAddress(e.target.value);
                      setErrors((prev) => ({ ...prev, emailAddress: "" }));
                    }}
                  />
                  {formSubmitted && errors.emailAddress && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.emailAddress}
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <input
                    value={phone}
                    onChange={handlePhone}
                    type="text"
                    maxLength={15}
                    placeholder={t("careers.formFields.contact")}
                    className={getInputClasses("phone")}
                    dir={isArabic ? "rtl" : "ltr"}
                  />
                  {formSubmitted && errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                <div className="flex justify-left items-center gap-2 mb-3 mt-4">
                  <label
                    htmlFor="fileUpload"
                    className="flex items-center text-white"
                  >
                    {t("careers.formFields.attachResume")}
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                </div>
                <div className="mb-4">
                  <input
                    type="file"
                    id="fileUpload"
                    onChange={handleFileChange}
                    className="hidden"
                    accept=".pdf,.doc,.docx" // Restrict file types
                  />
                  {/* Corrected JSX structure for the file upload label */}
                  <label
                    htmlFor="fileUpload"
                    className={`flex md:w-full w-[98%] h-[48px] px-4 py-3 rounded-[8px] font-light text-[16px] text-white border items-center justify-between cursor-pointer ${isArabic ? "text-right" : "text-left"
                      } ${errors.resume ? "border-red-500" : "border-white"}`}
                  >
                    {fileName} {/* Displays the selected file name */}
                    <span className="text-white-400">Browse</span>{" "}
                    {/* The "Browse" button text */}
                  </label>
                  {formSubmitted && errors.resume && (
                    <p className="text-red-500 text-sm mt-1">{errors.resume}</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="bg-primary text-[16px] font-light text-white md:w-[220px] w-[98%] h-[48px] px-[4px] pt-5px rounded-md cursor-pointer mt-4"
                >
                  {t("careers.formFields.submit")}
                </button>
              </form>
            </div>
          </div>
          <div
            className="text-white rounded-lg shadow w-full h-[540px]"
            style={{
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden", // This overflow-hidden is fine for the image container
            }}
          >
            <img
              src={"/Images/IMG_1502_jpg.jpg"}
              alt=""
              className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
      <Book />
      <MobileLink />
    </div>
  );
}