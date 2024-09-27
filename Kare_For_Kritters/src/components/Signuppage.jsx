import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronDownIcon, MagnifyingGlassIcon, HeartIcon } from '@heroicons/react/24/solid'

const SignupPage = () => {
  const [UserName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (password !== confirmPassword) {
      setError("Passwords don't match")
      return
    }
    try {
      console.log('Sending request with:', { UserName, email, password })
      const response = await fetch('http://localhost:8081/register', {
        method: 'POST',
        body: JSON.stringify({ UserName, email, password }),
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
      console.error('Error during signup:', error)
      setError(error.message || 'Signup failed. Please try again.')
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
        <br></br> <br></br> <br></br> <br></br>
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Sign Up / Register</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="UserName" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="UserName"
                  value={UserName}
                  onChange={(e) => setUserName(e.target.value)}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div>
                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                  Sign Up
                </button>
              </div>
            </form>
            {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
          </div>
          <div className="px-8 py-6 bg-gray-50 border-t border-gray-200">
            <p className="text-xs text-gray-600 text-center">Already have an account? <a href="/login" className="font-medium text-orange-600 hover:text-orange-500">Log in</a></p>
          </div>
        </div>
      </main>
      <br></br> <br></br> <br></br> <br></br>

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

export default SignupPage