import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { ChevronDownIcon, MagnifyingGlassIcon, HeartIcon, PhotoIcon, InformationCircleIcon, MegaphoneIcon, XCircleIcon, } from '@heroicons/react/24/solid'

const Homepage = () => {
  const [activeTab, setActiveTab] = useState({})
  const [adoptionCount, setAdoptionCount] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleTab = (index, tab) => {
    setActiveTab(prev => ({
      ...prev,
      [index]: tab
    }))
  }
  

  const petStories = [
    { 
      name: 'Fluffington', 
      nickname: "Who doesn't have a nickname yet!", 
      image: '/Images-React/fluffington.jpg',
      info: "Fluffington, a fluffy little gentleman, was rescued after being found in a box on the side of a highway. His tiny heart must have been filled with fear and uncertainty, wondering if anyone would come for him. The joy in his wagging tail speaks volumes, a testament to the resilience of his spirit. Fluffington has traded the shadows of his past for the embrace of a family that cherishes him, reminding us all of the power of love to heal even the most fragile of souls. He's an energetic little guy with a big heart for humans. He's known for being a bit of a barker, but it's all for attention - he doesn't bite! He loves belly scratches and ripping apart his toys so he can get new ones. Now, he's living his best life in a loving home, enjoying sunny spots and gourmet dog food."
    },
    { 
      name: 'Bagel', 
      nickname: 'Otherwise known as Cream Cheese!', 
      image: '/Images-React/bagel.jpg',
      info: "Bagel, a curious little cat, was found in the West Bronx. Her new family couldn't resist her multi-colored fur and named her after their favorite breakfast treat. Little did they know, this fluffy bundle of mischief had a penchant for chaos that would keep them on their toes. Bagel has made it her personal mission to test the laws of gravity, knocking everything from delicate glass cups to unsuspecting cereal boxes off tables with the grace of a tiny demolition expert. Yet, for all her clumsy antics, she's also a certified cuddle bug, curling up with her sister Rue, purring like an engine as they share warmth and secrets. Her favorite snacks are chewy sticks and pizza, leading to moments of pure delight when she manages to snag a slice from an unsuspecting plate. With Bagel around, every day is a delightful mix of cuddles, chaos, and the occasional pizza heist!"
    },
    { 
      name: 'Kage', 
      nickname: 'Otherwise known as Ro-Meow Santos!', 
      image: '/Images-React/Kage.jpg',
      info: "Kage, a sleek black cat, was a stray living in a parking garage. He now rules his new home like a shadow king, earning his nickname from his stealthy antics. At first glance, Kage might seem aloof, a mysterious figure who prefers to observe from the shadows rather than socialize with strangers. But once he decides you're worthy of his trust, a whole new side emerges—he transforms from a solitary phantom into a purring, affectionate companion, often curling up beside his humans and demanding head rubs with an air of regal entitlement. His favorite snack is a decadent mix of turkey and egg whites, which he treats as a royal feast, and you can practically see him plotting ways to charm his way into an extra helping. Kage's favorite toy, a brightly colored cat wand, becomes his trusty sword as he performs daring leaps and stealthy ambushes, turning even the simplest playtime into an epic saga of bravery and cunning."
    },
  ]

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
        { name: 'About Us', link: '/about' },
        { name: 'Success Stories', link: '/success' },
        { name: 'Locations', link: '/location' }
      ]
    },
    { 
      name: 'GET INVOLVED', 
      items: [
        { name: 'Submenu Item 1', link: '/get-involved' }
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
            <div className="relative mr-4 hidden md:block">
              <input type="search" placeholder="Search..." className="py-1 px-3 pr-8 rounded-full bg-orange-500 text-white placeholder-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-300" />
              <MagnifyingGlassIcon className="w-4 h-4 absolute right-3 top-1/2 transform -translate-y-1/2 text-orange-200" />
            </div>
            <button className="bg-white text-orange-600 px-4 py-1 rounded-full hover:bg-orange-100 transition duration-300 hidden md:block">LOGIN</button>
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <XCircleIcon className="w-6 h-6" /> : <MegaphoneIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 bg-orange-700 p-4">
            <nav className="flex flex-col space-y-4">
              {['ADOPT', 'WHO WE ARE', 'GET INVOLVED', 'RESOURCES'].map((item) => (
                <a key={item} href="#" className="text-white hover:text-orange-200 transition duration-300">{item}</a>
              ))}
            </nav>
            <div className="mt-4">
              <input type="search" placeholder="Search..." className="w-full py-2 px-3 rounded-full bg-orange-500 text-white placeholder-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-300" />
            </div>
            <button className="mt-4 w-full bg-white text-orange-600 px-4 py-2 rounded-full hover:bg-orange-100 transition duration-300">LOGIN</button>
          </div>
        )}
      </header>

      <main>
        <section className="relative h-[600px] overflow-hidden">
          <img src="/Images-React/dogherobackground.avif?height=600&width=1920" alt="Hero Image" className="w-full h-full object-cover brightness-50" />
          <div className="absolute inset-0 flex items-center justify-center text-center text-white">
            <div className="max-w-4xl mx-auto px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Welcome to Kare for Kritters</h1>
              <p className="text-xl md:text-2xl mb-8">
                Saving one animal won't change the world, but it will change the world for that one animal.
              </p>
              <div className="flex items-center justify-center text-lg mb-8">
                <HeartIcon className="w-8 h-8 text-red-400 mr-2 animate-pulse" />
                <span className="text-2xl font-semibold">9 animals adopted this month</span>
              </div>
              <Link to="/adoption-application" className="inline-block">
                <button className="bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-700 transition duration-300 transform hover:scale-105">
                  Adopt Now
                </button>
              </Link>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4">
          <section className="flex flex-col md:flex-row justify-center gap-8 my-16">
            <div className="text-center">
              <img src="/Images-React/dogdonate.jpg" alt="Dog Donate" className="w-64 h-64 object-cover rounded-lg shadow-lg mb-4 transform hover:scale-105 transition duration-300" />
              <Link to="/pets?type=dog" className="inline-block">
                <button className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition duration-300 transform hover:scale-105">
                  Interested in Dogs?
                </button>
              </Link>
            </div>
            <br></br> <br></br> <br></br> <br></br> 
            <div className="text-center">
              <img src="/Images-React/catdonate.jpg" alt="Cat Donate" className="w-64 h-64 object-cover rounded-lg shadow-lg mb-4 transform hover:scale-105 transition duration-300" />
              <Link to="/pets?type=cat" className="inline-block">
                <button className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition duration-300 transform hover:scale-105">
                  Interested in Cats?
                </button>
              </Link>
            </div>
          </section>

          <section className="text-center my-16 bg-white py-16 rounded-lg shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-orange-600">Our Mission</h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto px-4">
              With Kare for Kritters, you are working to save the lives of cats and dogs all across New York City, giving pets a second chance at happiness and a home.
            </p>
          </section>

          <section className="my-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-orange-600">Happily Ever Afters</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {petStories.map((pet, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg transition duration-300 hover:shadow-2xl">
                  <div className="flex border-b border-gray-200">
                    <button 
                      className={`flex-1 py-2 px-4 flex items-center justify-center ${activeTab[index] !== 'info' ? 'bg-orange-100 font-semibold text-orange-600' : 'bg-white'}`}
                      onClick={() => toggleTab(index, 'image')}
                    >
                      <PhotoIcon className="w-5 h-5 mr-2" />
                      Nice to meet you!
                    </button>
                    <button 
                      className={`flex-1 py-2 px-4 flex items-center justify-center ${activeTab[index] === 'info' ? 'bg-orange-100 font-semibold text-orange-600' : 'bg-white'}`}
                      onClick={() => toggleTab(index, 'info')}
                    >
                      <InformationCircleIcon className="w-5 h-5 mr-2" />
                      My story!
                    </button>
                  </div>
                  <div className="relative h-96">
                    <div className={`absolute inset-0 transition-opacity duration-300 ${activeTab[index] === 'info' ? 'opacity-0' : 'opacity-100'}`}>
                      <img 
                        src={pet.image} 
                        alt={pet.name} 
                        className={`w-full h-full object-cover ${pet.name === 'Fluffington' ? 'object-top' : 'object-center'}`} 
                        style={pet.name === 'Fluffington' ? { objectPosition: '0 25%' } : {}}
                      />
                    </div>
                    <div className={`absolute inset-0 bg-white p-4 overflow-y-auto transition-opacity duration-300 ${activeTab[index] === 'info' ? 'opacity-100' : 'opacity-0'}`}>
                      <p>{pet.info}</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-1 text-orange-600">{pet.name}</h3>
                    <p className="text-gray-600">{pet.nickname}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="bg-gradient-to-r from-orange-600 to-yellow-600 text-white py-16 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay in touch!</h2>
            <p className="text-lg mb-8">Keep up to date with our little kritters</p>
            <form className="max-w-md mx-auto flex">
              <input type="email" placeholder="Email Address" className="flex-grow py-3 px-4 rounded-l-full focus:outline-none focus:ring-2 focus:ring-orange-300" />
              <button type="submit" className="bg-white text-orange-600 px-6 py-3 rounded-r-full font-semibold hover:bg-orange-100 transition duration-300">Subscribe</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center mb-4 md:mb-0">
              <HeartIcon className="w-8 h-8 mr-2 text-orange-400" />
              <span className="text-2xl font-bold">Kare for Kritters</span>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-6">
              <a href="#" className="hover:text-orange-400 transition duration-300">About Us</a>
              <a href="#" className="hover:text-orange-400 transition duration-300">Locations</a>
              <a href="#" className="hover:text-orange-400 transition duration-300">Application Form</a>
              <a href="#" className="hover:text-orange-400 transition duration-300">Terms of Service</a>
            </div>
          </div>
          
          <p className="text-center text-sm text-gray-400">&copy; 2023 Kare for Kritters. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Homepage