import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import toast from "react-hot-toast";

const JobApply = () => {
  const { id } = useParams();
  const { user } = useAuth();
  //   console.log(id, user);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    const linkedin = data.linkedin;
    const github = data.github;
    const resume = data.resume;
    const jobApplication = {
      job_id: id,
      applicant_email: user.email,
      linkedin,
      github,
      resume,
    };
    axios
      .post("http://localhost:5000/job-applications", jobApplication, {
        headers: {
          "Content-type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          toast.success("Job Applied Successfully");
          navigate("/myApplications");
        }
      })
      .catch((err) => {
        toast.error("Failed to apply for the job");
        console.error(err);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col w-[70%]">
        <h1 className="text-5xl font-bold">Apply now!</h1>
        <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Linkedin Profile URL</span>
              </label>
              <input
                type="text"
                placeholder="Linkedin Url"
                className="input input-bordered"
                required
                {...register("linkedin", { required: true })}
              />
              {errors.linkedin && <span>This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">GitHub Profile URL</span>
              </label>
              <input
                type="text"
                placeholder="GitHub Url"
                className="input input-bordered"
                required
                {...register("github", { required: true })}
              />
              {errors.github && <span>This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Resume URL</span>
              </label>
              <input
                type="text"
                placeholder="Resume Url"
                className="input input-bordered"
                required
                {...register("resume", { required: true })}
              />
              {errors.resume && <span>This field is required</span>}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Apply</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobApply;
