import React, { useState, useEffect } from "react";
import "../App.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import ApplicationCard from "./ApplicationCard";

const Applications = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApps = async () => {
      try {
        const response = await fetch("http://localhost:8081/application/all");
        const data = await response.json();
        console.log(data);
        setApplications(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchApps();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-400 to-blue-200 text-gray-800 font-sans">
      <NavBar />

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-5xl font-bold text-center mb-12">Applications</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applications ? (
            applications.map((application, index) => (
              <ApplicationCard key={index} application={application} />
            ))
          ) : (
            <div>No Applications to show</div>
          )}
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

      <Footer />
    </div>
  );
};

export default Applications;
