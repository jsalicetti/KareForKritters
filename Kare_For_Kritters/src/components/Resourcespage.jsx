import React, { useRef } from 'react'
import { ChevronDownIcon, MagnifyingGlassIcon, HeartIcon } from '@heroicons/react/24/solid'

const Resourcespage = () => {
// const training = useRef(null)
//   const health = useRef(null)
//   const insurance = useRef(null)

//   const scrollToSection = (elementRef) => {
//     window.scrollTo({
//         top: elementRef.current.offsetTop,
//         behavior: 'smooth',
//     });
//   };

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
        <h1 className="text-5xl font-bold text-center mb-12">PET CARE RESOURCES</h1>

            

        <section id="pet-training" className="bg-white rounded-lg shadow-lg p-8 mb-12">
        <h2 className="text-3xl font-bold mb-6 text-orange-600">PET TRAINING TIPS</h2>
          <div className="space-y-6">
            {[
              { title: "MAKE TRAINING FUN AND GET EVERYONE INVOLVED!", content: "Begin socializing and training your pet as soon as possible. Training should be fun for you and your pet, and it's important to get the whole family involved in the training." },
              { title: "IDENTIFY BEHAVIORS YOU WANT YOUR PET TO KNOW!", content: "Use the same commands and rewards consistently. Plan trainings ahead with common commands such as sit, stay, come, etc." },
              { title: "REWARD GOOD BEHAVIOR!", content: "Reward good behavior with treats, praise, toys, and access to fun." },
              { title: "KEEP SESSIONS SHORT!", content: "Train in short, frequent sessions to maintain interest. Two to three times a day works best as most pets respond well to consistency." },
              { title: "BE PATIENT!", content: "Learning takes time; every pet is different, so stay calm and persistent." },
              { title: "TAILOR TRAINING TO YOUR PET!", content: "Different animals may respond better to different methods." },
              { title: "SEEK PROFESSIONAL HELP IF NEEDED!", content: "Consider working with a professional trainer for complex issues." }
            ].map((tip, index) => (
              <div key={index} className="flex items-start">
                <span className="text-4xl font-bold text-orange-500 mr-4">{index + 1}</span>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{tip.title}</h3>
                  <p>{tip.content}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <br></br><br></br><br></br><br></br><br></br>
        <div className="aspect-w-8 aspect-h-4 w-3/4 mx-auto">
          <iframe 
            src="https://www.youtube.com/embed/jFMA5ggFsXU" 
            title="Pet Training Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            className="w-full h-full rounded-lg shadow-lg"
          ></iframe>
        </div>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <section id="health-tips" className="bg-white rounded-lg shadow-lg p-8 mb-12">
<h2 className="text-3xl font-bold mb-6 text-orange-600">HEALTH TIPS</h2>
          <ol className="space-y-6">
            {[
              { title: "WELLNESS VISITS", content: "Annual visits to your veterinarian are an important part of making sure your pet is healthy." },
              { title: "VACCINATIONS", content: "Keep your pet up-to-date on their vaccinations and boosters as well as monthly preventatives to help prevent diseases and the spread of disease." },
              { title: "EXERCISE REGULARLY", content: "Pets who are active daily are happier, healthier and you will both benefit from the time together and from physical activity." },
              { title: "BRUSH THOSE TEETH", content: "Often overlooked, dental and gum health is just as important for pets as it is for humans. Poor oral hygiene in pets can lead to other health problems. Use a toothpaste specially designed for your pet and consider a professional cleaning if necessary." },
              { title: "PET-PROOF YOUR HOUSE", content: "Become familiar with potential toxins inside and outside your home - plants, medications, cleaning supplies, foods etc. Be aware of items your pet might like to chew on and potentially ingest. Pets can be curious, and just like toddlers, sometimes they get into things they aren't supposed to so make sure hazards are out of reach." },
              { title: "GROOMING", content: "Whether you use professional or at-home grooming, keeping their nails trimmed and their coats looking healthy does a lot to keep your pet healthy. Grooming is also an excellent way to keep an eye on changes in your pets fur or skin, like dandruff, bald patches, dry skin, or pests as well as an ideal time to check for lumps and bumps that may cause concern." },
              { title: "IDENTIFICATION", content: "Be sure your pet is microchipped or wears tags in case he or she is separated from you. Microchipping is the best way to ensure your pet can be identified and returned to you." }
            ].map((tip, index) => (
              <li key={index} className="flex items-start">
                <span className="text-4xl font-bold text-orange-500 mr-4">{index + 1}</span>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{tip.title}</h3>
                  <p>{tip.content}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
        <br></br><br></br><br></br><br></br><br></br>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="aspect-w-16 aspect-h-9 w-3/4 mx-auto">
            <iframe 
              src="https://www.youtube.com/embed/o_YxH7h2dws" 
              title="Nail Cutting Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="w-full h-full rounded-lg shadow-lg"
            ></iframe>
          </div>
          <div className="aspect-w-16 aspect-h-9 w-3/4 mx-auto">
            <iframe 
              src="https://www.youtube.com/embed/AZr97y1b9f0" 
              title="Pet-Proofing Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="w-full h-full rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
        <br></br><br></br><br></br><br></br><br></br><br></br>
        <section  id="pet-insurance" className="bg-white rounded-lg shadow-lg p-8 mb-12">
  <h2 className="text-3xl font-bold mb-6 text-orange-600">PET INSURANCE</h2>
          <p className="mb-4">Pet insurance can help by offsetting some or most of the costs of diagnosing, treating and managing your pet's illness or injury. Here are some reasons why you should consider getting pet insurance for your furry friend:</p>
          <ul className="list-disc list-inside mb-6">
            <li>Peace of mind knowing you can afford your pet's health care</li>
            <li>Choice of veterinarian</li>
            <li>Focus on your pet's care, not cost</li>
          </ul>
          <h3 className="text-2xl font-semibold mb-4">Let's take a look at some Pet Insurance Providers in New York</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['Healthy Paws', 'Embrace', 'Trupanion', 'Nationwide', 'ASPCA', 'Petplan'].map((provider) => (
              <div key={provider} className="bg-orange-100 p-4 rounded-lg text-center">
                <div className="w-16 h-16 bg-orange-300 rounded-full mx-auto mb-2"></div>
                <p className="font-semibold">{provider}</p>
              </div>
            ))}
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

export default Resourcespage