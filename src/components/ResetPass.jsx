import React from "react";
import { email } from "zod";

const ResetPass = ({ email }) => {
  return (
    <div className="flex justify-center py-10 text-lg ">
      <div className="flex flex-col gap-16">
        <div>
          <a className="flex cursor-pointer items-center text-base " href="">
            {" "}
            <img
              src="./src/assets/icons/arrow.png"
              alt=""
              className="w-5"
            />{" "}
            Back to log in
          </a>
        </div>
        <div className="flex flex-col gap-8">
          <div className="text-lg">
            <img src="./src/assets/icons/correct.png" alt="" />
            <h1 className="text-3xl font-bold">Check your email</h1>
            <p>
              We've sent a password reset link to <br />{" "}
              <span className="font-bold">{email}</span>
            </p>
          </div>

          <div className="flex flex-col items-start justify-center bg-gray-200 rounded-2xl px-10 py-20 text-xl w-96 h-36">
            <p>
              Click the link in the email to set a new password. If you don't
              see it, check your spam folder.
            </p>
          </div>
          <div>
            <p>
              Didn't receive the email?{" "}
              <a
                className="text-[#5246E5] text-base font-semibold cursor-pointer"
                href=""
              >
                Click to resend
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPass;
