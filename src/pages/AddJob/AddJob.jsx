import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";

const AddJob = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const { salaryMin, salaryMax, currency, ...newJob } = data;
    newJob.salaryRange = { salaryMin, salaryMax, currency };
    newJob.requirements = newJob.requirements.split("\n");
    newJob.responsibilities = newJob.responsibilities.split("\n");
    console.log(newJob);
    axios
      .post("http://localhost:5000/jobs", newJob, {
        headers: {
          "Content-type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          toast.success("Job Added Successfully");
          // navigate("/myApplications");
        }
      })
      .catch((err) => {
        toast.error("Failed to add this job");
        console.error(err);
      });

    // const requirementsArr = [requirements];
    // console.log(requirementsArr);
    // const linkedin = data.linkedin;
    // const github = data.github;
    // const resume = data.resume;
    // const jobApplication = {
    //   job_id: id,
    //   applicant_email: user.email,
    //   linkedin,
    //   github,
    //   resume,
    // };
  };
  /**
 *  {
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
  } 
 * */
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col w-[70%]">
        <h1 className="text-5xl font-bold">Post Job!</h1>
        <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            {/* Title */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                type="text"
                {...register("title", { required: true })}
                placeholder="Job Title"
                defaultValue={"Software Engineer"}
                className="input input-bordered w-full"
              />
              {errors.title && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            {/* Location */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Location</span>
              </label>
              <input
                type="text"
                {...register("location", { required: true })}
                placeholder="Location"
                defaultValue={"Halishohor, Chittagong"}
                className="input input-bordered w-full"
              />
              {errors.location && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            {/* Job Type */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Job Type</span>
              </div>
              <select
                {...register("jobType", { required: true })}
                className="select select-bordered"
              >
                <option>Pick one</option>
                <option>Hybrid</option>
                <option>Remote</option>
                <option>On-site</option>
              </select>
              {errors.jobType && (
                <span className="text-red-500">This field is required</span>
              )}
            </label>

            {/* Category */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Category</span>
              </div>
              <select
                {...register("category", { required: true })}
                className="select select-bordered"
              >
                <option>Pick one</option>
                <option>Star Wars</option>
                <option>Harry Potter</option>
                <option>Lord of the Rings</option>
                <option>Planet of the Apes</option>
                <option>Star Trek</option>
              </select>
              {errors.category && (
                <span className="text-red-500">This field is required</span>
              )}
            </label>

            {/* Application Deadline */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Application Deadline</span>
              </label>
              <input
                type="date"
                {...register("applicationDeadline", { required: true })}
                className="input input-bordered w-full"
              />
              {errors.applicationDeadline && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            {/* Salary Range */}
            <div className="flex gap-4 mb-4">
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Minimum Salary</span>
                </label>
                <input
                  type="number"
                  {...register("salaryMin", { required: true })}
                  placeholder="Minimum"
                  className="input input-bordered w-full"
                />
                {errors.salaryMin && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Maximum Salary</span>
                </label>
                <input
                  type="number"
                  {...register("salaryMax", { required: true })}
                  placeholder="Maximum"
                  className="input input-bordered w-full"
                />
                {errors.salaryMax && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Currency</span>
                </div>
                <select
                  {...register("currency", { required: true })}
                  className="select select-bordered"
                >
                  <option>Pick one</option>
                  <option>Star Wars</option>
                  <option>Harry Potter</option>
                  <option>Lord of the Rings</option>
                  <option>Planet of the Apes</option>
                  <option>Star Trek</option>
                </select>
                {errors.currency && (
                  <span className="text-red-500">This field is required</span>
                )}
              </label>
            </div>

            {/* Description */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                {...register("description", { required: true })}
                placeholder="Job Description"
                className="textarea textarea-bordered w-full"
                rows="4"
              ></textarea>
              {errors.description && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            {/* Requirements */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Requirements</span>
              </label>
              <textarea
                {...register("requirements", { required: true })}
                placeholder="Put each requirements in a new line."
                className="textarea textarea-bordered w-full"
                rows="4"
              ></textarea>
              {errors.requirements && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            {/* Responsibilities*/}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Responsibilities</span>
              </label>
              <textarea
                {...register("responsibilities", { required: true })}
                placeholder="Responsibilities"
                className="textarea textarea-bordered w-full"
                rows="4"
              ></textarea>
              {errors.responsibilities && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            {/* Company */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Company</span>
              </label>
              <input
                type="text"
                {...register("company", { required: true })}
                placeholder="Company Name"
                className="input input-bordered w-full"
              />
              {errors.company && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            {/* Status */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Status</span>
              </label>
              <input
                type="text"
                {...register("status", { required: true })}
                placeholder="Status"
                defaultValue={"Active"}
                className="input input-bordered w-full"
              />
              {errors.status && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            {/* HR Email */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">HR Email</span>
              </label>
              <input
                type="email"
                {...register("hr_email", { required: true })}
                placeholder="HR Email"
                defaultValue={user?.email}
                className="input input-bordered w-full"
              />
              {errors.hr_email && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            {/* HR Name */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">HR Name</span>
              </label>
              <input
                type="text"
                {...register("hr_name", { required: true })}
                placeholder="HR Name"
                defaultValue={"Tanvir"}
                className="input input-bordered w-full"
              />
              {errors.hr_name && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            {/* Company Logo */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Company Logo</span>
              </label>
              <input
                type="text"
                {...register("company_logo", { required: true })}
                placeholder="Company Logo"
                defaultValue={"https://i.ibb.co/mXD5MNf/facebook.png"}
                className="input input-bordered w-full"
              />
              {errors.company_logo && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            {/* Submit Button */}
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary w-full">
                Submit
              </button>
            </div>
          </form>

          {/* </form> */}
        </div>
      </div>
    </div>
  );
};

export default AddJob;
