import React from "react";
import Resume from "../../components/resume-templete/components/Resume";
import Resume6 from "../../components/resume-templete/components/Resume6";

function PreviewGeneratedData() {
  return (
    <>
      <div className="flex gap-5 p-5">
        <Resume />
        <Resume6 />
      </div>
    </>
  );
}

export default PreviewGeneratedData;
