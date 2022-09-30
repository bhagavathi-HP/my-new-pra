import "./App.css";
import { useForm } from "react-hook-form";
import { useState } from "react";

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm({ mode: "onSubmit" });
  const handleResp = (data) => {
    console.log(data);
  };
  const handleError = (errors) => {
    console.log("my errors", errors);
  };

  const feilds = {
    name: {
      required: "please enter the name",
      pattern: {
        value: /^[A-Za-z]+$/i,
        message: "please enter the name in letters",
      },
      maxLength: { value: 20, message: "Please enter the valid mobile number" },
      minLength: { value: 3, message: "Please enter the valid name" },
    },
    DOB: {
      required: "please enter the DOB",
      maxLength: { value: 10, message: "Please enter the valid DOB" },
    },
    gender: { required: "Please enter the gender" },
    mobile: {
      required: "Please enter the mobile number",
      pattern: {
        value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
        message: "Invalid mobile number",
      },
      maxLength: { value: 10, message: "Please enter the valid mobile number" },
    },
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleResp, handleError)}>
        <div><label htmlFor="name"> Name :
          <input
          id="name"
            className={`${errors.name && "invalid"}`}
            type="text"
            name="name"
            {...register("name", feilds.name)}
            onKeyUp={() => {
              trigger("name");
            }}
          />
          {errors?.name && <p>{errors.name.message}</p>}
         </label></div>
        <div>
        <label htmlFor="DOB">DOB :
          <input
          id="DOB"
            className={`${errors.dob && "invalid"}`}
            type="date"
            name="dob"
            {...register("dob", feilds.DOB)}
            onKeyUp={() => {
              trigger("dob");
            }}
          />
          {errors?.dob && <p>{errors.dob.message}</p>}
         </label></div>
        <div>
        <label htmlFor="gender">
          <div id="gender">
          <label htmlFor="male">
          Gender :
            <input
              name="gender"
              {...register("gender",feilds.gender)}
              type="radio"
              id="male"
            />
            Male
          </label>
          <label htmlFor="female">
            <input
              name="gender"
              {...register("gender",feilds.gender)}
              type="radio"
              id="female"
            />
            Female
          </label>
          {errors?.gender && <p>{errors.gender.message}</p>}

          </div>
          </label>
        </div>
        <div>
        <label htmlFor="mobile"> Mobile :
          <input
           id="mobile"
            type="number"
            name="mobile"
            className={`${errors.mobile && "invalid"}`}
            {...register("mobile", feilds.mobile)}
            onKeyUp={() => {
              trigger("mobile");
            }}
          />
          {errors?.mobile && <p>{errors.mobile.message}</p>}
         </label>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
