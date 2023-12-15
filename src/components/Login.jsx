import React from "react";

const Login = () => {
  return (
    <div>
      {/* <div className="flex h-40 max-w-full justify-center bg-avion-blue">
        <div className="flex w-full max-w-screen-lg flex-col">
          <div className="h-1/2 w-1/2 items-center">
            <div className="mt-6 flex flex-row justify-between">
              <h1 className="text-4xl text-white">Admin Login</h1>
            </div>
          </div>
        </div>
      </div> */}

      <div className="flex justify-center font-Gupter">
        <div className="mb-6 mt-6 flex w-full max-w-screen-lg flex-col rounded bg-gray-300">
          <div className="h-1/2 w-1/2 items-center pl-5">
            <div className="mt-6 flex flex-row justify-between">
              <h1 className="text-4xl text-gray-700">Admin Login</h1>
            </div>
            <div className="p-5">
              <div className="flex p-2">
                <h2 className="w-2/5">Username:</h2>
                <input></input>
              </div>
              <div className="flex p-2">
                <h2 className="w-2/5">Password:</h2>
                <input type="password"></input>
              </div>
            </div>
            <div>
              <button className="m-2 mb-8 w-48 rounded border border-black/50 bg-avion-blue p-2 text-white">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
