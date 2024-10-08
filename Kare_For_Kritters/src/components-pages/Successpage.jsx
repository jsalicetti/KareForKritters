import React, { useState } from "react";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";
import "../App.css";
import NavBar from "./NavBar";

const Successpage = () => {
  const successStories = [
    {
      image: "/Images-React/Rue.jpg",
      name: "Ruebear Mcstuffins",
      age: "2 years old",
      favoriteToy: "Shoe String",
      funFact: "Will sit by the window and watch pigeons for hours",
      story:
        "Rue found her forever home with a loving family after months in the shelter. Her playful nature and adorable face quickly won over her new family, and now she enjoys cuddles, playing with her sister Bagel and laying on her back waiting for belly stratches.",
    },
    {
      image: "/Images-React/RJ.jpg",
      name: "RJ",
      age: "2 years old",
      favoriteToy: "Laser Pointer",
      funFact: "Can jump over 5 feet high",
      story:
        "RJ, a shy cat who once hid in the closet for hours, blossomed in his new home and became the family's best friend. Once timid and reserved, RJ now greets visitors at the door and loves to curl up on laps during movie nights. He is incredibly protective of his sister Rue and loves to knock over his food container in hopes to sneak a midnight snack",
    },
    {
      image: "/Images-React/Juju.jpg",
      name: "Juju",
      age: "15 years old",
      favoriteToy: "Nemo stuffed animal",
      funFact: "Enjoys toilet paper",
      story:
        "Juju, an older dog, found a second chance at happiness with a young couple. Despite his age, Juju's energy and love for life have brought joy and laughter to his new home. He's proof that senior pets have so much love to give.",
    },
    {
      image: "/Images-React/Oreo.jpg",
      name: "Oreo",
      age: "3 years old",
      favoriteToy: "Tug-of-War Rope",
      funFact: "Can run 5 miles without stopping",
      story:
        "Oreo, a rescue dog, now hops freely in his new family's garden. After overcoming physical challenges, Oreo's resilience and zest for life inspire everyone around him. He's become the neighborhood's favorite four-legged friend.",
    },
    {
      image: "/Images-React/Gordo.jpg",
      name: "Gordo",
      age: "10 years old",
      favoriteToy: "Cow Stuffed Animal & any of his other 30 toys",
      funFact: "Sighs when not given enough attention",
      story:
        "Gordo, a handsome dog, found a loving home and a spacious backyard to explore. Once confined to a small apartment, Gordo now spends his days chasing butterflies and playing fetch with his new family. His gentle and affectionate nature has made him the perfect companion for the family's young children. Gordo will remind you of the love that can be found in the most unexpected places. Truly a one of a kind dog.",
    },
    {
      image: "/Images-React/Lux.jpg",
      name: "Lux",
      age: "5 year old",
      favoriteToy: "Catnip",
      funFact:
        "Will lay right on your face in the middle of the night for cuddles",
      story:
        "Lux, a sweet little angel, inspired her new family with her resilience and affection. Despite a rough start in life, Lux's loving nature shines through. She's become an emotional support animal for her owner, proving that sometimes pets rescue us. Lux will redefine your idea of what having a furry friend is all about. Truly a one of a kind cat.",
    },
  ];

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

  const FlipCard = ({ story }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
      setIsFlipped(!isFlipped);
    };

    return (
      <div
        className="flip-card w-full h-[420px] cursor-pointer perspective" // Increased height to 420px
        onClick={handleClick}
      >
        <div
          className={`flip-card-inner w-full h-full relative transition-transform duration-500 transform-style-3d ${
            isFlipped ? "rotate-y-180" : ""
          }`}
        >
          <div className="flip-card-front w-full h-full absolute backface-hidden overflow-hidden rounded-lg">
            <img
              src={story.image}
              alt={story.name}
              className="w-full h-[120%] object-cover object-center" // Increased height to 120% and added object-center
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <h3 className="text-xl font-semibold text-white">{story.name}</h3>
            </div>
          </div>
          <div className="flip-card-back w-full h-full absolute backface-hidden rotate-y-180 bg-white rounded-lg p-4 overflow-y-auto">
            <h3 className="text-xl font-semibold mb-2">{story.name}</h3>
            <div className="mb-4">
              <p className="text-sm text-gray-600">
                <strong>Age:</strong> {story.age}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Favorite Toy:</strong> {story.favoriteToy}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Fun Fact:</strong> {story.funFact}
              </p>
            </div>
            <p className="text-gray-700">{story.story}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-400 to-blue-200 text-gray-800 font-sans">
      <NavBar />

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-5xl font-bold text-center mb-4">Success Stories</h1>
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Our top stories of 2024
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <FlipCard key={index} story={story} />
          ))}
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

export default Successpage;
