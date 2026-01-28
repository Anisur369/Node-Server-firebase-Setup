import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router";

function Register() {
  const { createUser } = useContext(AuthContext);
  // const { createUser } = use(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleRegistration = (data) => {
    const { name, email, password } = data;
  };

  return (
    <div className="card-body">
      <form onSubmit={handleSubmit(handleRegistration)}>
        <fieldset className="fieldset">
          <label className="label">Name</label>
          <input
            {...register("name", { required: true })}
            type="text"
            className="input"
            placeholder="Name"
          />
          {errors.name && (
            <b className="error text-[#ff0000]">*This field is required*</b>
          )}
          <label className="label">Email</label>
          <input
            {...register("email", { required: true })}
            type="email"
            className="input"
            placeholder="Email"
          />
          {errors.email && (
            <b className="error text-[#ff0000]">*This field is required*</b>
          )}
          <label className="label">Password</label>
          <input
            {...register("password", {
              required: true,
              minLength: 6,
              maxLength: 20,
              pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
            })}
            type="password"
            className="input"
            placeholder="Password"
          />
          {errors.password?.type === "required" && (
            <b className="error text-[#ff0000]">*This field is required*</b>
          )}
          {errors.password?.type === "minLength" && (
            <b className="error text-[#ff0000]">
              *Password must be at least 6 characters*
            </b>
          )}
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Register</button>
          <span className="text-sm mt-2">
            already have an account?
            <Link to="/login" className="link link-hover text-blue-500">
              <b> Login</b>
            </Link>
          </span>
        </fieldset>
      </form>
    </div>
  );
}

export default Register;
