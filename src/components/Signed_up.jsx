import React from "react";

const Signed_up = ({ name, email }) => {
  return (
    <div className="flex flex-col gap-10 items-center justify-center">
      <div className="flex flex-col gap-4">
        <img className="w-10" src="./src/assets/icons/correct.png" alt="ds" />
        <h1 className="text-2xl">
          <span className="font-bold">Welcome to NovaDesk,</span> {name}! We've sent a <br /> confirmation link to {email}
          .
        </h1>
      </div>
      <div className="flex flex-col items-start justify-center bg-gray-200 rounded-2xl px-10 py-20 text-xl w-102 h-64">
        <h2>User details</h2>
        <h3 className="font-bold">Workspace plan</h3>
        <h3 className="font-bold">14-Day Free Trial</h3>
        <p>
          {email}
          <br />
          Status: <span className="font-bold"> Ready to launch </span>
        </p>
      </div>
      <div className="flex flex-col gap-4 w-96">
        <button type="button" className="rounded-xl bg-[#5246E5] text-white flex items-center justify-center text-xl font-semibold p-2 cursor-pointer transition ease-in-out active:scale-95 duration-200">
          {" "}
          Continue to Workspace
        </button>
        <button type="button" className="rounded-xl border-2 border-gray-200 flex items-center justify-center text-xl font-semibold p-2 cursor-pointer transition ease-in-out active:scale-95 duration-200">
          {" "}
          Back to Log in
        </button>
      </div>
      <div>
        <p>Didn't receive the email? <a href="" className="text-[#5246E5] font-semibold cursor-pointer"> Click to resend</a></p>
      </div>
    </div>
  );
};

export default Signed_up;
