import React, { useRef, useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

function TypeWriterComponent() {
  const typewriterRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState('auto');

  useEffect(() => {
    const adjustMaxHeight = () => {
      if (typewriterRef.current) {
        setMaxHeight(typewriterRef.current.scrollHeight);
      }
    };

    adjustMaxHeight();
    window.addEventListener('resize', adjustMaxHeight);

    return () => {
      window.removeEventListener('resize', adjustMaxHeight);
    };
  }, []);

  return (
    <div
      className="flex items-center flex-wrap justify-center"
      style={{ maxHeight }}
    >
      <div ref={typewriterRef} className="inline-flex">
        <Typewriter
          options={{
            strings: [
              "Computer Science",
              "Cybersecurity",
              "Mathematics",
              "Robotics",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 'natural',
            delay: 'natural'
          }}
        />
      </div>
      <div className="inline-flex">
        <p>
          at {" "}
          <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
            NYU Tandon
          </span>
        </p>
      </div>
    </div>
  );
}

export default TypeWriterComponent;
