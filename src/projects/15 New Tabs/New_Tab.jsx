import React, { useState } from "react";
import Body from "../../components/Body";

function New_Tab() {
  const [index, setIndex] = useState(0);
  // console.log(topSkills[index].);

  return (
    <>
      <Body>
        <div className="min-h-screen h-auto w-full py-4">
          {/* POster */}
          <div
            style={{
              backgroundImage: `url(${topSkills[index].poster})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="h-[70vh]  duration-300 rounded-lg mt-5 w-[80%] mx-auto bg-gray-500"
          ></div>

          <div className="w-[90%] mx-auto flex gap-2 py-5 ">
            {topSkills.map((skill, idx) => {
              return (
                <>
                  <div
                    onMouseOver={() => setIndex(idx)}
                    key={skill.id}
                    className={`min-h-[200px] h-auto cursor-pointer hover:bg-[rgba(32,31,31,0.09)]  duration-300 rounded-xl w-[350px] p-3 ${
                      idx == index ? "bg-[rgba(32,31,31,0.09)]" : ""
                    }`}
                  >
                    <h2 className="text-xl font-bold">{skill.title}</h2>
                    <p className="text-[16px] mt-2">{skill.description}</p>
                    <b className="text-[14px]">
                      {skill.jobProfiles.map((profile) => profile + " ")}
                    </b>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </Body>
    </>
  );
}

export default New_Tab;

const topSkills = [
  {
    id: 1,
    title: "Full Stack Web Development",
    description:
      "Build dynamic and scalable web applications from front to back.",
    jobProfiles: [
      "MERN Stack Developer",
      "Backend Engineer",
      "Frontend Developer",
      "DevOps Engineer",
      //   "Tech Lead",
    ],
    poster:
      "https://codingbytes.com/wp-content/uploads/2022/03/full-stack-web-development.jpg",
  },
  {
    id: 2,
    title: "UI/UX Design",
    description:
      "Design seamless user experiences and visually stunning interfaces.",
    jobProfiles: [
      "Product Designer",
      "UI/UX Designer",
      "Interaction Designer",
      "Design Lead",
      "UX Researcher",
    ],
    poster:
      "https://www.guvi.in/blog/wp-content/uploads/2024/01/what_is_ui_ux.webp",
  },
  {
    id: 3,
    title: "Data Analysis & Visualization",
    description:
      "Turn raw data into insights through analysis and visualization tools.",
    jobProfiles: [
      "Data Analyst",
      "Business Intelligence Analyst",
      //   "Data Visualization Specialist",
      "Product Analyst",
    ],
    poster:
      "https://www.datameer.com/wp-content/uploads/2019/12/Data-Vizualisation-924x512.png",
  },
  {
    id: 4,
    title: "Digital Marketing",
    description: "Promote businesses online using SEO, social media, and ads.",
    jobProfiles: [
      "Digital Marketer",
      "SEO Specialist",
      "Content Strategist",
      "PPC Expert",
      "Marketing Manager",
    ],
    poster:
      "https://online.hbs.edu/Style%20Library/api/resize.aspx?imgpath=/PublishingImages/blog/posts/digital-marketing-skills.jpg&w=1200&h=630",
  },
];
