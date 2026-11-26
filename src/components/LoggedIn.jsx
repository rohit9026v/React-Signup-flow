import React from "react";

const LoggedIn = () => {
  return (
    <div className="flex flex-col w-screen h-full">
      <div className="flex justify-between items-center border-b text-white border-[#2A275A] px-4 py-2 bg-[#131136]">
        <div className="flex gap-2 items-center">
          <img
            className="border rounded-xl p-1 bg-gray-800 h-7"
            src="./src/assets/icons/thunder.png"
            alt="logo"
          />
          <h3 className="font-bold text-xl">NovaDesk</h3>
        </div>
        <div className="flex gap-4">
          <div className="w-10 h-10 bg-[#E0E7FF] text-[#1E1B4B] rounded-full border flex items-center justify-center overflow-hidden">
            RV
          </div>
          <button
            type="button"
            className="rounded-xl border text-[#FFFFFF] border-white py-0.5 px-3"
          >
            {" "}
            Log out
          </button>
        </div>
      </div>

      <div className="flex flex-col bg-[#F9FAFB] flex-1">
        <div className="h-72 overflow-hidden object-cover">
          <img src="./src/assets/icons/bg.png" alt="" />
        </div>

        <div className="flex flex-col items-center -mt-55 z-1000 text-white gap-8">
          <div className="rounded-2xl bg-emerald-100 p-1 px-4 flex items-center justify-center gap-1">
            <img className="w-6" src="./src/assets/icons/correct.png" alt="" />
            <p className="text-emerald-700">Active Session</p>
          </div>

          <div className="flex flex-col gap-1 items-center justify-center">
            <h1 className="text-4xl font-bold">Welcome back, Rohit!</h1>
            <p className="text-[#A5B4FC] text-lg">
              You are successfully logged in to your NovaDesk workspace.
            </p>
          </div>

          <div className="flex gap-4 text-black">
            <div className="flex flex-col  rounded-2xl p-4 gap-4 border-2 border-[#E5E7EB] bg-[#FFFFFF] w-92">
              <div>
                <h2 className="text-2xl font-semibold">Account Overview</h2>
              </div>

              <div className=" flex flex-col gap-5 font-medium">
                <div className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <img className="w-6" src="./src/assets/icons/user.png" alt="" />
                    <h3>Account Name:</h3>
                  </div>
                  <div>
                    <p>Rohit</p>
                  </div>
                </div>

                <div className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <img className="w-6" src="./src/assets/icons/email.png" alt="" />
                    <h3>Email:</h3>
                  </div>
                  <div>
                    <p>rohit9026v@gmail.com</p>
                  </div>
                </div>

                <div className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <img className="w-6" src="./src/assets/icons/doc.png" alt="" />
                    <h3>Workspace Plan:</h3>
                  </div>
                  <div>
                    <p>14-Day Free Trial</p>
                  </div>
                </div>

                <div className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <img className="w-6" src="./src/assets/icons/multiuser.png" alt="" />
                    <h3>Role:</h3>
                  </div>
                  <div>
                    <p>Member</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col  rounded-2xl p-4 gap-4 border-2 border-[#E5E7EB] bg-[#FFFFFF] w-92">
              <div>
                <h2 className="text-2xl font-semibold">Session Security</h2>
              </div>

              <div className=" flex flex-col gap-3 font-medium">
                <div className="flex justify-between">
                  <div>
                    <h3>Status:</h3>
                  </div>
                  <div className="flex gap-1 item-center">
                    <p className="p-1 rounded-2xl bg-green-100 text-green-700 px-3">
                      Authenticated
                    </p>
                    <img className="h-7" src="./src/assets/icons/tick.png" alt="" />
                  </div>
                </div>

                <div className="flex justify-between">
                  <div>
                    <h3>Verification:</h3>
                  </div>
                  <div className="flex gap-1 item-center">
                    <p className="p-1 rounded-2xl bg-green-100 text-green-700 px-3">
                      Email Verified
                    </p>
                    <img className="h-7" src="./src/assets/icons/sheild.png" alt="" />
                  </div>
                </div>

                <div className="flex justify-between">
                  <div>
                    <h3>Login Method:</h3>
                  </div>
                  <div className="flex gap-1 item-center">
                    <p className="p-1 rounded-2xl bg-indigo-100 text-indigo-800 px-3">
                      Password
                    </p>
                    <img className="h-7" src="./src/assets/icons/lock.png" alt="" />
                  </div>
                </div>

                <div className="flex justify-between">
                  <div>
                    <h3>Session:</h3>
                  </div>
                  <div className="flex gap-1 item-center">
                    <p className="p-1 rounded-2xl bg-green-100 text-green-700 px-3">
                      Active
                    </p>
                    <img className="h-7" src="./src/assets/icons/play.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <button
              type="button"
              className="flex gap-1 items-center bg-[#5246E5] p-4 rounded-2xl text-lg cursor-pointer transition ease-in-out duration-200 hover:bg-[#4338CA] active:scale-95 font-semibold"
            >
              Log out of NovaDesk
              <img className="h-6 invert " src="./src/assets/icons/logout.png" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoggedIn;
