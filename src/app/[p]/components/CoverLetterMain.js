import React, { useState } from "react";
import CoverLetter from "./CoverLetter";
import CoverLetterFront from "./CoverLetterFront";

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
