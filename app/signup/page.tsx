import React from "react";

const page = () => {
  return (
    <div>
      <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-between">
          <div
            className="bg-black w-1/2 h-screen px-52 py-48 text-white font-extrabold text-2xl"
            style={{ height: "100%" }}
          >
            <p>there are worse things</p>
            <p>than being alone</p>
            <p>but it often takes</p>
            <p>decades to realize this</p>
            <p>and most often when you do</p>
            <p>it's too late</p>
            <p>and there's nothing worse</p>
            <p>than too late</p>
            <p>
              <i>~ Charles Bukowski</i>
            </p>
          </div>
          <div className="px-64 w-1/2 h-screen py-56 ">
            <a
              href="#"
              className="block w-96 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 "
            >
              <div>
                <div className="px-10 text-center">
                  <div className="text-3xl font-extrabold">Sign in</div>
                </div>
                <div className="pt-2">
                  <LabelledInput
                    label="Username"
                    placeholder="Enter username"
                  />
                  <LabelledInput
                    label="Password"
                    type={"password"}
                    placeholder="Enter password"
                  />
                  <button
                    type="button"
                    className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                  >
                    Sign in
                  </button>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

interface LabelledInputType {
  label: string;
  placeholder: string;
  type?: string;
}

function LabelledInput({ label, placeholder, type }: LabelledInputType) {
  return (
    <div>
      <label className="block mb-2 text-sm text-black font-semibold pt-4">
        {label}
      </label>
      <input
        type={type || "text"}
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        required
      />
    </div>
  );
}

export default page;
