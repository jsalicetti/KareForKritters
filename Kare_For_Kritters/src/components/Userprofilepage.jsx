import React, { useState } from "react";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";

const UserProfilePage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    fullName: "",
    pronouns: "",
    phoneNumber: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
  });

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(`http://localhost:8081/profile`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }

    console.log("Updated user data:", userData);
    // alert("Profile updated successfully!");
  };

  const navItems = [
    {
      name: "ADOPT",
      items: [
        { name: "View All Pets", link: "/pets" },
        { name: "Adoption Process", link: "/adoption-process" },
        { name: "Adoption Application", link: "/adoption-application" },
      ],
    },
    {
      name: "WHO WE ARE",
      items: [
        { name: "About Us", link: "/about" },
        { name: "Success Stories", link: "/success" },
        { name: "Locations", link: "/location" },
      ],
    },
    {
      name: "GET INVOLVED",
      items: [{ name: "Submenu Item 1", link: "/get-involved" }],
    },
    {
      name: "RESOURCES",
      items: [
        { name: "Pet Training", link: "/resources#pet-training" },
        { name: "Health Tips", link: "/resources#health-tips" },
        { name: "Pet Insurance", link: "/resources#pet-insurance" },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-400 to-blue-200 text-gray-800 font-sans">
      <NavBar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
              User Profile
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={userData.fullName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="pronouns"
                  className="block text-sm font-medium text-gray-700"
                >
                  Pronouns
                </label>
                <select
                  id="pronouns"
                  name="pronouns"
                  value={userData.pronouns}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                  required
                >
                  <option value="">Select pronouns</option>
                  <option value="he/him">he/him</option>
                  <option value="she/her">she/her</option>
                  <option value="they/them">they/them</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={userData.phoneNumber}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={userData.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={userData.address}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700"
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={userData.city}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="state"
                  className="block text-sm font-medium text-gray-700"
                >
                  State
                </label>
                <select
                  id="state"
                  name="state"
                  value={userData.state}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                  required
                >
                  <option value="">Select a state</option>
                  {states.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="zipCode"
                  className="block text-sm font-medium text-gray-700"
                >
                  Zip Code
                </label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={userData.zipCode}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                >
                  Update Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      <section className="bg-gradient-to-r from-orange-600 to-yellow-600 text-white py-16 text-center">
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
              <a
                href="#"
                className="hover:text-orange-400 transition duration-300"
              >
                About Us
              </a>
              <a
                href="#"
                className="hover:text-orange-400 transition duration-300"
              >
                Locations
              </a>
              <a
                href="#"
                className="hover:text-orange-400 transition duration-300"
              >
                Application Form
              </a>
              <a
                href="#"
                className="hover:text-orange-400 transition duration-300"
              >
                Terms of Service
              </a>
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

export default UserProfilePage;
