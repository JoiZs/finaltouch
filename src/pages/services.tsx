import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper";
import _ from "lodash";

import "swiper/css";
import Serviceslide from "../components/serviceslide";
import gsap from "gsap";
import ServiceIntro from "../components/serviceIntro";
import { useTranslation } from "react-i18next";

interface Props {}

const Services = (props: Props) => {
  const { t } = useTranslation();
  const [activeSlide, setActiveSlide] = useState(0);

  const miniScroll = [
    t("Services"),
    t("Theme Parks"),
    t("Food"),
    t("Traning"),
    t("Partnerships"),
    t("Hotels"),
    t("Water Parks"),
    t("Moving/Permanent Parks"),
    t("Circus"),
    t("Safari"),
    t("Light and Sound"),
    t("Marketing"),
    t("Branding Animations"),
    t("Crowd Management"),
    t("IT and Communication"),
  ];

  const services = [
    {
      title: t("Consultant in the entertainment and theme parks"),
      cont: t(
        "We carry out these feasibility studies for you so that we can forecast targeted usage by applying market penetrations rates to market segments. These are influenced by market size, demographics, competition and the experience of comparable facilities."
      ),
      subcont:
        "Which are usually a requirement of investors and financing institutions",
    },
    {
      title: t("Food and beverage service"),
      cont: t(
        "To bring your vision to life, we'll help you by accessing our design specialists, conduct market research and analysis, do design branding, financial modelling, recipe development and costing, menu creation, or a full review of processing and procedures to bring your project from conception to grand opening. Our food and beverage consultants are fully capable of taking management roles to integrate solutions and improve operations and revenue for your food and beverage business."
      ),
      subcont:
        "Offers expert food and beverage consultancy services for businesses in need of concept development",
    },
    {
      title: t("Training and Human Resources"),
      cont: t(
        "Our HR and talent development professionals provide all-inclusive people-focused HR consulting services tailored to meet client needs. If you're looking for ongoing support or you're seeking assistance with a particular project, you can rely on our team."
      ),
      subcont: "Offers effective solutions to meet our client's needs",
    },
    {
      title: t("Partnerships with Construction Companies"),
      cont: t(
        "Commitment to shared goals and open communication between the client, architect/engineer, construction manager, general contractor, and subcontractors."
      ),
      subcont:
        "Allow design and construction process to be done within an environment of mutual trust",
    },
    {
      title: t("Hotels and Resorts"),
      cont: t(
        "We guarantee a thrilling guest experience that will keep the visitors coming back, while also providing leadership skills for hotel and resort professionals."
      ),
      subcont: "Provide consistent growth in the hotels and resorts we operate",
    },
    {
      title: t("Water Parks"),
      cont: t(
        "Daily operation and maintenance of slides and attraction components, such as mechanical, hydraulic and pneumatic devices. Sanitation of attractions and pool water according to local standards, including up-to-date recordkeeping and reporting."
      ),
      subcont:
        "Provides short-term and long-term operation services for your water park",
    },
    {
      title: t("Moving parks carnival and permanent park"),
      cont: t(
        "We believe the successful completion of new parks moving parks such as festival parks, carnivals and permanent parks will increase operational requirements. We guarantee our maintenance and operation services will be completed timely and within the given budget."
      ),
      subcont:
        "Providing maintenance services and utilizing best management practices",
    },
    {
      title: t("International shows circus and concerts"),
      cont: t(
        "Operating international shows, circus and concerts demand a lot of effort especially when it comes to the equipment used and logistics involved. Domestic and international artists have trusted our expertise and equipment to deliver a successful concert, circuit or international show."
      ),
      subcont:
        "Only experienced and highly skillful staff like those from FINAL TOUCH can live up to the requirements",
    },
    {
      title: t("Safari experience"),
      cont: t(
        "Our competitive rates allow us to offer flexibility and offer great value without interfering with our service delivery. Our experienced ground-handling partners play a very important role in the safari operations thanks to their great knowledge and expertise in all destinations featured."
      ),
      subcont:
        "Provides a satisfying, rewarding and memorable Safari experience to all our clients",
    },
    {
      title: t("Light and sound stages"),
      cont: t(
        "We'll also combine forces and coordinate with your people who are involved in the project to make sure our timely planning will result in a successful event. All the necessary information will be recorded in specific drawings, plans, packing lists, flowcharts, etc., so that each party can see what, when, where and how something happens, as well who is responsible and how they are involved."
      ),
      subcont:
        "Draw up technical and logistical plans for any kind of event's technology",
    },
    {
      title: t("Marketing Place"),
      cont: t(
        "The event industry keeps growing but it doesn't mean one can become successful. It requires building a proper marketing strategy and measuring success through metrics such as Registrations, Attendance, Lead generation, Attendee feedback, Brand impressions, New customers"
      ),
      subcont:
        "Creating a marketing strategy with us will result in better outcome for your business",
    },
    {
      title: t("Branding Animations and Creativity Team"),
      cont: t(
        "Providing high-quality branding and animation is what we strive for. We'll prepare a professional presentation of your project and have all the necessary materials for you. This includes sketches, illustrations, drawings, renderings, animations, websites, and other creative material."
      ),
      subcont:
        "We'll help you bring your brand to life and make the idea a reality",
    },
    {
      title: t("Crowd Management"),
      cont: t(
        "We can cover every security aspect of the event. Starting from the initial planning of an event, discussing site designs, analysing risk assessments, applying risk reduction measures and contingency plans to make sure that the required levels of supervisory, event and security personnel are well-equipped to provide safety and security services that will help assure the safety of event-goers without compromising the event."
      ),
      subcont:
        "FINAL TOUCH believes that your event or festival is important to you",
    },
    {
      title: t("IT and Communication"),
      cont: t(
        "Whether you need a single terminal or a complex computer network; wireless devices or a complex matrix intercom; networks for audio, video or data signals – our IT professionals take responsibility for providing it. We use hardware and software from all widely known manufacturers"
      ),
      subcont:
        "Without the best IT technical team, organizing a high-quality event is hard to do",
    },
  ];

  const slideChangeHandler = (slideNumber: number) => {
    setActiveSlide(slideNumber);
  };
  useEffect(() => {
    if (activeSlide < 1) {
      gsap.fromTo(
        "#miniScroll",
        { opacity: 0, translateY: 20, subcont: "" },
        { opacity: 1, translateY: 0 }
      );
    } else {
      gsap.fromTo(
        "#titleServ",
        { opacity: 0, translateX: 50 },
        { opacity: 1, translateX: 0 }
      );
    }
  }, [activeSlide]);
  return (
    <div className="h-full w-full relative 2xl:max-w-7xl m-auto">
      <ul
        id="miniScroll"
        className={`fixed ${
          activeSlide === 0 ? "hidden" : ""
        } lg:right-24 right-1/2 translate-x-1/2 uppercase text-xs italic overflow-hidden h-18 bottom-4 text-center`}
      >
        <div
          className={`ease-in-out space-y-2  transition-transform`}
          style={{
            transform: `translate(0, ${1.5 + activeSlide * -1.5}rem)`,
            transition: "ease-in-out 0.5s 0.2s",
          }}
        >
          {miniScroll.map((el) => (
            <li
              className={
                activeSlide === _.findIndex(miniScroll, (i) => i === el)
                  ? `dark:text-slate-400 text-slate-500 tracking-widest `
                  : `text-slate-400 dark:text-slate-600`
              }
              key={el}
            >
              {el}
            </li>
          ))}
        </div>
      </ul>
      <Swiper
        className="h-full"
        direction="vertical"
        mousewheel
        modules={[Mousewheel]}
        onSlideChange={(e) => {
          slideChangeHandler(e.activeIndex);
        }}
      >
        <SwiperSlide>
          <ServiceIntro currentSlide={activeSlide} />
        </SwiperSlide>
        {services.map((el) => (
          <SwiperSlide key={el.title}>
            <Serviceslide
              currentslide={activeSlide}
              title={el.title}
              cont={el.cont}
              subcont={el.subcont}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Services;
