import React from "react";
import SideBar from "../components/sideBar";
import SideBarComp from "../components/sideBarComp";

const page = () => {
  return (
    <div className=" grid grid-cols-4 gap-5 ">
      <div className="mt-5 md:col-span-3 pl-5 mr-5">
        <h1
          className=" pt-2 pb-2"
          style={{ fontFamily: "Poppins-Bold", fontSize: 24 }}
        >
          Description
        </h1>
        <p style={{ fontFamily: "Epilogue", fontWeight: 400, fontSize: 16 }}>
          As a Social Media Assistant, you will work closely with the social
          media manager or marketing team to execute social media strategies and
          campaigns. You will be responsible for assisting in the creation and
          scheduling of engaging content, monitoring social media channels, and
          interacting with followers. Your primary goal will be to enhance brand
          visibility, foster positive relationships with the audience, and drive
          engagement and conversions
        </p>
        <h1
          style={{ fontFamily: "Poppins-Bold", fontSize: 24 }}
          className="pt-2 pb-2"
        >
          Responsibilities
        </h1>
        <ul style={{ fontFamily: "Epilogue", fontWeight: 400, fontSize: 16 }}>
          <li className="flex pb-2">
            <img src="/svg/greentick.svg" alt="green_tick" className="pr-2" />
            Community engagement to ensure that is supported and actively
            represented online
          </li>
          <li className="flex pb-2">
            <img src="/svg/greentick.svg" alt="green_tick" className="pr-2" />
            Focus on social media content development and publication
          </li>
          <li className="flex pb-2">
            <img src="/svg/greentick.svg" alt="green_tick" className="pr-2" />
            Marketing and strategy support
          </li>
          <li className="flex pb-2">
            <img src="/svg/greentick.svg" alt="green_tick" className="pr-2" />
            Stay on top of trends on social media platforms, and suggest content
            ideas to the team
          </li>
          <li className="flex pb-2">
            <img src="/svg/greentick.svg" alt="green_tick" className="pr-2" />
            Engage with online communities
          </li>
        </ul>
        <h1
          style={{ fontFamily: "Poppins-Bold", fontSize: 24 }}
          className="pt-2 pb-2"
        >
          Ideal Candidate we want
        </h1>
        <ul
          className="list-disc px-5"
          style={{ fontFamily: "Epilogue", fontWeight: 400, fontSize: 16 }}
        >
          <li>
            <span className="font-extrabold">
              Young(18-24 year old) Female social media manager{" "}
            </span>{" "}
          </li>
          <li>
            <span className="font-bold">Passionate & Reliable: </span> Genuine
            interest in our mission and a strong desire to make a positive
            impact, responsible, and committed to fulfilling volunteer
            commitments.
          </li>
          <li>
            <span className="font-bold">
              Adaptable, Team Player & Strong Communication Skills:
            </span>
            Able to work effectively in diverse teams; and contributes
            positively.Flexible and open to embracing new challenges and
            shifting priorities; Clear verbal and written communication, active
            listening, and constructive feedback. Creative & Tech-Savvy: Brings
            fresh ideas and innovative approaches
          </li>

          <li>
            <span className="font-bold">Respectful </span>: Embraces diversity,
            inclusive, and treats others with respect. Abides with all our rules
            and regulations
          </li>
        </ul>
        <h1
          style={{ fontFamily: "Poppins-Bold", fontSize: 24 }}
          className="pt-2 pb-2"
        >
          When and Where
        </h1>
        <p  className="flex items-center" style={{ fontFamily: "Epilogue", fontWeight: 400, fontSize: 16 }}>
          <img src="/svg/location.svg" alt="green_tick" className="pr-3" />
          The onboading event for this event will take place in Jan 18th, 2023
          in AAU Auditorium.
        </p>
      </div>
      <SideBar />
    </div>
  );
};

export default page;
