import axios from "axios";
import React, { useState } from "react";

const Admin = () => {
  const [activeButton, setActiveButton] = useState("Flight");
  const [activeEntity, setActiveEntity] = useState("Flight");
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone_number: "",
  });

  const switchEntity = (entity) => {
    setActiveEntity(entity);
    setActiveButton(entity === activeButton ? null : entity);
  };
  const putPassengerData = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/passenger",
        JSON.stringify(data),
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      console.log("Server response:", response);

      if (response.status === 201) {
        console.log("Passenger data added successfully");
      } else {
        throw new Error("Failed to add passenger data");
      }
    } catch (error) {
      console.error("Error adding passenger data:", error.message);
    }
  };

  const handlePassengerSubmit = () => {
    console.log("Submit button clicked");
    const passengerData = {
      first_name: formData.first_name,
      last_name: formData.last_name,
      phone_number: formData.phone_number,
    };

    console.log("Passenger data to be submitted:", passengerData);
    putPassengerData(passengerData);
  };

  return (
    <div>
      <div className="flex h-40 max-w-full  justify-center bg-avion-blue">
        <div className="flex w-full max-w-screen-lg flex-col ">
          <div className="h-1/2 w-1/2 items-center">
            <div className="mt-6 flex flex-row justify-between">
              <h1 className="text-4xl text-white ">Admin</h1>
            </div>
            <div className="mt-5 flex font-Gupter">
              <button
                onClick={() => switchEntity("Flight")}
                style={{
                  backgroundColor:
                    activeButton === "Flight"
                      ? "rgb(55, 65, 81)"
                      : "rgba(255, 255, 255, 0.5)",
                }}
                className="m-2 w-48 rounded border border-black/50 p-2 text-white"
              >
                Add Flight
              </button>
              <button
                onClick={() => switchEntity("Aircraft")}
                style={{
                  backgroundColor:
                    activeButton === "Aircraft"
                      ? "rgb(55, 65, 81)"
                      : "rgba(255, 255, 255, 0.5)",
                }}
                className="m-2 w-48 rounded border border-black/50 bg-white/50 p-2 text-white"
              >
                Add Aircraft
              </button>
              <button
                onClick={() => switchEntity("Passenger")}
                style={{
                  backgroundColor:
                    activeButton === "Passenger"
                      ? "rgb(55, 65, 81)"
                      : "rgba(255, 255, 255, 0.5)",
                }}
                className="m-2 w-48 rounded border border-black/50 bg-white/50 p-2 text-white"
              >
                Add Passenger
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center font-Gupter">
        <div className="mb-6 mt-6 flex w-full max-w-screen-lg flex-col rounded bg-gray-300">
          {activeEntity === "Flight" && (
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
              <div>
                <button className="m-2 mb-8 w-48 rounded border border-black/50 bg-avion-blue p-2 text-white">
                  Submit
                </button>
              </div>
            </div>
          )}
          {activeEntity === "Passenger" && (
            <div className="h-1/2 w-1/2 items-center pl-5">
              <div className="mt-6 flex flex-row justify-between">
                <h1 className="text-4xl text-gray-700">Add Passenger</h1>
              </div>
              <div className="p-5">
                <div className="flex p-2">
                  <h2 className="w-2/5">First Name:</h2>
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    value={formData.first_name}
                    onChange={(e) =>
                      setFormData((prevData) => ({
                        ...prevData,
                        first_name: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className="flex p-2">
                  <h2 className="w-2/5">Last Name:</h2>
                  <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    value={formData.last_name}
                    onChange={(e) =>
                      setFormData((prevData) => ({
                        ...prevData,
                        last_name: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className="flex p-2">
                  <h2 className="w-2/5">Phone Number:</h2>
                  <input
                    type="text"
                    id="phone_number"
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={(e) =>
                      setFormData((prevData) => ({
                        ...prevData,
                        phone_number: e.target.value,
                      }))
                    }
                  />
                </div>
              </div>
              <div>
                <button
                  onClick={handlePassengerSubmit}
                  className="m-2 mb-8 w-48 rounded border border-black/50 bg-avion-blue p-2 text-white"
                >
                  Submit
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
