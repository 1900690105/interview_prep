import React, { useState } from "react";
import CoverLetter from "../../profiling/components/CoverLetter";
import CoverLetterFront from "../../profiling/components/CoverLetterFront";

function CoverLetterMain() {
  const [letter, setLetter] = useState(true);
  return (
    <>
      <div>
        {letter ? <CoverLetter setLetter={setLetter} /> : <CoverLetterFront />}
      </div>
    </>
  );
}

export default CoverLetterMain;
