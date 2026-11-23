import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z, { optional } from "zod";

const forgotSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Invalid email format"),
});

const Forgot = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(forgotSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center py-12">
      <div className="flex flex-col gap-10">
        <div>
          <a className="flex items-center font-semibold" href="">
            {" "}
            <img className="w-5" src="./src/assets/icons/arrow.png" alt="" />
            Back to log in
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <img
            className="bg-[#534CE8] w-12 p-2 rounded-2xl"
            src="./src/assets/icons/key.png"
            alt=""
          />
          <h1 className="font-bold text-3xl">Forgot password?</h1>
          <p className="text-lg">
            No worries, we'll send you reset <br /> instructions to your
            registered email address.
          </p>
        </div>

        <form
          action=""
          className="flex flex-col justify-start gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col justify-start gap-4">
            <label htmlFor="email" className="font-semibold text-lg">
              Email address
            </label>
            <input
              type="text"
              {...register("email")}
              id="email"
              placeholder="john@example.com"
              className="rounded-lg w-96 border-gray-300 border bg-gray-100 p-2 focus:outline-none focus:ring-4 focus:border-[#5246E5] focus:ring-[#5246E5]/10 focus:bg-white duration-200 ease-in-out"
            />
            {errors.email && (
              <p className="text-red-500"> {errors.email.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-[#534CE8] rounded-lg p-2 w-96 text-white text-lg font-semibold cursor-pointer transition ease-in-out active:scale-95 duration-300"
          >
            Send reset link
          </button>
        </form>
      </div>
    </div>
  );
};

export default Forgot;
