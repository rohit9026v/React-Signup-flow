import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { email, z } from "zod";

const signUpSchema = z
  .object({
    userName: z.string().trim().min(3, "Min 3 characers are required"),
    email: z
      .string()
      .trim()
      .min(1, "Email is required")
      .email("Invalid email format"),
    password: z
      .string()
      .trim()
      .min(8, "Minimum 8 characters are required")
      .regex(/[@#$%&*]/, "Password must contain a special Character"),
    confirmPassword: z.string().trim(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password does not match",
    path: ["confirmPassword"],
  });

const Sign_up = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data) => {
    console.log("Form Data:", data);
    reset();
  };

  return (
    <div className="flex flex-col py-8 items-center gap-7">
      <div className="w-full max-w-md flex flex-col px-8">
        <h1 className="font-extrabold text-2xl">Create an account</h1>
        <div className="flex gap-1">
          <p className="text-gray-500 text-xs">Already have an account?</p>
          <a className="text-blue-900 font-bold text-xs cursor-pointer">
            Log in
          </a>
        </div>
      </div>

      <form
        className="flex flex-col gap-3 text-sm"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="userName">Full Name</label>
          <input
            className="rounded-lg w-96 border-gray-300 border bg-gray-100 p-1 px-3 focus:outline-none focus:ring-4 focus:border-[#5246E5] focus:ring-[#5246E5]/10 focus:bg-white duration-200 ease-in-out"
            id="userName"
            placeholder="John Doe"
            {...register("userName")}
          />
          {errors.userName && (
            <p className="text-red-500">{errors.userName.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email address</label>
          <input
            className="rounded-lg w-96 border-gray-300 border bg-gray-100 p-1 px-3 focus:outline-none focus:ring-4 focus:border-[#5246E5] focus:ring-[#5246E5]/10 focus:bg-white duration-200 ease-in-out"
            id="email"
            placeholder="john@example.com"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="rounded-lg w-96 border-gray-300 border bg-gray-100 p-1 px-3 focus:outline-none focus:ring-4 focus:border-[#5246E5] focus:ring-[#5246E5]/10 focus:bg-white duration-200 ease-in-out"
            placeholder="8+ charachers"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="confirmPass">Confirm Password</label>
          <input
            type="password"
            id="confirmPass"
            className="rounded-lg w-96 border-gray-300 border bg-gray-100 p-1 px-3 focus:outline-none focus:ring-4 focus:border-[#5246E5] focus:ring-[#5246E5]/10 focus:bg-white duration-200 ease-in-out"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <p className="text-red-500">{errors.confirmPassword.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-[#534CE8] rounded-lg p-2 text-white font-semibold cursor-pointer transition ease-in-out active:scale-95 duration-300"
        >
          Create Account
        </button>

        <div className="flex items-center gap-2">
          <div className="border-t flex-1 border-gray-200"></div>
          <span className="text-gray-500">Or continue with</span>
          <div className="border-t flex-1 border-gray-200"></div>
        </div>

        <div className="flex flex-col items-center gap-y-2">
          <button
            type="button"
            className="border border-gray-400 text-xs text-gray-600 w-84 rounded-lg flex items-center justify-center font-semibold p-1 gap-2 cursor-pointer transition ease-in-out active:scale-95 duration-300"
          >
            <img className=" w-5" src="./src/assets/icons/google.png" alt="" />
            Continue with Google
          </button>
          <button
            type="button"
            className="border border-gray-400 text-xs text-gray-600 w-84 rounded-lg flex items-center justify-center font-semibold p-1 gap-2 cursor-pointer transition ease-in-out active:scale-95 duration-300"
          >
            <img
              className=" w-5"
              src="./src/assets/icons/facebook.png"
              alt=""
            />
            Continue with Facebook
          </button>
          <button
            type="button"
            className="border border-gray-400 text-xs text-gray-600 w-84 rounded-lg flex items-center justify-center font-semibold p-1 gap-2 cursor-pointer transition ease-in-out active:scale-95 duration-200"
          >
            <img className=" w-5" src="./src/assets/icons/github.png" alt="" />
            Continue with GitHub
          </button>
        </div>
      </form>
      <p className="text-xs text-gray-600">
        By Creating an account, you agree to our{" "}
        <a className="text-blue-900 font-semibold cursor-pointer">
          Terms of Services
        </a>{" "}
        and{" "}
        <a className="text-blue-900 font-semibold cursor-pointer">
          Privacy Policy
        </a>
      </p>
    </div>
  );
};

export default Sign_up;
