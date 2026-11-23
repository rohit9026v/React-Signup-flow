import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import z, { optional } from "zod";

const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Invalid email format"),
  password: z.string().trim().min(1, "Password is required"),
  rememberMe: z.boolean().optional(),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col items-center py-16 gap-12">
      <div className="w-full max-w-md flex flex-col px-8">
        <h1 className="text-2xl font-extrabold">Welcome back</h1>
        <div className="flex gap-1">
          <p className="text-gray-500 text-xs">Don't have an account?</p>
          <a href="" className="text-blue-900 font-bold text-xs cursor-pointer">
            Sign up
          </a>
        </div>
      </div>

      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 text-sm"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="font-semibold text-mg">
            Email address
          </label>
          <input
            type="text"
            id="email"
            className="rounded-lg w-96 border-gray-300 border bg-gray-100 p-2 focus:outline-none focus:ring-4 focus:border-[#5246E5] focus:ring-[#5246E5]/10 focus:bg-white duration-200 ease-in-out"
            placeholder="john@example.com"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500"> {errors.email.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex justify-between items-center">
            <label htmlFor="password" className="font-semibold text-mg">
              Password
            </label>
            <a
              href=""
              className="text-blue-900 font-bold text-xs cursor-pointer"
            >
              Forgot password?
            </a>
          </div>

          <input
            type="password"
            id="password"
            className="rounded-lg w-96 border-gray-300 border bg-gray-100 p-2 focus:outline-none focus:ring-4 focus:border-[#5246E5] focus:ring-[#5246E5]/10 focus:bg-white duration-200 ease-in-out"
            placeholder="Enter your password"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-red-500"> {errors.password.message}</p>
          )}
        </div>
        <div className="flex items-center gap-1 cursor-pointer">
          <input type="checkbox" id="rememberMe" {...register("rememberMe")} />{" "}
          <label className="cursor-pointer" htmlFor="rememberMe">Remember me</label>
        </div>

        <div>
          <button
            type="submit"
            className="bg-[#534CE8] rounded-lg p-2 w-96 text-white font-semibold cursor-pointer transition ease-in-out active:scale-95 duration-300"
          >
            Log in
          </button>
        </div>

        <div className="flex items-center gap-2">
          <div className="border-t flex-1 border-gray-200"></div>
          <span className="text-gray-500">Or continue with</span>
          <div className="border-t flex-1 border-gray-200"></div>
        </div>

        <div className="flex gap-8 justify-center items-center">
          <button
            type="button"
            className="border border-gray-400 rounded-full p-1 w-10 flex cursor-pointer transition ease-in-out active:scale-95 duration-200"
            onClick={() => {
              console.log("google");
            }}
          >
            <img src="./src/assets/icons/google.png" alt="" />
          </button>
          <button
            type="button"
            className="border border-gray-400 rounded-full p-1 w-10 flex cursor-pointer transition ease-in-out active:scale-95 duration-200"
            onClick={() => {
              console.log("facebook");
            }}
          >
            <img src="./src/assets/icons/facebook.png" alt="" />
          </button>
          <button
            type="button"
            className="border border-gray-400 rounded-full p-1 h-10 w-10 flex cursor-pointer transition ease-in-out active:scale-95 duration-200"
            onClick={() => {
              console.log("git");
            }}
          >
            <img src="./src/assets/icons/github.png" alt="" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
