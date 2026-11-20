import React from "react";

const Left = () => {
  return (
    <div className="bg-linear-to-bl from-[#26215C] via-[#181A3B] to-[#0F1124]  text-white/80 font-semibold font-sans px-38 py-4 flex flex-col justify-start text-sm">
      <div className="flex items-center gap-2 mb-16">
        <img
          className="border rounded-xl p-1 bg-gray-800 h-7"
          src="./src/assets/icons/thunder.png"
          alt="logo"
        />
        <h3>NovaDesk</h3>
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4 ">
          <h1 className="text-4xl text-b text-white">Start your AI <br /> journey today</h1>
          <p>
            Join the fastest growing workspace platform. No <br />credit card required
            for the 14-day free trial.
          </p>
        </div>

        <div>
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-2">
              {" "}
              <img
                className="w-6"
                src="./src/assets/icons/correct.png"
                alt=""
              />{" "}
              Acess to all AI models
            </li>
            <li className="flex items-center gap-2">
              {" "}
              <img
                className="w-6"
                src="./src/assets/icons/correct.png"
                alt=""
              />{" "}
              Unlimited Projects
            </li>
            <li className="flex items-center gap-2">
              {" "}
              <img
                className="w-6"
                src="./src/assets/icons/correct.png"
                alt=""
              />{" "}
              Team collaboration features
            </li>
            <li className="flex items-center gap-2">
              {" "}
              <img
                className="w-6"
                src="./src/assets/icons/correct.png"
                alt=""
              />
              24/7 priority support
            </li>
          </ul>
        </div>

        <div className="flex gap-4 border-t border-olive-700 pt-6 items-center">
          <div className="flex -space-x-2">
            <img
              className="rounded-full h-9 w-9 object-cover border-2 border-blue-950 "
              src="./src/assets/icons/user1.avif"
              alt=""
            />
            <img
              className="rounded-full h-9 object-cover border-2 w-9 border-blue-950 "
              src="./src/assets/icons/user2.avif"
              alt=""
            />
            <img
              className="rounded-full h-9 object-cover border-2 w-9 border-blue-950 "
              src="./src/assets/icons/user3.jpeg"
              alt=""
            />
            <img
              className="rounded-full h-9 object-cover border-2 w-9 border-blue-950 "
              src="./src/assets/icons/user4.avif"
              alt=""
            />
          </div>

          <div>
            <div>
              <img
                className="w-28 bg-transparent"
                src="./src/assets/icons/rating.png"
                alt=""
              />
            </div>
            <div>
              <p>Loved by 10,000+ users</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Left;
