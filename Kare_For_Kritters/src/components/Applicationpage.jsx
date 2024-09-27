import React from 'react'
import { ChevronDownIcon, MagnifyingGlassIcon, HeartIcon } from '@heroicons/react/24/solid'

const AdoptionApplication = () => {
  const states = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia',
    'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland',
    'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
    'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
    'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
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
            <button className="bg-white text-orange-600 px-4 py-1 rounded-full hover:bg-orange-100 transition duration-300">LOGIN</button>
          </div>
        </div>
      </header>
    
    
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Adoption Application</h1>
        <form className="bg-white shadow-md rounded-lg p-8 mb-8">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Your Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="first-name" className="block mb-1 font-medium">First Name</label>
                <input type="text" id="first-name" name="first-name" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
              </div>
              <div>
                <label htmlFor="last-name" className="block mb-1 font-medium">Last Name</label>
                <input type="text" id="last-name" name="last-name" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 font-medium">Email</label>
                <input type="email" id="email" name="email" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-1 font-medium">Phone</label>
                <input type="tel" id="phone" name="phone" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
              </div>
            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <label htmlFor="address" className="block mb-1 font-medium">Address</label>
                <input type="text" id="address" name="address" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
              </div>
              <div>
                <label htmlFor="city" className="block mb-1 font-medium">City</label>
                <input type="text" id="city" name="city" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
              </div>
              <div>
                <label htmlFor="state" className="block mb-1 font-medium">State</label>
                <select id="state" name="state" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500">
                  <option value="">Select a state</option>
                  {states.map((state) => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="zip" className="block mb-1 font-medium">Zip</label>
                <input type="text" id="zip" name="zip" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Select the pet you are interested in adopting</h2>
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2">Species</th>
                  <th className="border border-gray-300 px-4 py-2">Breed</th>
                  <th className="border border-gray-300 px-4 py-2">Age</th>
                  <th className="border border-gray-300 px-4 py-2">Sex</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    <select name="species" className="w-full px-2 py-1 border-none focus:outline-none focus:ring-2 focus:ring-orange-500">
                      <option value="">Select Species</option>
                      <option value="dog">Dog</option>
                      <option value="cat">Cat</option>
                    </select>
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <select name="breed" className="w-full px-2 py-1 border-none focus:outline-none focus:ring-2 focus:ring-orange-500">
                      <option value="">Select Breed</option>
                      <option value="mixed">Mixed</option>
                      <option value="purebred">Purebred</option>
                    </select>
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <select name="age" className="w-full px-2 py-1 border-none focus:outline-none focus:ring-2 focus:ring-orange-500">
                      <option value="">Select Age</option>
                      <option value="puppy">Puppy/Kitten</option>
                      <option value="young">Young</option>
                      <option value="adult">Adult</option>
                      <option value="senior">Senior</option>
                    </select>
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <select name="sex" className="w-full px-2 py-1 border-none focus:outline-none focus:ring-2 focus:ring-orange-500">
                      <option value="">Select Sex</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Questionnaire</h2>
            <div className="space-y-4">
              <div>
                <label className="block mb-1 font-medium">What type of pet are you interested in adopting?</label>
                <div className="flex space-x-4">
                  {['Dog', 'Cat',].map((type) => (
                    <label key={type} className="flex items-center">
                      <input type="checkbox" name="pet-type" value={type.toLowerCase()} className="mr-2" />
                      <span>{type}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block mb-1 font-medium">Have you adopted from us before?</label>
                <div className="flex space-x-4">
                  {['Yes', 'No'].map((option) => (
                    <label key={option} className="flex items-center">
                      <input type="radio" name="adopted-before" value={option.toLowerCase()} className="mr-2" />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label htmlFor="living-situation" className="block mb-1 font-medium">What is your living situation?</label>
                <select id="living-situation" name="living-situation" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500">
                  <option value="">Select an option</option>
                  <option value="house">House</option>
                  <option value="apartment">Apartment</option>
                  <option value="condo">Condo</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block mb-1 font-medium">Do you rent or own?</label>
                <div className="flex space-x-4">
                  {['Rent', 'Own'].map((option) => (
                    <label key={option} className="flex items-center">
                      <input type="radio" name="housing" value={option.toLowerCase()} className="mr-2" />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block mb-1 font-medium">Do you have a fenced yard?</label>
                <div className="flex space-x-4">
                  {['Yes', 'No'].map((option) => (
                    <label key={option} className="flex items-center">
                      <input type="radio" name="fenced-yard" value={option.toLowerCase()} className="mr-2" />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label htmlFor="household-members" className="block mb-1 font-medium">How many people live in your household?</label>
                <input type="number" id="household-members" name="household-members" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
              </div>
              <div>
                <label htmlFor="children-ages" className="block mb-1 font-medium">If you have children, what are their ages?</label>
                <input type="text" id="children-ages" name="children-ages" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
              </div>
              <div>
                <label htmlFor="allergies" className="block mb-1 font-medium">Does anyone in your household have allergies?</label>
                <input type="text" id="allergies" name="allergies" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
              </div>
              <div>
                <label htmlFor="current-pets" className="block mb-1 font-medium">List any current pets in your household:</label>
                <textarea id="current-pets" name="current-pets" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"></textarea>
              </div>
              <div>
                <label htmlFor="pet-care" className="block mb-1 font-medium">Who will be responsible for feeding, grooming, and generally caring for your pet?</label>
                <input type="text" id="pet-care" name="pet-care" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
              </div>
              <div>
                <label htmlFor="alone-time" className="block mb-1 font-medium">How many hours will the pet be left alone during the day?</label>
                <input type="number" id="alone-time" name="alone-time" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
              </div>
              <div>
                <label htmlFor="exercise" className="block mb-1 font-medium">How will you exercise your pet?</label>
                <textarea id="exercise" name="exercise" rows={4} required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"></textarea>
              </div>
              <div>
                <label htmlFor="training" className="block mb-1 font-medium">What are your training plans for your new pet?</label>
                <textarea id="training" name="training" rows={4} required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"></textarea>
              </div>
              <div>
                <label htmlFor="vet-info" className="block mb-1 font-medium">Provide your veterinarian's information:</label>
                <textarea id="vet-info" name="vet-info" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"></textarea>
              </div>
              <div>
                <label htmlFor="references" className="block mb-1 font-medium">Please provide two personal references (name and phone number):</label>
                <textarea id="references" name="references" rows={4} required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"></textarea>
              </div>
            </div>
          </section>

          <div className="text-center">
            <button type="submit" className="bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-700 transition duration-300 transform hover:scale-105">
              Submit Application
            </button>
          </div>
        </form>

        {/* Image placeholder added below the form */}
        <div className="mt-8 flex justify-center">
          <img
            src="/placeholder.svg?height=300&width=600"
            alt="Adoption process illustration"
            className="rounded-lg shadow-md max-w-full h-auto"
          />
        </div>
      </main>

      <section className="bg-gradient-to-r from-orange-600 to-yellow-600 text-white py-16 text-center mt-16">
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

export default AdoptionApplication