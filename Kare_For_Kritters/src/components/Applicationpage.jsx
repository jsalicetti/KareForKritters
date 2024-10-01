import React from 'react'
import {useState} from 'react'
import { ChevronDownIcon, MagnifyingGlassIcon, HeartIcon } from '@heroicons/react/24/solid'

const AdoptionApplication = () => {
  const [error, setError] = useState(null)
  const states = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia',
    'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland',
    'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
    'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
    'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ]

  const handleSubmit = async (event) => {
    event.preventDefault()
    
    // Get form data
    const formData = new FormData(event.target);
    const applicationData = Object.fromEntries(formData);
    console.log(applicationData);

    try {
      const response = await fetch('http://localhost:8081/sendapplication', {
        method: 'POST',
        body: JSON.stringify(applicationData),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      if (response.status === 200) {
        navigate('/login')
      }

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Network response was not ok')
      }

      setError(null)
    } catch (error) {
      console.error('Error during application submission:', error)
      setError(error.message || 'Application submission failed. Please try again.')
    }
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
        <h1 className="text-4xl font-bold text-center mb-8">Adoption Application</h1>
        <form className="bg-white shadow-md rounded-lg p-8 mb-8" onSubmit={handleSubmit}>
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
            <br></br>
            <div className="space-y-4">
              <div>
                <label className="block mb-1 font-medium">What type of pet are you interested in adopting?</label>
                <div className="flex space-x-4">
                  {['Dog', 'Cat'].map((type) => (
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
              <br></br>
              <div>
                <label className="block mb-1 font-medium">Have you adopted from us before?</label>
                <div className="flex space-x-4">
                  {['Yes', 'No'].map((option) => (
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
                <label htmlFor="living-situation" className="block mb-1 font-medium">What is your living situation?</label>
                <select id="living-situation" name="livingSituation" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500">
                  <option value="">Select an option</option>
                  <option value="house">House</option>
                  <option value="apartment">Apartment</option>
                  <option value="condo">Condo</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <br></br>
              <div>
                <label className="block mb-1 font-medium">Do you rent or own?</label>
                <div className="flex space-x-4">
                  {['Rent', 'Own'].map((option) => (
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
                <label className="block mb-1 font-medium">Do you have a fenced yard?</label>
                <div className="flex space-x-4">
                  {['Yes', 'No', "N/A"].map((option) => (
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
                <label className="block mb-1 font-medium">Do you live alone?</label>
                <div className="flex space-x-4">
                  {['Yes', 'No'].map((option) => (
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
                <label className="block mb-1 font-medium">Do you live with children?</label>
                <div className="flex space-x-4">
                  {['Yes', 'No'].map((option) => (
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
                <label className="block mb-1 font-medium">Does anyone in your household have allergies?</label>
                <div className="flex space-x-4">
                  {['Yes', 'No'].map((option) => (
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
                <label className="block mb-1 font-medium">How will you exercise your pet?</label>
                <div className="flex space-x-4">
                  {['In the backyard', 'Walks', 'Indoor Playtime'].map((option) => (
                    <label key={option} className="flex items-center">
                      <input
                        type="checkbox"
                        name="exercisePet"
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
                <label className="block mb-1 font-medium">What are your training plans for your pet?</label>
                <div className="flex space-x-4">
                  {['Train myself', 'Hire a trainer', 'No training', 'Other'].map((option) => (
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
                <label htmlFor="current-pets" className="block mb-1 font-medium">How many pets are currently in your household?</label>
                <input type="number" id="current-pets" name="petsAtHome" min="0" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus: ring-2 focus:ring-orange-500" />
              </div>
              <br></br>
              <div>
                <label htmlFor="pet-care" className="block mb-1 font-medium">Who will be responsible for feeding, grooming, and generally caring for your pet?</label>
                <input type="text" id="pet-care" name="carePet" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
              </div>
              <br></br>
              <div>
                <label htmlFor="alone-time" className="block mb-1 font-medium">How many hours will the pet be left alone during the day?</label>
                <input type="number" id="alone-time" name="hoursHome" min="0" max="24" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
              </div>
            </div>
          </section>

          <div className="text-center">
            <button type="submit" className="bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-700 transition duration-300 transform hover:scale-105">
              Submit Application
            </button>
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