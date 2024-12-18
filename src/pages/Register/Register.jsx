import Lottie from "lottie-react";
import registerLottie from "../../assets/Animation - 1733843200469.json";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext/AuthProvider";

const Register = () => {
  const { user, setUser, setLoader, createUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    // console.log(data);
    const passRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (!passRegex.test(data.password)) {
      alert(
        "Password must contain at least one uppercase letter, one lowercase letter, and be 6 characters long."
      );
      return;
    }
    createUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
        setLoader(false);
        alert("User created successfully!");
        const form = e.target;
        form.reset();
      })
      .catch((error) => {
        console.error(error);
        setLoader(false);
        alert("Failed to create user. Please try again.");
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse gap-4">
        <div className="text-center lg:text-left w-[80%] md:w-[50%] lg:w-[40%] xl:w-[40%] ">
          <Lottie animationData={registerLottie} loop={true} />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl pt-4">
          <h1 className="text-5xl font-bold">Register now!</h1>
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
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
