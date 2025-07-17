import React, { JSX } from "react";
import {  FaTrophy } from "react-icons/fa";
import { useTranslation } from "react-i18next";

interface Service {
  key: string;
  icon: JSX.Element;
}

const services: Service[] = [
  { key: "Ouroutstandingservices", icon: <FaTrophy /> },
  { key: "Comprehensiveandseamlesscare", icon: <FaTrophy /> },
];

const ServiceCard: React.FC<{
  title: string;
  description: string;
  icon: JSX.Element;
}> = ({ title, description, icon }) => (
  <div className="flex flex-col items-center p-6 w-full sm:w-1/2 md:w-1/5">
    <div className="text-4xl text-primary mb-4">{icon}</div>
    <div className="font-bold text-white text-xl mb-2">{title}</div>
    <div className="text-center text-primary text-gray-600">{description}</div>
  </div>
);

const ServicesSection2: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-black">
      <div className="flex flex-wrap justify-evenly gap-6 pb-10">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={t(`about.services2.${service.key}.title`)}
            description={t(`about.services2.${service.key}.description`)}
            icon={service.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection2;
