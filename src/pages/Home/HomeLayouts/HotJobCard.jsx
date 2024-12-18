import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
// import {Link} from "react"
const HotJobCard = ({ job }) => {
  /**
 * {
    "title": "Software Engineer",
    "location": "Halishohor, Chittagong",
    "jobType": "Hybrid",
    "category": "Engineering",
    "applicationDeadline": "2024-12-31",
    "salaryRange": {
      "min": 40000,
      "max": 60000,
      "currency": "bdt"
    },
    "description": "We are seeking a skilled Software Engineer to join our dynamic team. The candidate will work on diverse projects and contribute to innovative solutions.",
    "company": "Favorite IT",
    "requirements": ["JavaScript", "React", "Node.js", "MongoDB"],
    "responsibilities": ["Develop and maintain software", "Collaborate with the team", "Participate in code reviews"],
    "status": "active",
    "hr_email": "hr@techsolutions.com",
    "hr_name": "Farhan Rahman",
    "company_logo": "https://i.ibb.co/mXD5MNf/facebook.png"
  },
 * */
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
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <div className="flex gap-2 items-center m-2">
        <figure>
          <img
            className="w-16 h-16 object-cover"
            src={company_logo}
            alt={company}
          />
        </figure>
        <div className="text-left">
          <h4 className="text-2xl">{company}</h4>
          <p className="flex items-center gap-2">
            <CiLocationOn />
            {location}
          </p>
        </div>
      </div>
      <div className="card-body text-left">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end ">
          <div className="flex flex-wrap justify-start items-start gap-3">
            {requirements.map((skill, i) => (
              <span key={i} className="border p-2 bg-transparent rounded-lg">
                {skill}
              </span>
            ))}
          </div>
          <Link to={`/job/${_id}`}>
            <button className="btn btn-primary">Apply</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotJobCard;
