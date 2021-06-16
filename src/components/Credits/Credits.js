import React from "react";

import "./Credits.css";

const Credits = () => {
  return (
    <div className="credits">
      <article>
        <p>
          <span>만든 사람:</span>babyazalea
        </p>
        <p>
          <span>깃헙:</span>
          <a
            href="https://github.com/babyazalea"
            rel="noopener noreferrer"
            target="_blank"
          >
            https://github.com/babyazalea
          </a>
        </p>
        <p>
          <span>이메일:</span>usun12@hotmail.com
        </p>
      </article>
    </div>
  );
};

export default Credits;
