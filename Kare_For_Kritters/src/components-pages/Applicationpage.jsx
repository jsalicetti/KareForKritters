import React from "react";
import { useState } from "react";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";

const AdoptionApplication = () => {
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [status, setStatus] = useState(null);

  const states = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Get form data
    const formData = new FormData(event.target);
    const applicationData = Object.fromEntries(formData);
    console.log(applicationData);
    try {
      const response = await fetch("http://localhost:8081/sendapplication", {
        method: "POST",
        body: JSON.stringify(applicationData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        setStatus(true);
      }

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Network response was not ok");
      }

      setError(null);
    } catch (error) {
      setStatus(false);
      console.error("Error during application submission:", error);
      setError(
        error.message || "Application submission failed. Please try again."
      );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-400 to-blue-200 text-gray-800 font-sans">
      <NavBar />

      <main className="flex-grow container mx-auto px-4 py-8">
        {status ? (
          <div
            id="toast-success"
            className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
            role="alert"
          >
            <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="sr-only">Check icon</span>
            </div>
            <div className="ms-3 text-sm font-normal">
              Application Submitted Successfully
            </div>
            <button
              type="button"
              className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
              data-dismiss-target="#toast-success"
              aria-label="Close"
            >
              <span className="sr-only">Close</span>
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
        ) : null}
        <h1 className="text-4xl font-bold text-center mb-8">
          Adoption Application
        </h1>
        <form
          className="bg-white shadow-md rounded-lg p-8 mb-8"
          onSubmit={handleSubmit}
        >
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Personal Information
            </h2>
            <div>
              <label htmlFor="fullName" className="block mb-1 font-medium">
                Full Name
              </label>
              <input
                type="text"
                id="pet-care"
                name="fullName"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 font-medium">
                Email
              </label>
              <input
                type="text"
                id="pet-care"
                name="email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Questionnaire</h2>
            <br></br>
            <div className="space-y-4">
              <div>
                <label className="block mb-1 font-medium">
                  What type of pet are you interested in adopting?
                </label>
                <div className="flex space-x-4">
                  {["Dog", "Cat"].map((type) => (
                    <label key={type} className="flex items-center">
                      <input
                        type="checkbox"
                        name="inquireAdopt"
                        value={type.toLowerCase()}
                        className="form-checkbox h-5 w-5 text-orange-600 rounded-none"
                      />
                      <span className="ml-2">{type}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block mb-1 font-medium">
                  Whats the sex of pet are you interested in adopting?
                </label>
                <div className="flex space-x-4">
                  {["Male", "Female"].map((type) => (
                    <label key={type} className="flex items-center">
                      <input
                        type="checkbox"
                        name="petGender"
                        value={type.toLowerCase()}
                        className="form-checkbox h-5 w-5 text-orange-600 rounded-none"
                      />
                      <span className="ml-2">{type}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block mb-1 font-medium">
                  What age group interested in adopting?
                </label>
                <div className="flex space-x-4">
                  {["Puppy/Kitten", "Young", "Adult", "Senior"].map((type) => (
                    <label key={type} className="flex items-center">
                      <input
                        type="checkbox"
                        name="petAge"
                        value={type.toLowerCase()}
                        className="form-checkbox h-5 w-5 text-orange-600 rounded-none"
                      />
                      <span className="ml-2">{type}</span>
                    </label>
                  ))}
                </div>
              </div>
              <br></br>
              <div>
                <label className="block mb-1 font-medium">
                  Have you adopted from us before?
                </label>
                <div className="flex space-x-4">
                  {["Yes", "No"].map((option) => (
                    <label key={option} className="flex items-center">
                      <input
                        type="checkbox"
                        name="adoptedBefore"
                        value={option.toLowerCase()}
                        className="form-checkbox h-5 w-5 text-orange-600 rounded-none"
                      />
                      <span className="ml-2">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
              <br></br>
              <div>
                <label
                  htmlFor="living-situation"
                  className="block mb-1 font-medium"
                >
                  What is your living situation?
                </label>
                <select
                  id="living-situation"
                  name="livingSituation"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="">Select an option</option>
                  <option value="house">House</option>
                  <option value="apartment">Apartment</option>
                  <option value="condo">Condo</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <br></br>
              <div>
                <label className="block mb-1 font-medium">
                  Do you rent or own?
                </label>
                <div className="flex space-x-4">
                  {["Rent", "Own"].map((option) => (
                    <label key={option} className="flex items-center">
                      <input
                        type="checkbox"
                        name="rentOwn"
                        value={option.toLowerCase()}
                        className="form-checkbox h-5 w-5 text-orange-600 rounded-none"
                      />
                      <span className="ml-2">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
              <br></br>
              <div>
                <label className="block mb-1 font-medium">
                  Do you have a fenced yard?
                </label>
                <div className="flex space-x-4">
                  {["Yes", "No", "N/A"].map((option) => (
                    <label key={option} className="flex items-center">
                      <input
                        type="checkbox"
                        name="fencedYard"
                        value={option.toLowerCase()}
                        className="form-checkbox h-5 w-5 text-orange-600 rounded-none"
                      />
                      <span className="ml-2">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
              <br></br>
              <div>
                <label className="block mb-1 font-medium">
                  Do you live alone?
                </label>
                <div className="flex space-x-4">
                  {["Yes", "No"].map((option) => (
                    <label key={option} className="flex items-center">
                      <input
                        type="checkbox"
                        name="liveAlone"
                        value={option.toLowerCase()}
                        className="form-checkbox h-5 w-5 text-orange-600 rounded-none"
                      />
                      <span className="ml-2">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
              <br></br>
              <div>
                <label className="block mb-1 font-medium">
                  Do you live with children?
                </label>
                <div className="flex space-x-4">
                  {["Yes", "No"].map((option) => (
                    <label key={option} className="flex items-center">
                      <input
                        type="checkbox"
                        name="liveChildren"
                        value={option.toLowerCase()}
                        className="form-checkbox h-5 w-5 text-orange-600 rounded-none"
                      />
                      <span className="ml-2">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
              <br></br>
              <div>
                <label className="block mb-1 font-medium">
                  Does anyone in your household have allergies?
                </label>
                <div className="flex space-x-4">
                  {["Yes", "No"].map((option) => (
                    <label key={option} className="flex items-center">
                      <input
                        type="checkbox"
                        name="homeAllergies"
                        value={option.toLowerCase()}
                        className="form-checkbox h-5 w-5 text-orange-600 rounded-none"
                      />
                      <span className="ml-2">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
              <br></br>
              <div>
                <label className="block mb-1 font-medium">
                  How will you exercise your pet?
                </label>
                <div className="flex space-x-4">
                  {["In the backyard", "Walks", "Indoor Playtime"].map(
                    (option) => (
                      <label key={option} className="flex items-center">
                        <input
                          type="checkbox"
                          name="exercisePet"
                          value={option.toLowerCase()}
                          className="form-checkbox h-5 w-5 text-orange-600 rounded-none"
                        />
                        <span className="ml-2">{option}</span>
                      </label>
                    )
                  )}
                </div>
              </div>
              <br></br>
              <div>
                <label className="block mb-1 font-medium">
                  What are your training plans for your pet?
                </label>
                <div className="flex space-x-4">
                  {[
                    "Train myself",
                    "Hire a trainer",
                    "No training",
                    "Other",
                  ].map((option) => (
                    <label key={option} className="flex items-center">
                      <input
                        type="checkbox"
                        name="trainingPet"
                        value={option.toLowerCase()}
                        className="form-checkbox h-5 w-5 text-orange-600 rounded-none"
                      />
                      <span className="ml-2">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
              <br></br>
              <div>
                <label
                  htmlFor="current-pets"
                  className="block mb-1 font-medium"
                >
                  How many pets are currently in your household?
                </label>
                <input
                  type="number"
                  id="current-pets"
                  name="petsAtHome"
                  min="0"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus: ring-2 focus:ring-orange-500"
                />
              </div>
              <br></br>
              <div>
                <label htmlFor="pet-care" className="block mb-1 font-medium">
                  Who will be responsible for feeding, grooming, and generally
                  caring for your pet?
                </label>
                <input
                  type="text"
                  id="pet-care"
                  name="carePet"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <br></br>
              <div>
                <label htmlFor="alone-time" className="block mb-1 font-medium">
                  How many hours will the pet be left alone during the day?
                </label>
                <input
                  type="number"
                  id="alone-time"
                  name="hoursHome"
                  min="0"
                  max="24"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>
          </section>

          <div className="text-center">
            <button
              type="submit"
              className="bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-700 transition duration-300 transform hover:scale-105"
            >
              Submit Application
            </button>
            <br></br>
            <br></br>
            <a><b>Please check the top of this page to see if your application was submitted!</b> </a>
            <br></br>
            <h1>PLEASE ALLOW 3-4 BUSINESS DAYS FOR ONE OF OUR REPRESENTATIVES TO REACH OUT TO YOU REGARDING YOUR APPLICATION</h1>
          </div>
        </form>

        <div className="mt-8 flex justify-center">
          <img
            src="/Images-React/application1.webp?height=300&width=600"
            alt="Adoption process illustration"
            className="rounded-lg shadow-md max-w-full h-auto"
          />
        </div>
      </main>

      <section className="bg-gradient-to-r from-orange-600 to-yellow-600 text-white py-16 text-center mt-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay in touch!
          </h2>
          <p className="text-lg mb-8">
            Keep up to date with your application!
          </p>
          <form className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-grow py-3 px-4 rounded-l-full focus:outline-none focus:ring-2 focus:ring-orange-300"
            />
            <button
              type="submit"
              className="bg-white text-orange-600 px-6 py-3 rounded-r-full font-semibold hover:bg-orange-100 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center mb-4 md:mb-0">
              <HeartIcon className="w-8 h-8 mr-2 text-orange-400" />
              <span className="text-2xl font-bold">Kare for Kritters</span>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-6">
              
            </div>
          </div>
          <p className="text-center text-sm text-gray-400">
            &copy; 2023 Kare for Kritters. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AdoptionApplication;
