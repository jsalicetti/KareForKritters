import React, { useEffect, useRef } from 'react'
import { ChevronDownIcon, MagnifyingGlassIcon, HeartIcon } from '@heroicons/react/24/solid'

const Locationmappage = () => {
  const mapRef = useRef(null)

  useEffect(() => {
    const loadGoogleMapsScript = () => {
      const script = document.createElement('script')
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyC-j7sNJLIWzKCbRMJlm98bfL3-JKCLjBM&callback=initMap`
      script.async = true
      script.defer = true
      document.head.appendChild(script)

      window.initMap = () => {
        const location1 = { lat: 40.80351946851118, lng: -73.91050854513445 } // Bronx PS
        const location2 = { lat: 40.699700432698435, lng: -73.94858279687112 } // Brooklyn PS

        const map = new window.google.maps.Map(mapRef.current, {
          zoom: 11.5,
          center: { lat: (location1.lat + location2.lat) / 2, lng: (location1.lng + location2.lng) / 2 }
        })

        new window.google.maps.Marker({
          position: location1,
          map: map,
          title: 'Per Scholas Building'
        })

        new window.google.maps.Marker({
          position: location2,
          map: map,
          title: 'Brooklyn Location'
        })
      }
    }

    loadGoogleMapsScript()

    return () => {
      delete window.initMap
    }
  }, [])

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

      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-5xl font-bold text-center mb-2">LOCATIONS</h1>
          <h2 className="text-2xl text-center text-white mb-8">VISIT OUR FACILITY</h2>

          <div className="flex flex-col md:flex-row gap-8 mb-16">
            <div id="map" ref={mapRef} className="w-full md:w-2/3 h-[600px] border-2 border-gray-800 rounded-lg shadow-lg"></div>
            <div className="w-full md:w-1/3">
              <h3 className="text-3xl font-bold text-white mb-4">OUR CENTERS</h3>
              <p className="text-xl">Visit Kare for Kritters and meet our adorable animals waiting for their forever homes. Our facilities provide a safe and loving environment for pets in need.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-2xl font-bold mb-4">BRONX<br />NEW YORK</h3>
              <p className="mb-4">In The Bronx, we offer a full-service animal shelter experience, including adoptions, surrenders and volunteers. We host adoption and fundraising events and offer a full range of services including spay and neuter.</p>
              <address className="font-bold">
                804 East 138th Street<br />
                Bronx, NY 10454<br />
                718-991-8400
              </address>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-2xl font-bold mb-4">BROOKLYN<br />NEW YORK</h3>
              <p className="mb-4">In Brooklyn, we provide a range of critically needed resources and services for cats and dogs. On-site cat and dog adoptions, surrenders, a pet food pantry, spay/neuter clinic along with a pet food and supplies pantry. As well as free medical care/vaccinations, foster care, and a meeting space for foster caregivers, volunteers and adopters.</p>
              <address className="font-bold">
                630 Flushing Avenue<br />
                Brooklyn, NY 11206<br />
                718-991-8400
              </address>
            </div>
          </div>
        </div>

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

export default Locationmappage