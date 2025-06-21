"use client";
import React, { useState } from "react";
import Resumeedit from "../components/Resume1";

const Page = () => {
  const [pro, setPro] = useState(0);
  const [achievement, setAchievement] = useState(0);
  const [resp, setResp] = useState(0);
  const [skill, setSkill] = useState(0);
  const [objective, setObjective] = useState(0);

  return (
    <div className="flex gap-5">
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
  );
};

export default Page;
