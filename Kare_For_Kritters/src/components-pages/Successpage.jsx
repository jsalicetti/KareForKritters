import React, { useState,useEffect } from "react";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";
import "../App.css";
import NavBar from "./NavBar";

const Successpage = () => {

  const [successStories,setSuccessStories] = useState ([])

useEffect(()=>{
  getpets()
},[])


  async function getpets() {

    try {
      let petinfo = await fetch ("http://localhost:8081/pets")
      let data = await petinfo.json()
      console.log(data)
      let petdata = data.filter(pet=>pet.story!==null)
      console.log(petdata)
      petdata.forEach(pet=> {
        if(pet.name == "Ruebear Mcstuffins"){
          pet.image= `/Images-React/Rue.jpg`
        }else{
          pet.image= `/Images-React/${pet.name}.jpg`
        }
      })
  
      setSuccessStories(petdata)
    } catch (error) {
      console.error(error)
    }
    
  }


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
