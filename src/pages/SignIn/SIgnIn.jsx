import Lottie from "lottie-react";
import signInLottie from "../../assets/Animation - 1733886364058.json";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
const SIgnIn = () => {
  const location = useLocation();
  // console.log(location.pathname);
  const navigate = useNavigate();
  const { user, setUser, setLoader, createUser, signInUser } =
    useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    // console.log(data);
    signInUser(data.email, data.password)
      .then((result) => {
        // ! 60.2 ->
        // const userEmail = result?.user?.email;
        // const email = { email: userEmail };
        // // console.log(email);
        // axios.post("http://localhost:5000/jwt", email).then((data) => {
        //   console.log(data.data);
        // });
        const userEmail = result.user?.email;
        const email = { email: userEmail };
        axios.post("http://localhost:5000/jwt", email).then((data) => {
          console.log(data.data);
        });
        // ! 60.2 <-
        setUser(result.user);
        setLoader(false);
        alert("Signin successfully!");
        const form = e.target;
        form.reset();

        // {
        //   location?.state ? navigate(location.state) : navigate("/");
        // }
      })
      .catch((error) => {
        console.error(error);
        setLoader(false);
        alert("Failed to create user! Please try again.");
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse gap-4">
        <div className="text-center lg:text-left w-[80%] md:w-[50%] lg:w-[40%] xl:w-[40%] ">
          <Lottie animationData={signInLottie} loop={true} />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl pt-4">
          <h1 className="text-5xl font-bold">Sign in now!</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
                {...register("email", { required: true })}
              />
              {errors.email && <span>This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
                {...register("password", { required: true })}
              />
              {errors.email && <span>This field is required</span>}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SIgnIn;
