import React, { useState } from "react";

const Admin = () => {
    const [activeButton, setActiveButton] = useState('Flight');
    const [activeEntity, setActiveEntity] = useState('Flight')

    const switchEntity = (entity) => {
        setActiveEntity(entity);
        setActiveButton(entity === activeButton ? null : entity);
    }

  return (
    <div>
        <div className="bg-avion-blue flex h-40  max-w-full justify-center">
        <div className="flex w-full max-w-screen-lg flex-col ">
            <div className="h-1/2 w-1/2 items-center">
            <div className="mt-6 flex flex-row justify-between">
                <h1 className="text-4xl text-white ">Admin</h1>
            </div>
            <div className="font-Gupter flex mt-5">
                <button onClick={() => switchEntity('Flight')} style={{backgroundColor: activeButton === 'Flight' ? 'rgb(55, 65, 81)' : 'rgba(255, 255, 255, 0.5)'}} className="text-white m-2 p-2 w-48 rounded border border-black/50">Add Flight</button>
                <button onClick={() => switchEntity('Aircraft')} style={{backgroundColor: activeButton === 'Aircraft' ? 'rgb(55, 65, 81)' : 'rgba(255, 255, 255, 0.5)'}} className="bg-white/50 text-white m-2 p-2 w-48 rounded border border-black/50">Add Aircraft</button>
                <button onClick={() => switchEntity('Passenger')} style={{backgroundColor: activeButton === 'Passenger' ? 'rgb(55, 65, 81)' : 'rgba(255, 255, 255, 0.5)'}} className="bg-white/50 text-white m-2 p-2 w-48 rounded border border-black/50">Add Passenger</button>
                </div>
            </div>
        </div>
        </div>
        <div className="font-Gupter flex justify-center">
            <div className="bg-gray-300 flex w-full max-w-screen-lg flex-col mt-6 mb-6 rounded">
            {activeEntity === 'Flight' && (
                <div className="h-1/2 w-1/2 items-center pl-5">
                    <div className="mt-6 flex flex-row justify-between">
                        <h1 className="text-4xl text-gray-700">Add Flight</h1>
                        </div>
                        <div className="p-5">
                            <div className="flex p-2">
                                <h2 className="w-2/5">Scheduled:</h2>
                                <input></input>
                            </div>
                            <div className="flex p-2">
                                <h2 className="w-2/5">Flight Number:</h2>
                                <input></input>
                            </div>
                            <div className="flex p-2">
                                <h2 className="w-2/5">Airline:</h2>
                                <input></input>
                            </div>
                            <div className="flex p-2">
                                <h2 className="w-2/5">To:</h2>
                                <input></input>
                            </div>
                            <div className="flex p-2">
                                <h2 className="w-2/5">From:</h2>
                                <input></input>
                            </div>
                            <div className="flex p-2">
                                <h2 className="w-2/5">Status:</h2>
                                <input></input>
                            </div>
                            <div className="flex p-2">
                                <h2 className="w-2/5">Terminal:</h2>
                                <input></input>
                            </div>
                            <div className="flex p-2">
                                <h2 className="w-2/5">Gate:</h2>
                                <input></input>
                            </div>
                            <div className="flex p-2">
                                <h2 className="w-2/5">Check In Counter:</h2>
                                <input></input>
                            </div>
                            <div className="flex p-2">
                                <h2 className="w-2/5">Carousel:</h2>
                                <input></input>
                            </div>
                        </div>
                        <div><button className="bg-avion-blue text-white m-2 mb-8 p-2 w-48 rounded border border-black/50">Submit</button></div>
                    </div>
            )}
            {activeEntity === 'Aircraft' && (
                    <div className="h-1/2 w-1/2 items-center pl-5">
                        <div className="mt-6 flex flex-row justify-between">
                            <h1 className="text-4xl text-gray-700">Add Aircraft</h1>
                            </div>
                            <div className="p-5">
                                <div className="flex p-2">
                                    <h2 className="w-2/5">Type:</h2>
                                    <input></input>
                                </div>
                                <div className="flex p-2">
                                    <h2 className="w-2/5">Tail Number:</h2>
                                    <input></input>
                                </div>
                                <div className="flex p-2">
                                    <h2 className="w-2/5">Airline Name:</h2>
                                    <input></input>
                                </div>
                                <div className="flex p-2">
                                    <h2 className="w-2/5">Number of Passengers:</h2>
                                    <input></input>
                                </div>
                            </div>
                            <div><button className="bg-avion-blue text-white m-2 mb-8 p-2 w-48 rounded border border-black/50">Submit</button></div>
                        </div>
            )}
            {activeEntity === 'Passenger' && (
                    <div className="h-1/2 w-1/2 items-center pl-5">
                        <div className="mt-6 flex flex-row justify-between">
                            <h1 className="text-4xl text-gray-700">Add Passenger</h1>
                            </div>
                            <div className="p-5">
                                <div className="flex p-2">
                                    <h2 className="w-2/5">First Name:</h2>
                                    <input></input>
                                </div>
                                <div className="flex p-2">
                                    <h2 className="w-2/5">Last Name:</h2>
                                    <input></input>
                                </div>
                                <div className="flex p-2">
                                    <h2 className="w-2/5">Phone Number:</h2>
                                    <input></input>
                                </div>
                            </div>
                            <div><button className="bg-avion-blue text-white m-2 mb-8 p-2 w-48 rounded border border-black/50">Submit</button></div>
                        </div>
            )}
            </div>
        </div>
    </div>
  );
};

export default Admin;