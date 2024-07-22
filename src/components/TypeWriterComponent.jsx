import React from "react";
import Typewriter from "typewriter-effect";

function TypeWriterComponent() {
  return (
    <div className="flex items-center">
      <div className="inline-flex">
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
