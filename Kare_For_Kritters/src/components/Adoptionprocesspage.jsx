import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDownIcon, MagnifyingGlassIcon, HeartIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

const Adoptionprocesspage = () => {
  const [openStep, setOpenStep] = useState(null)

  const toggleStep = (stepNumber) => {
    setOpenStep(openStep === stepNumber ? null : stepNumber)
  }

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
            <button className="bg-white text-orange-600 px-4 py-1 rounded-full hover:bg-orange-100 transition duration-300">LOGIN</button>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">ADOPTION PROCESS</h1>
        
        <section className="flex flex-col md:flex-row items-center justify-between mb-16">
          <div className="md:w-1/2 mb-8 md:mb-0">
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Welcome to our adoption process!
          </p>
          <p className="text-base md:text-lg mb-6">
            We're excited to help you find your perfect furry friend. Our process is <br className="hidden md:inline" />
            designed to ensure the best match between pets and their new families.
          </p>
          
            <Link to="/pets" className="inline-block">
              <button className="bg-orange-600 text-white px-6 py-3 rounded-full hover:bg-orange-700 transition duration-300 transform hover:scale-105">View Adoptable Pets</button>
            </Link>
          </div>
          <div className="md:w-1/2">
            <img src="/Images-React/adoption-process.jpg" alt="Adoption Process" className="rounded-lg shadow-xl w-full h-auto" />
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6">Eligibility Requirements</h2>
          <p className="mb-4">To adopt from us, you must meet the following criteria:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Be at least 18 years old</li>
            <li>Provide a valid ID</li>
            <li>Show proof of residence</li>
            <li>If renting, provide landlord's consent</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6">Adoption Fees</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-orange-100">
                  <th className="px-4 py-2 text-left">Pet Type</th>
                  <th className="px-4 py-2 text-left">Fee</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-4 py-2">Dogs (6 months and older)</td>
                  <td className="px-4 py-2">$250</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">Puppies (under 6 months)</td>
                  <td className="px-4 py-2">$350</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">Cats (6 months and older)</td>
                  <td className="px-4 py-2">$100</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Kittens (under 6 months)</td>
                  <td className="px-4 py-2">$150</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6">Adoption Steps</h2>
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className="mb-4">
              <button
                className="flex items-center justify-between w-full p-4 bg-orange-100 rounded-lg focus:outline-none"
                onClick={() => toggleStep(step)}
              >
                <h3 className="text-xl font-semibold">Step {step}: {getStepTitle(step)}</h3>
                <ChevronRightIcon className={`w-6 h-6 transition-transform duration-300 ${openStep === step ? 'transform rotate-90' : ''}`} />
              </button>
              {openStep === step && (
                <div className="p-4 bg-orange-50 rounded-b-lg">
                  <p>{getStepContent(step)}</p>
                </div>
              )}
            </div>
          ))}
        </section>

        <section className="flex flex-col md:flex-row justify-between items-center mb-16">
          <div className="md:w-[48%] mb-8 md:mb-0">
            <img src="/Images-React/application-image.jpg" alt="Adoption Image 1" className="rounded-lg shadow-xl w-full h-auto" />
          </div>
          <div className="md:w-[48%]">
            <img src="/Images-React/application-image2.jpg?height=400&width=600" alt="Adoption Image 2" className="rounded-lg shadow-xl w-full h-auto" />
          </div>
        </section>

        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8">READY TO ADOPT?</h2>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <Link to="/pets" className="inline-block">
              <button className="bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-700 transition duration-300 transform hover:scale-105">
                View Adoptable Pets
              </button>
            </Link>
            <Link to="/adoption-application" className="inline-block">
              <button className="bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-700 transition duration-300 transform hover:scale-105">
                Start Application
              </button>
            </Link>
          </div>
        </section>
      </main>

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

const getStepTitle = (step) => {
  const titles = [
    "Browse Available Pets",
    "Submit an Application",
    "Meet Your Potential Pet",
    "Finalize the Adoption"
  ]
  return titles[step - 1]
}

const getStepContent = (step) => {
  const contents = [
    "Browse our selection of adorable pets waiting for their forever homes.",
    "Fill out our comprehensive adoption application. This helps us understand your lifestyle and preferences to ensure a good fit for both you and the pet.",
    "Schedule a meet-and-greet with your potential new family member. This is a great opportunity to interact and see if it's a good match.",
    "Once you've found your perfect pet, we'll guide you through the final steps of the adoption process, including paperwork and any necessary home visits."
  ]
  return contents[step - 1]
}

export default Adoptionprocesspage