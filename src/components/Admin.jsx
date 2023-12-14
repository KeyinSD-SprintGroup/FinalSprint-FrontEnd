import React from "react";

const Admin = () => {

  return (
    <div>
        <div className="bg-avion-blue flex h-40  max-w-full justify-center">
        <div className="flex w-full max-w-screen-lg flex-col ">
            <div className="h-1/2 w-1/2 items-center">
            <div className="mt-6 flex flex-row justify-between">
                <h1 className="text-4xl text-white ">Admin</h1>
            </div>
            <div className="font-Gupter flex">
                <button className="bg-gray-700 text-white m-2 p-2 w-48 rounded border border-black/50">Add Flight</button>
                <button className="bg-white/50 text-white m-2 p-2 w-48 rounded border border-black/50">Add Aircraft</button>
                <button className="bg-white/50 text-white m-2 p-2 w-48 rounded border border-black/50">Add Passenger</button>
                </div>
            </div>
        </div>
        </div>
        {/* <div className="font-Gupter flex justify-center">
        <div className="bg-gray-300 flex w-full max-w-screen-lg flex-col mt-6 mb-6 rounded">
            <div className="h-1/2 w-1/2 items-center pl-5">
                <div className="mt-6 flex flex-row justify-between">
                    <h1 className="text-4xl text-gray-700">Add Flight</h1>
                    </div>
                    <div className="p-5">
                        <div className="flex p-2">
                            <h2 className="mr-16">Scheduled:</h2>
                            <input></input>
                        </div>
                        <div className="flex p-2">
                            <h2 className="mr-8">Flight Number:</h2>
                            <input></input>
                        </div>
                        <div className="flex p-2">
                            <h2 className="mr-20">Airline:</h2>
                            <input className="ml-2"></input>
                        </div>
                        <div className="flex p-2">
                            <h2 className="mr-28">To:</h2>
                            <input className="ml-2"></input>
                        </div>
                        <div className="flex p-2">
                            <h2 className="mr-24">From:</h2>
                            <input className="ml-1"></input>
                        </div>
                        <div className="flex p-2">
                            <h2 className="mr-20">Status:</h2>
                            <input className="ml-3.5"></input>
                        </div>
                        <div className="flex p-2">
                            <h2 className="mr-16">Terminal:</h2>
                            <input className="ml-3"></input>
                        </div>
                        <div className="flex p-2">
                            <h2 className="mr-24">Gate:</h2>
                            <input className="ml-3"></input>
                        </div>
                        <div className="flex p-2">
                            <h2 className="mr-4">Check In Counter:</h2>
                            <input className="ml-1"></input>
                        </div>
                        <div className="flex p-2">
                            <h2 className="mr-20">Carousel:</h2>
                            <input></input>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
        {/* <div className="font-Gupter flex justify-center">
        <div className="bg-gray-300 flex w-full max-w-screen-lg flex-col mt-6 mb-6 rounded">
            <div className="h-1/2 w-1/2 items-center pl-5">
                <div className="mt-6 flex flex-row justify-between">
                    <h1 className="text-4xl text-gray-700">Add Aircraft</h1>
                    </div>
                    <div className="p-5">
                        <div className="flex p-2">
                            <h2 className="mr-28">Type:</h2>
                            <input className="ml-3"></input>
                        </div>
                        <div className="flex p-2">
                            <h2 className="mr-16">Tail Number:</h2>
                            <input className="ml-2"></input>
                        </div>
                        <div className="flex p-2">
                            <h2 className="mr-16">Airline Name:</h2>
                            <input className="ml-1"></input>
                        </div>
                        <div className="flex p-2">
                            <h2 className="mr-2">Number of Passengers:</h2>
                            <input></input>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
        <div className="font-Gupter flex justify-center">
        <div className="bg-gray-300 flex w-full max-w-screen-lg flex-col mt-6 mb-6 rounded">
            <div className="h-1/2 w-1/2 items-center pl-5">
                <div className="mt-6 flex flex-row justify-between">
                    <h1 className="text-4xl text-gray-700">Add Passenger</h1>
                    </div>
                    <div className="p-5">
                        <div className="flex p-2">
                            <h2 className="mr-10">First Name:</h2>
                            <input className=""></input>
                        </div>
                        <div className="flex p-2">
                            <h2 className="mr-10">Last Name:</h2>
                            <input className="ml-1"></input>
                        </div>
                        <div className="flex p-2">
                            <h2 className="mr-4">Phone Number:</h2>
                            <input></input>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
  );
};

export default Admin;