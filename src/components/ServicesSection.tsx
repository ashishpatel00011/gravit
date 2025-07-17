import React, { JSX } from "react";
import { FaCogs, FaHandshake, FaTrophy,   FaUserGraduate, FaAward, FaHandHoldingHeart } from "react-icons/fa";
import { useTranslation } from "react-i18next";

interface Service {
  key: string;
  icon: JSX.Element;
  fromSecondSection?: boolean;
}

const topRowServices: Service[] = [
  { key: "EXCELLENCE", icon:   <FaTrophy /> },
  { key: "MASTERY", icon: < FaUserGraduate/> },
  { key: "HONESTY", icon: <FaHandshake /> },
];

const bottomRowServices: Service[] = [
  { key: "QUALITY", icon: <FaAward /> },
  {
    key: "Ouroutstandingservices",
    icon: <FaCogs/>,
    fromSecondSection: true,
  },
  {
    key: "Comprehensiveandseamlesscare",
    icon: <FaHandHoldingHeart/>,
    fromSecondSection: true,
  },
];

const ServiceCard: React.FC<{
  title: string;
  description: string;
  icon: JSX.Element;
}> = ({ title, description, icon }) => (
  <div className="flex flex-col items-center p-6 w-full md:w-1/3">
    <div className="text-4xl text-primary mb-4">{icon}</div>
    <h4 className=" text-white mb-2 text-center whitespace-pre-line">
      {title}
    </h4>
    <p className="text-center text-primary whitespace-pre-line">
      {description}
    </p>
  </div>
);

const ServicesSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-black">
      <h2 className="text-center py-20 text-white">
        {t("about.services.sectionTitle")}
      </h2>

      {/* First row */}
      <div className="flex flex-wrap justify-center">
        {topRowServices.map((service, index) => (
          <ServiceCard
            key={index}
            title={t(`about.services.${service.key}.title`)}
            description={t(`about.services.${service.key}.description`)}
            icon={service.icon}
          />
        ))}
      </div>

      {/* Second row */}
      <div className="flex flex-wrap justify-center pb-30">
        {bottomRowServices.map((service, index) => (
          <ServiceCard
            key={index}
            title={
              service.fromSecondSection
                ? t(`about.services2.${service.key}.title`)
                : t(`about.services.${service.key}.title`)
            }
            description={
              service.fromSecondSection
                ? t(`about.services2.${service.key}.description`)
                : t(`about.services.${service.key}.description`)
            }
            icon={service.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
