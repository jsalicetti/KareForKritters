import React, { useState } from 'react'
import { ChevronDownIcon, MagnifyingGlassIcon, HeartIcon } from '@heroicons/react/24/solid'
import '../App.css'

const MeetYourNewBestfriend = () => {
  // Replace the pets array with real data including image URLs
  const pets = [
    {
      image: "/images/dog1.jpg",
      name: "Buddy",
      description: "Friendly Golden Retriever looking for an active family."
    },
    {
      image: "/images/cat1.jpg",
      name: "Whiskers",
      description: "Playful tabby cat who loves to cuddle."
    },
    {
      image: "/images/dog1.jpg",
      name: "Buddy",
      description: "Friendly Golden Retriever looking for an active family."
    },
    {
      image: "/images/cat1.jpg",
      name: "Whiskers",
      description: "Playful tabby cat who loves to cuddle."
    },
    {
      image: "/images/cat1.jpg",
      name: "Whiskers",
      description: "Playful tabby cat who loves to cuddle."
    },
    {
      image: "/images/cat1.jpg",
      name: "Whiskers",
      description: "Playful tabby cat who loves to cuddle."
    },
    {
      image: "/images/cat1.jpg",
      name: "Whiskers",
      description: "Playful tabby cat who loves to cuddle."
    },
    {
      image: "/images/cat1.jpg",
      name: "Whiskers",
      description: "Playful tabby cat who loves to cuddle."
    },
  ];

  const navItems = [
    { 
      name: 'ADOPT', 
      items: [
        { name: 'View All Pets', link: '/pets' },
        { name: 'Adoption Process', link: '/adoption-process' },
        { name: 'Adoption Application', link: '/adoption-application' }
      ]
    },
    { 
      name: 'WHO WE ARE', 
      items: [
        { name: 'Success Stories', link: '/success' },
        { name: 'Locations', link: '/location' }
      ]
    },
    { 
      name: 'RESOURCES', 
      items: [
        { name: 'Pet Training', link: '/resources#pet-training' },
        { name: 'Health Tips', link: '/resources#health-tips' },
        { name: 'Pet Insurance', link: '/resources#pet-insurance' }
      ]
    }
  ]

  const FlipCard = ({ pet }) => {
    const [isFlipped, setIsFlipped] = useState(false)

    const handleClick = () => {
      setIsFlipped(!isFlipped)
    }

    const handleAdoptClick = (e) => {
      e.stopPropagation()
      // Add adoption logic here
      console.log(`Adopting ${pet.name}`)
    }

    return (
      <div 
        className="flip-card w-full h-[420px] cursor-pointer perspective"
        onClick={handleClick}
      >
        <div className={`flip-card-inner w-full h-full relative transition-transform duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
          <div className="flip-card-front w-full h-full absolute backface-hidden overflow-hidden rounded-lg">
            <img 
              src={pet.image} 
              alt={pet.name} 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <h3 className="text-xl font-semibold text-white">{pet.name}</h3>
            </div>
          </div>
          <div className="flip-card-back w-full h-full absolute backface-hidden rotate-y-180 bg-white rounded-lg p-4 overflow-y-auto flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2">{pet.name}</h3>
              <p className="text-gray-700">{pet.description}</p>
            </div>
            <button 
              onClick={handleAdoptClick}
              className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition duration-300"
            >
              Adopt me!
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-400 to-blue-200 text-gray-800 font-sans">
      <header className="bg-gradient-to-r from-orange-600 to-yellow-600 text-white py-4 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="/" className="flex items-center text-2xl font-bold">
            <HeartIcon className="w-8 h-8 mr-2" />
            <span>KARE FOR KRITTERS</span>
          </a>
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <a href="#" className="flex items-center hover:text-orange-200 transition duration-300">
                  {item.name}
                  <ChevronDownIcon className="w-4 h-4 ml-1" />
                </a>
                <ul className="absolute hidden group-hover:block bg-white text-gray-800 min-w-[200px] shadow-lg rounded-md overflow-hidden">
                  {item.items.map((subItem) => (
                    <li key={subItem.name}>
                      <a href={subItem.link} className="block px-4 py-2 hover:bg-orange-100 transition duration-300">
                        {subItem.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
          <div className="flex items-center">
            
            <button className="bg-white text-orange-600 px-4 py-1 rounded-full hover:bg-orange-100 transition duration-300">LOGIN</button>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-5xl font-bold text-center mb-12">Meet your new Bestfriend!</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pets.map((pet, index) => (
            <FlipCard key={index} pet={pet} />
          ))}
        </div>
      </main>

      <section className="bg-gradient-to-r from-orange-600 to-yellow-600 text-white py-16 text-center mt-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay in touch!</h2>
          <p className="text-lg mb-8">Keep up to date with your application!</p>
          <form className="max-w-md mx-auto flex">
            <input type="email" placeholder="Email Address" className="flex-grow py-3 px-4 rounded-l-full focus:outline-none focus:ring-2 focus:ring-orange-300" />
            <button type="submit" className="bg-white text-orange-600 px-6 py-3 rounded-r-full font-semibold hover:bg-orange-100 transition duration-300">Subscribe</button>
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
            
          </div>
          <p className="text-center text-sm text-gray-400">&copy; 2023 Kare for Kritters. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default MeetYourNewBestfriend