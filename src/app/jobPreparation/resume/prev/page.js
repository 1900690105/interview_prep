"use client";
import React, { useState } from "react";
import Resume from "../../components/resume-templete/components/Resume";
import Resumeedit from "../../components/resume-templete/components/Resume1";

const page = () => {
  const [pro, setPro] = useState(0);
  const [achievement, setAchievement] = useState(0);
  const [resp, setResp] = useState(0);
  const [skill, setSkill] = useState(0);
  const [objective, setObjective] = useState(0);
  return (
    <>
      <div className="flex gap-5">
        <div>
          {/* <Resume
            setPro={setPro}
            setAchievement={setAchievement}
            setResp={setResp}
            setSkill={setSkill}
            setObjective={setObjective}
          /> */}
        </div>
        <div>
          <Resumeedit
            pro={pro}
            achievement={achievement}
            resp={resp}
            skill={skill}
            objective={objective}
          />
        </div>
      </div>
    </>
  );
};

export default page;
