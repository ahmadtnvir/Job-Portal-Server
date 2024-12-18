import { Link, useLoaderData } from "react-router-dom";
import React, { useRef, useState } from "react";

// const AnimatedHoverCard = () => {

//     };
const JobDetails = () => {
  const job = useLoaderData();
  const {
    _id,
    title,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    description,
    company,
    requirements,
    responsibilities,
    status,
    hr_email,
    hr_name,
    company_logo,
  } = job;
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  // handle mouse move
  const handleMouseMove = (e) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };
  //   console.log(job);
  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      ref={cardRef}
      className="w-full border relative overflow-hidden border-gray-200 rounded-lg p-[25px] cursor-pointer"
    >
      {/*  contents  */}
      <h2 className="text-[1.5rem] font-bold text-[#DB06F9]">{title}</h2>
      <p className="text-gray-600 text-[1rem] mt-2">{description}</p>
      <Link to={`/jobApply/${_id}`}>
        <button className="btn btn-outline border-[#DB06F9] hover:bg-[#eca1f6]">
          Apply Now
        </button>
      </Link>

      {/*  image  */}
      <img
        src={company_logo}
        alt="animated_card"
        className="w-16 mt-3 float-right"
      />

      {/*  hovered color shadow  */}
      {isHovering && (
        <div
          className="absolute inset-0 pointer-events-none blur-[50px]"
          style={{
            background: `radial-gradient(circle 50px at ${mousePosition.x}px ${mousePosition.y}px, #DB06F9, transparent)`,
          }}
        />
      )}
    </div>
  );
};

export default JobDetails;
