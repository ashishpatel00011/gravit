import VerticalTimelineBar from "./VerticalTimelineBar";
import { useTranslation } from "react-i18next";

export default function Progressbar() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  return (
    <div id="ourStory" className="min-h-screen bg-black/95">
      <div className="flex text-white space-y-6 flex-col justify-center items-center text-center py-20">
        <div
          className={`flex text-white space-y-6 flex-col justify-center items-center ${
            isArabic ? "text-right" : "text-center"
          }`}
        >
          {/* <h4 className="text-[#1ab8b3] text-2xl font-medium">
            {t("about.progress.trustText")}
          </h4> */}
          <h3 className="text-6xl font-bold">
            {t("about.progress.historyTitle")}
          </h3>
          <p className="md:max-w-2xl  w-[80%] text-[#1ab8b3]">
            {t("about.progress.evolutionText")}
          </p>
          <UpdatedButton />

          <p className="md:max-w-2xl  w-[80%] text-gray-300">
            {t("about.progress.standardText")}
          </p>
         
        </div>

        <VerticalTimelineBar />

        {/* <div className={`flex text-white space-y-6 flex-col justify-center items-center ${
          isArabic ? 'text-right' : 'text-center'
        }`}>
          <h4 className="text-[#1ab8b3] text-xl font-medium">
            {t('about.progress.presentTitle')}
          </h4>
          <h3 className="text-4xl font-bold">
            {t('about.progress.currentDay')}
          </h3>
          <p className="max-w-2xl text-gray-300">
            {t('about.progress.reputationText')}
          </p>
          <p className="max-w-2xl text-gray-300">
            {t('about.progress.consultationText')}
          </p>
          <UpdatedButton />
        </div> */}
      </div>
    </div>
  );
}

import { HashLink } from "react-router-hash-link";

export function UpdatedButton() {
  const { t } = useTranslation();

  return ( 
    <HashLink
      // onClick={handleBookClick}
      smooth
      to={"#mobile"}
      className="p-2 sm:p-4 bg-gradient-custom text-[14px] sm:text-[16px] text-white rounded-md hover:opacity-90 transition-all duration-300 cursor-pointer"
    >
      {t("navigation.bookAppointment")}
    </HashLink>
  );
}
 
