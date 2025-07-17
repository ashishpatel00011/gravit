/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { FaLocationArrow } from "react-icons/fa";
import Book from "../components/Book";
import MobileLink from "../components/MobileLink";

type DentalTechnology = {
  image: string | any;
  title: string | any;
  description: string | any;
  availAt: string | any;
};
type DermatologyTechnology = {
  image: string | any;
  title: string | any;
  description: string | any;
  availAt: string | any;
};

function ScrollItem({
  image,
  title,
  description,
  availAt,
}: DentalTechnology | DermatologyTechnology) {
  const ref = useRef<HTMLDivElement>(null);
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  // Track scroll progress of the individual element
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "center 60%"],
  });

  // Transform scroll progress into animation values
  // const y = useTransform(scrollYProgress, [0, 1], [40, 0]);
  // const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const xLeft = useTransform(scrollYProgress, [0, 1], [-40, 0]);
  const xRight = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <>
      <motion.div ref={ref} className="p-6 text-center">
        <motion.div
          className="rounded-lg overflow-hidden md:w-[400px] w-[100%]"
          style={{
            height: "300px",
            boxShadow:
              "rgba(26, 184, 179, 0.4) 0px 0px 40px 5px, rgba(191, 240, 237, 0.25) 0px 0px 30px 10px",
            filter: "blur(0.3px)",
            x: xLeft,
            opacity,
          }}
        >
          <img
            src={image}
            alt={String(title)}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>
      <motion.div
        ref={ref}
        style={{
          x: xRight,
          opacity,
        }}
      >
        <h3
          className="text-3xl py-2 font-bold mb-4"
          style={{ textAlign: isArabic ? "right" : "left" }}
        >
          {title}
        </h3>
        <p
          className="mb-3 font-light"
          style={{ textAlign: isArabic ? "right" : "left" }}
        >
          {description}
        </p>
        <motion.p
          className="mb-3 font-light flex items-center gap-2"
          style={{ textAlign: isArabic ? "right" : "left" }}
        >
          <motion.span
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0 }} // triggers as soon as it touches viewport
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <FaLocationArrow />
          </motion.span>
          <b>
            <span style={{ color: "rgb(26 184 179)" }}>
              {t("availTitle")} :
            </span>{" "}
            {availAt}
          </b>
        </motion.p>
      </motion.div>
    </>
  );
}

const Technology: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  // fetch the array of dental technologies from translation JSON
  const dentalTechnologies = t("discovers.dental", {
    returnObjects: true,
  }) as DentalTechnology[];
  const dermatologyTechnologies = t("discovers.dermatology", {
    returnObjects: true,
  }) as DermatologyTechnology[];

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <div className="relative md:h-[70vh] sm:h-screen overflow-hidden">
        <img
          src="/Images/٧.jpg"
          alt=""
          className="w-full h-full object-cover"
        />

        {/* Darker overlay */}
        <div className="absolute inset-0 bg-black/60 z-10" />

        {/* Centered Technology text */}
        <div className=" hover:scale-105 transition-transform duration-300 ease-in-out absolute inset-0 flex items-center justify-center z-20">
          <span
            className="text-[3rem] md:text-[5rem] text-center"
            style={{ color: "rgb(26 184 179)", lineHeight: "4rem" }}
          >
            <strong>{t("technology")}</strong>
          </span>
        </div>
      </div>

      {/* Tab buttons */}
      <h2 className="text-center mt-20 mb-10 ">{t("dental")} </h2>

      {/* Content switching */}
      <div className="container mx-auto p-6">
        <div>
          <div
            className="grid md:grid-cols-2 gap-6"
            style={{ direction: isArabic ? "rtl" : "ltr" }}
          >
            {dentalTechnologies.map(
              (
                item: {
                  image: string | any;
                  title:
                    | string
                    | number
                    | bigint
                    | boolean
                    | React.ReactElement<
                        unknown,
                        string | React.JSXElementConstructor<any>
                      >
                    | Iterable<React.ReactNode>
                    | Promise<
                        | string
                        | number
                        | bigint
                        | boolean
                        | React.ReactPortal
                        | React.ReactElement<
                            unknown,
                            string | React.JSXElementConstructor<any>
                          >
                        | Iterable<React.ReactNode>
                        | null
                        | any
                      >
                    | null
                    | any;
                  description:
                    | string
                    | number
                    | bigint
                    | boolean
                    | React.ReactElement<
                        unknown,
                        string | React.JSXElementConstructor<any>
                      >
                    | Iterable<React.ReactNode>
                    | React.ReactPortal
                    | Promise<
                        | string
                        | number
                        | bigint
                        | boolean
                        | React.ReactPortal
                        | React.ReactElement<
                            unknown,
                            string | React.JSXElementConstructor<any>
                          >
                        | Iterable<React.ReactNode>
                        | null
                        | any
                      >
                    | Iterable<React.ReactNode>
                    | null
                    | any;
                  availAt:
                    | string
                    | number
                    | bigint
                    | boolean
                    | React.ReactElement<
                        unknown,
                        string | React.JSXElementConstructor<any>
                      >
                    | Iterable<React.ReactNode>
                    | React.ReactPortal
                    | Promise<
                        | string
                        | number
                        | bigint
                        | boolean
                        | React.ReactPortal
                        | React.ReactElement<
                            unknown,
                            string | React.JSXElementConstructor<any>
                          >
                        | Iterable<React.ReactNode>
                        | null
                        | any
                      >
                    | Iterable<React.ReactNode>
                    | null
                    | any;
                },
                index: React.Key | null | any
              ) => (
                <React.Fragment key={index}>
                  {/* <div className="p-6 text-center">
                    <div
                      className="rounded-lg overflow-hidden md:w-[500px] w-[100%]"
                      style={{
                        boxShadow:
                          "rgba(26, 184, 179, 0.38) 0px 0px 173px 50px, rgba(191, 240, 237, 0.18) 0px 0px 119px 83px",
                        filter: "blur(0.3px)",
                      }}
                    >
                      <img
                        src={item.image}
                        alt={String(item.title)}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h3
                      className="text-3xl py-10 font-bold mb-4"
                      style={{ textAlign: isArabic ? "right" : "left" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="mb-3 font-light"
                      style={{ textAlign: isArabic ? "right" : "left" }}
                    >
                      {item.description}
                    </p>
                    <p
                      className="mb-3 font-light"
                      style={{ textAlign: isArabic ? "right" : "left" }}
                    >
                      <b>
                        <span style={{ color: "rgb(26 184 179)" }}>
                          {t("availTitle")} :
                        </span>{" "}
                        {item.availAt}
                      </b>
                    </p>
                  </div> */}
                  <ScrollItem
                    image={item.image}
                    title={item.title}
                    availAt={item.availAt}
                    description={item.description}
                  />
                </React.Fragment>
              )
            )}
          </div>
          {/* <div
            className="grid md:grid-cols-2 gap-6"
            style={{ direction: isArabic ? "rtl" : "ltr" }}
          >
            <div className=" p-6 text-center">
              <div
                className="rounded-lg overflow-hidden w-[500px] "
                style={{
                  boxShadow:
                    "rgba(26, 184, 179, 0.38) 0px 0px 173px 50px, rgba(191, 240, 237, 0.18) 0px 0px 119px 83px",
                  filter: "blur(0.3px)",
                }}
              >
                <img
                  src="/Images/scientist-2141259 (1).jpg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h3
                className="text-3xl py-10   font-bold mb-4"
                style={{ textAlign: isArabic ? "right" : "left" }}
              >
                Microscope
              </h3>
              <p
                className="mb-3  font-light"
                style={{ textAlign: isArabic ? "right" : "left" }}
              >
                The microscope used in root canal therapy is a revolution in the
                field of dentistry. Thanks to its high-magnification capability,
                the root canal specialist can clearly and precisely see the
                details and intricate spaces within the roots, making it easier
                to diagnose and treat. This magnification technology enhances
                the accuracy and effectiveness of root canal treatment, reducing
                the likelihood of future complications and increasing the
                success rate of treatment. It also minimizes pain and recovery
                time and improves the overall patient experience.
              </p>
              <p
                className="mb-3  font-light "
                style={{ textAlign: isArabic ? "right" : "left" }}
              >
                <b>
                  <span style={{ color: "rgb(26 184 179)" }}>
                    Available Here :
                  </span>{" "}
                  Saud Plaza , Nuzha , Shuqiya, Hira
                </b>
              </p>
            </div>
          </div>
          <div
            className="grid md:grid-cols-2 gap-6"
            style={{ direction: isArabic ? "rtl" : "ltr" }}
          >
            <div className=" p-6 text-center">
              <div
                className="rounded-lg overflow-hidden w-[500px] "
                style={{
                  boxShadow:
                    "rgba(26, 184, 179, 0.38) 0px 0px 173px 50px, rgba(191, 240, 237, 0.18) 0px 0px 119px 83px",
                  filter: "blur(0.3px)",
                }}
              >
                <img
                  src="/Images/IMG_0034.JPG"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h3
                className="text-3xl py-10  font-bold mb-4"
                style={{ textAlign: isArabic ? "right" : "left" }}
              >
                Panorama
              </h3>
              <p
                className="mb-3  font-light"
                style={{ textAlign: isArabic ? "right" : "left" }}
              >
                Panoramic dental radiography is a digital imaging technique that
                provides a single, comprehensive image of the entire jaws, teeth
                and skeletal structure surrounding the mouth and face, without
                the need to take multiple images from different angles as in
                traditional dental imaging. Some of the features of panoramic
                radiography.
              </p>
              <p
                className="mb-3  font-light "
                style={{ textAlign: isArabic ? "right" : "left" }}
              >
                <b>
                  <span style={{ color: "rgb(26 184 179)" }}>
                    Available Here :
                  </span>{" "}
                </b>
              </p>
            </div>
          </div>
          <div
            className="grid md:grid-cols-2 gap-6"
            style={{ direction: isArabic ? "rtl" : "ltr" }}
          >
            <div className=" p-6 text-center">
              <div
                className="rounded-lg overflow-hidden w-[500px] "
                style={{
                  boxShadow:
                    "rgba(26, 184, 179, 0.38) 0px 0px 173px 50px, rgba(191, 240, 237, 0.18) 0px 0px 119px 83px",
                  filter: "blur(0.3px)",
                }}
              >
                <img
                  src="/Images/IMG_0034.JPG"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h3
                className="text-3xl py-10  font-bold mb-4"
                style={{ textAlign: isArabic ? "right" : "left" }}
              >
                Laughing gas
              </h3>
              <p
                className="mb-3  font-light"
                style={{ textAlign: isArabic ? "right" : "left" }}
              >
                Laughing gas is a technique used in dental treatment to help
                patients eliminate anxiety and fear during treatment. Also known
                as nitrous oxide, laughing gas is a medical gas that is inhaled
                through a small mask placed over the nose. Laughing gas calms
                and relaxes the patient, and may also relieve pain.
              </p>
              <p
                className="mb-3  font-light "
                style={{ textAlign: isArabic ? "right" : "left" }}
              >
                <b>
                  <span style={{ color: "rgb(26 184 179)" }}>
                    Available Here :
                  </span>{" "}
                </b>
              </p>
            </div>
          </div> */}
        </div>
      </div>
      {/* Tab buttons */}
      <h2 className="text-center mt-20 mb-10">{t("dermatology")} </h2>

      {/* Content switching */}
      <div className="container mx-auto p-6 mb-16">
        <div>
          <div
            className="grid md:grid-cols-2 gap-6"
            style={{ direction: isArabic ? "rtl" : "ltr" }}
          >
            {dermatologyTechnologies.map(
              (
                item: {
                  image: string | any;
                  title:
                    | string
                    | number
                    | bigint
                    | boolean
                    | React.ReactElement<
                        unknown,
                        string | React.JSXElementConstructor<any>
                      >
                    | Iterable<React.ReactNode>
                    | Promise<
                        | string
                        | number
                        | bigint
                        | boolean
                        | React.ReactPortal
                        | React.ReactElement<
                            unknown,
                            string | React.JSXElementConstructor<any>
                          >
                        | Iterable<React.ReactNode>
                        | null
                        | any
                      >
                    | null
                    | any;
                  description:
                    | string
                    | number
                    | bigint
                    | boolean
                    | React.ReactElement<
                        unknown,
                        string | React.JSXElementConstructor<any>
                      >
                    | Iterable<React.ReactNode>
                    | React.ReactPortal
                    | Promise<
                        | string
                        | number
                        | bigint
                        | boolean
                        | React.ReactPortal
                        | React.ReactElement<
                            unknown,
                            string | React.JSXElementConstructor<any>
                          >
                        | Iterable<React.ReactNode>
                        | null
                        | any
                      >
                    | Iterable<React.ReactNode>
                    | null
                    | any;
                  availAt:
                    | string
                    | number
                    | bigint
                    | boolean
                    | React.ReactElement<
                        unknown,
                        string | React.JSXElementConstructor<any>
                      >
                    | Iterable<React.ReactNode>
                    | React.ReactPortal
                    | Promise<
                        | string
                        | number
                        | bigint
                        | boolean
                        | React.ReactPortal
                        | React.ReactElement<
                            unknown,
                            string | React.JSXElementConstructor<any>
                          >
                        | Iterable<React.ReactNode>
                        | null
                        | any
                      >
                    | Iterable<React.ReactNode>
                    | null
                    | any;
                },
                index: React.Key | null | any
              ) => (
                <React.Fragment key={index}>
                  {/* <div className="p-6 text-center">
                    <div
                      className="rounded-lg overflow-hidden md:w-[500px] w-[100%]"
                      style={{
                        boxShadow:
                          "rgba(26, 184, 179, 0.38) 0px 0px 173px 50px, rgba(191, 240, 237, 0.18) 0px 0px 119px 83px",
                        filter: "blur(0.3px)",
                      }}
                    >
                      <img
                        src={item.image}
                        alt={String(item.title)}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h3
                      className="text-3xl py-10 font-bold mb-4"
                      style={{ textAlign: isArabic ? "right" : "left" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="mb-3 font-light"
                      style={{ textAlign: isArabic ? "right" : "left" }}
                    >
                      {item.description}
                    </p>
                    <p
                      className="mb-3 font-light"
                      style={{ textAlign: isArabic ? "right" : "left" }}
                    >
                      <b>
                        <span style={{ color: "rgb(26 184 179)" }}>
                          {t("availTitle")} :
                        </span>{" "}
                        {item.availAt}
                      </b>
                    </p>
                  </div> */}
                  <ScrollItem
                    image={item.image}
                    title={item.title}
                    availAt={item.availAt}
                    description={item.description}
                  />
                </React.Fragment>
              )
            )}
          </div>
          {/* <div
            className="grid md:grid-cols-2 gap-6"
            style={{ direction: isArabic ? "rtl" : "ltr" }}
          >
            <div className=" p-6 text-center">
              <div
                className="rounded-lg overflow-hidden w-[500px] "
                style={{
                  boxShadow:
                    "rgba(26, 184, 179, 0.38) 0px 0px 173px 50px, rgba(191, 240, 237, 0.18) 0px 0px 119px 83px",
                  filter: "blur(0.3px)",
                }}
              >
                <img
                  src="/Images/IMG_6938_jpg (1).jpg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h3
                className="text-3xl py-10  font-bold mb-4"
                style={{ textAlign: isArabic ? "right" : "left" }}
              >
                Gegntle Max ProLaser
              </h3>
              <p
                className="mb-3  font-light"
                style={{ textAlign: isArabic ? "right" : "left" }}
              >
                Gegntle Max ProLaser dental radiography is a digital imaging
                technique providing a single, comprehensive image of the jaws,
                teeth, and skeletal structure — without multiple images from
                different angles.
              </p>
              <p
                className="mb-3  font-light "
                style={{ textAlign: isArabic ? "right" : "left" }}
              >
                <b>
                  <span style={{ color: "rgb(26 184 179)" }}>
                    Available Here :
                  </span>{" "}
                  Al-Saud Plaza
                </b>
              </p>
            </div>
          </div>
          <div
            className="grid md:grid-cols-2 gap-6"
            style={{ direction: isArabic ? "rtl" : "ltr" }}
          >
            <div className=" p-6 text-center">
              <div
                className="rounded-lg overflow-hidden w-[500px] "
                style={{
                  boxShadow:
                    "rgba(26, 184, 179, 0.38) 0px 0px 173px 50px, rgba(191, 240, 237, 0.18) 0px 0px 119px 83px",
                  filter: "blur(0.3px)",
                }}
              >
                <img
                  src="/Images/IMG_6935_jpg (1).jpg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h3
                className="text-3xl py-10  font-bold mb-4"
                style={{ textAlign: isArabic ? "right" : "left" }}
              >
                Elite+ Laser
              </h3>
              <p
                className="mb-3  font-light"
                style={{ textAlign: isArabic ? "right" : "left" }}
              >
                eliteLaser dental radiography is a digital imaging technique
                providing a single, comprehensive image of the jaws, teeth, and
                skeletal structure — without multiple images from different
                angles.
              </p>
              <p
                className="mb-3  font-light "
                style={{ textAlign: isArabic ? "right" : "left" }}
              >
                <b>
                  <span style={{ color: "rgb(26 184 179)" }}>
                    Available Here :
                  </span>{" "}
                  Al-Saud Plaza
                </b>
              </p>
            </div>
          </div>

          <div
            className="grid md:grid-cols-2 gap-6"
            style={{ direction: isArabic ? "rtl" : "ltr" }}
          >
            <div className=" p-6 text-center">
              <div
                className="rounded-lg overflow-hidden w-[500px] "
                style={{
                  boxShadow:
                    "rgba(26, 184, 179, 0.38) 0px 0px 173px 50px, rgba(191, 240, 237, 0.18) 0px 0px 119px 83px",
                  filter: "blur(0.3px)",
                }}
              >
                <img
                  src="/Images/IMG_0034.JPG"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h3
                className="text-3xl py-10  font-bold mb-4"
                style={{ textAlign: isArabic ? "right" : "left" }}
              >
                Laser Spectra
              </h3>
              <p
                className="mb-3  font-light"
                style={{ textAlign: isArabic ? "right" : "left" }}
              >
                Spectra laser is one of the most powerful and best laser skin
                treatment devices around the world and is the only device
                globally that has been approved by the US Food and Drug
                Administration (FDA) for the treatment of melasma, and among its
                main advantages.
              </p>
              <p
                className="mb-3  font-light "
                style={{ textAlign: isArabic ? "right" : "left" }}
              >
                <b>
                  <span style={{ color: "rgb(26 184 179)" }}>
                    Available Here :
                  </span>{" "}
                  Al-Saud Plaza
                </b>
              </p>
            </div>
          </div>

          <div
            className="grid md:grid-cols-2 gap-6"
            style={{ direction: isArabic ? "rtl" : "ltr" }}
          >
            <div className=" p-6 text-center">
              <div
                className="rounded-lg overflow-hidden w-[500px] "
                style={{
                  boxShadow:
                    "rgba(26, 184, 179, 0.38) 0px 0px 173px 50px, rgba(191, 240, 237, 0.18) 0px 0px 119px 83px",
                  filter: "blur(0.3px)",
                }}
              >
                <img
                  src="/Images/IMG_0034.JPG"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h3
                className="text-3xl py-10  font-bold mb-4"
                style={{ textAlign: isArabic ? "right" : "left" }}
              >
                Hydratouch
              </h3>
              <p
                className="mb-3  font-light"
                style={{ textAlign: isArabic ? "right" : "left" }}
              >
                Hydratouch is the latest deep cleansing technology to date and
                is the evolutionary update of the HydraFacial, a non-invasive
                medical procedure used to rejuvenate the skin and fight aging
                with a device that performs three skin functions, ranging from
                45 minutes to an hour, to improve skin quality, remove
                impurities, nourish, moisturize and tighten the skin, close
                small pores, and fight the signs of aging.
              </p>
              <p
                className="mb-3  font-light "
                style={{ textAlign: isArabic ? "right" : "left" }}
              >
                <b>
                  <span style={{ color: "rgb(26 184 179)" }}>
                    Available Here :
                  </span>{" "}
                  Al-Saud Plaza
                </b>
              </p>
            </div>
          </div>

          <div
            className="grid md:grid-cols-2 gap-6"
            style={{ direction: isArabic ? "rtl" : "ltr" }}
          >
            <div className=" p-6 text-center">
              <div
                className="rounded-lg overflow-hidden w-[500px] "
                style={{
                  boxShadow:
                    "rgba(26, 184, 179, 0.38) 0px 0px 173px 50px, rgba(191, 240, 237, 0.18) 0px 0px 119px 83px",
                  filter: "blur(0.3px)",
                }}
              >
                <img
                  src="/Images/IMG_0034.JPG"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h3
                className="text-3xl py-10  font-bold mb-4"
                style={{ textAlign: isArabic ? "right" : "left" }}
              >
                Sylfirm X
              </h3>
              <p
                className="mb-3  font-light"
                style={{ textAlign: isArabic ? "right" : "left" }}
              >
                An upgraded version of the Scarette device, by combining
                microneedling or micro-needling with RF waves, Silverm X offers
                a versatile solution for various skin issues, the most important
                of which are.
              </p>
              <p
                className="mb-3  font-light "
                style={{ textAlign: isArabic ? "right" : "left" }}
              >
                <b>
                  <span style={{ color: "rgb(26 184 179)" }}>
                    Available Here :
                  </span>{" "}
                  Al-Saud Plaza
                </b>
              </p>
            </div>
          </div>

          <div
            className="grid md:grid-cols-2 gap-6"
            style={{ direction: isArabic ? "rtl" : "ltr" }}
          >
            <div className=" p-6 text-center">
              <div
                className="rounded-lg overflow-hidden w-[500px] "
                style={{
                  boxShadow:
                    "rgba(26, 184, 179, 0.38) 0px 0px 173px 50px, rgba(191, 240, 237, 0.18) 0px 0px 119px 83px",
                  filter: "blur(0.3px)",
                }}
              >
                <img
                  src="/Images/IMG_0034.JPG"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h3
                className="text-3xl py-10  font-bold mb-4"
                style={{ textAlign: isArabic ? "right" : "left" }}
              >
                Ultraformer{" "}
              </h3>
              <p
                className="mb-3  font-light"
                style={{ textAlign: isArabic ? "right" : "left" }}
              >
                Ultraformer is a non-surgical cosmetic device used to tighten
                and improve the appearance of the skin, based on intense
                ultrasound technology known as HIFU technology. This technology
                targets the deeper layers of the skin to stimulate collagen
                production and improve skin elasticity.
              </p>
              <p
                className="mb-3  font-light "
                style={{ textAlign: isArabic ? "right" : "left" }}
              >
                <b>
                  <span style={{ color: "rgb(26 184 179)" }}>
                    Available Here :
                  </span>{" "}
                  Al-Saud Plaza
                </b>
              </p>
            </div>
          </div>

          <div
            className="grid md:grid-cols-2 gap-6"
            style={{ direction: isArabic ? "rtl" : "ltr" }}
          >
            <div className=" p-6 text-center">
              <div
                className="rounded-lg overflow-hidden w-[500px] "
                style={{
                  boxShadow:
                    "rgba(26, 184, 179, 0.38) 0px 0px 173px 50px, rgba(191, 240, 237, 0.18) 0px 0px 119px 83px",
                  filter: "blur(0.3px)",
                }}
              >
                <img
                  src="/Images/IMG_0034.JPG"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h3
                className="text-3xl py-10  font-bold mb-4"
                style={{ textAlign: isArabic ? "right" : "left" }}
              >
                Regenera
              </h3>
              <p
                className="mb-3  font-light"
                style={{ textAlign: isArabic ? "right" : "left" }}
              >
                Regenera is a non-surgical treatment for hair loss, using
                microinjections of hair growth-stimulating stem cells that help
                stimulate hair growth naturally without the need for hair
                transplant surgery. It can be used to treat hereditary baldness,
                age-related hair loss, and even to promote hair growth after
                hair transplant procedures to enhance results and improve hair
                density.
              </p>
              <p
                className="mb-3  font-light "
                style={{ textAlign: isArabic ? "right" : "left" }}
              >
                <b>
                  <span style={{ color: "rgb(26 184 179)" }}>
                    Available Here :
                  </span>{" "}
                  Al-Saud Plaza
                </b>
              </p>
            </div>
          </div> */}
        </div>
      </div>
      <Book />
      <MobileLink />
    </div>
  );
};

export default Technology;
