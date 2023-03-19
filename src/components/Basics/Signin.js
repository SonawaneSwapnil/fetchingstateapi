import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSave = (data) => {
    console.log(data);
    alert("Sign in successfully");
    navigate("/register");
  };
  return (
    <div className="container">
      <div className="myCard">
        <div className="row my-4">
          <div className="col-md-6">
            <div className="myLeftCtn">
              <form
                className="myForm text-center"
                onSubmit={handleSubmit(onSave)}
              >
                <header className="sign">Sign in</header>

                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control myinput"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    {...register("email", {
                      required: "enter your email id",
                    })}
                  />
                  {errors.email && (
                    <span style={{ color: "red" }}>{errors.email.message}</span>
                  )}
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control myinput"
                    id="exampleInputPassword1"
                    {...register("password", {
                      required: "enter your password",
                      minLength: {
                        value: 8,
                        message: "Enter atleast 8 digit",
                      },
                      pattern: {
                        message: "Enter valid password",
                      },
                    })}
                  />
                  {errors.password && (
                    <span style={{ color: "red" }}>
                      {errors.password.message}
                    </span>
                  )}
                </div>

                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
