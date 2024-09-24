const Locationpage = () => {

    return(
        <>
        <div className="page-container">
        {/* <!-- header with navbar --> */}
        <header className="header">
            <div className="container header-content">
                {/* <!-- logo and title --> */}
                <a href="/" className="logo">
                    <div className="logo-image"></div>
                    <span className="site-title">KARE FOR KRITTERS</span>
                </a>
                
                <div className="nav-and-actions">
                    {/* <!-- nav menu --> */}
                    <nav className="nav-menu">
                        <ul className="nav-list">
                            {/* <!-- adopt dropdown --> */}
                            <li className="nav-item">
                                <a href="#" className="nav-link">ADOPT</a>
                                <br></br>
                                <ul className="dropdown">
                                    <li><a href="/adoption-process">ADOPTION PROCESS & FEES</a></li>
                                    <li><a href="/adoptables">VIEW ALL ADOPTABLES</a></li>
                                    <li><a href="/adoption-application">ADOPTION APPLICATION</a></li>
                                </ul>
                            </li>
                            <br></br>
                            <br></br>

                            {/* <!-- who we are dropdown --> */}
                            <li className="nav-item">
                                <a href="#" className="nav-link">WHO WE ARE</a>
                                <br></br>
                                <ul className="dropdown">
                                    <li><a href="/success-stories">SUCCESS STORIES</a></li>
                                    <li><a href="/locations">LOCATIONS</a></li>
                                </ul>
                            </li>
                            {/* <!-- get involved dropdown --> */}
                            <li className="nav-item">
                                <a href="#" className="nav-link">GET INVOLVED</a>
                                <br></br>
                                <ul className="dropdown">
                                    <li><a href="/donate">DONATE</a></li>
                                </ul>
                            </li>
                            {/* <!-- resources dropdown --> */}
                            <li className="nav-item">
                                <a href="#" className="nav-link">RESOURCES</a>
                                <br></br>
                                <ul className="dropdown">
                                    <li><a href="/pet-training">PET TRAINING</a></li>
                                    <li><a href="/health-tips">HEALTH TIPS</a></li>
                                    <li><a href="/pet-insurance">PET INSURANCE</a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                    
                    {/* <!-- login and search --> */}
                    <div className="header-actions">
                        <div className="search-container">
                            <input type="search" placeholder="Search..." className="search-input"></input>
                            <span className="search-icon">🔍</span>
                        </div>
                        <button className="login-button">LOGIN</button>
                    </div>
                </div>
            </div>
        </header>
        <main className="pet-care-resources">
            <div className="container">
                <h1>PET CARE RESOURCES</h1>

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                
                {/* <!-- Pet Training Tips Section --> */}
                <section className="resource-section">
                    <h2>PET TRAINING TIPS</h2>
                    <br></br>
                    <br></br>
                    <div className="tip">
                        <span className="number">1</span>
                        <b>MAKE TRAINING FUN AND GET EVERYONE INVOLVED!</b>
                        <p>Begin socializing and training your pet as soon as possible. Training should be fun for you and your pet, and it's important to get the whole family involved in the training.</p>
                    </div>
                    <br></br>   
                    <br></br>
                    <div className="tip">
                        <span className="number">2</span>
                        <b>IDENTIFY BEHAVIORS YOU WANT YOUR PET TO KNOW!</b>
                        <p>Use the same commands and rewards consistently. Plan trainings ahead with common commands such as sit, stay, come, etc.</p>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="tip">
                        <span className="number">3</span>
                        <b>REWARD GOOD BEHAVIOR!</b>
                        <p>Reward good behavior with treats, praise, toys, and access to fun.</p>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="tip">
                        <span className="number">4</span>
                        <b>KEEP SESSIONS SHORT!</b>
                        <p>Train in short, frequent sessions to maintain interest. Two to three times a day works best as most pets respond well to consistency.</p>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="tip">
                        <span className="number">5</span>
                        <b>BE PATIENT!</b>
                        <p>Learning takes time; every pet is different, so stay calm and persistent.</p>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="tip">
                        <span className="number">6</span>
                        <b>TAILOR TRAINING TO YOUR PET!</b>
                        <p>Different animals may respond better to different methods.</p>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="tip">
                        <span className="number">7</span>
                        <b>SEEK PROFESSIONAL HELP IF NEEDED!</b>
                        <p>Consider working with a professional trainer for complex issues.</p>
                    </div>
                </section>
                </div>
                
                    <br></br>
                    <br></br>
                    <br></br>
                        
                        <div className="training-video">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/jFMA5ggFsXU?si=1Jo5AEGFb5XCyeJM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>


                <br></br>
                <br></br>
                <br></br>

                {/* <!-- Health Tips Section --> */}
                <section className="resource-section">
                    <h2>HEALTH TIPS</h2>
                    <br></br>
                    <br></br>
                    <ol className="health-tips">
                        <li>
                            <span className="number">1</span>
                            <div className="tip-content">
                                <b>WELLNESS VISITS:</b>
                                <p>Annual visits to your veterinarian are an important part of making sure your pet is healthy. </p>
                            </div>
                        </li>
                        <br></br>
                        <br></br>
                        <li>
                            <span className="number">2</span>
                            <div className="tip-content">
                                <b>VACCINATIONS:</b>
                                <p>Keep your pet up-to-date on  their vaccinations and boosters as well as monthly preventatives to help prevent diseases and the spread of disease.</p>
                            </div>
                        </li>
                        <br></br>
                        <br></br>
                        <li>
                            <span className="number">3</span>
                            <div className="tip-content">
                                <b>EXERCISE REGULARLY:</b>
                                <p>Pets who are active daily are happier, healthier and you will both benefit from the time together and from physical activity.</p>
                            </div>
                        </li>
                        <br></br>
                        <br></br>
                        <li>
                            <span className="number">4</span>
                            <div className="tip-content">
                                <b>BRUSH THOSE TEETH:</b>
                                <p>Often overlooked, dental and hum health is just as important for pets as it is for humans. Poor oral hygiene in pets can lead to other health problems.
                                    Use a toothpaste specially designed for your pet and consider a professional cleaning if necessary. </p>
                            </div>
                        </li>
                        <br></br>
                        <br></br>
                        <li>
                            <span className="number">5</span>
                            <div className="tip-content">
                                <b>PET-PROOF YOUR HOUSE:</b>
                                <p>Become familiar with potential toxins inside and outside your home - plants, medications, cleaning supplies, foods etc. Be aware of items your pet 
                                    might like to chew on and potentially ingest. Pets can be curious, and just like tolders, sometimes they get into things they are not supposed to so
                                    make sure hazards are out of reach. </p>
                            </div>
                        </li>
                        <br></br>
                        <br></br>
                        <li>
                            <span className="number">6</span>
                            <div className="tip-content">
                                <b>GROOMING:</b>
                                <p>Whether you use professional or at-home grooming, keeping their nails trimmed and their coats looking healthy does a lot to keep your pet healthy. 
                                    Grooming is also an excellent way to keep an eye on changes in your pets fur or skin, like dandruff, bald patches, dry skin, or pests as well as an
                                    ideal time to check for lumps and bumps that may cause concern.</p>
                            </div>
                        </li>
                        <br></br>
                        <br></br>
                        <li>
                            <span className="number">7</span>
                            <div className="tip-content">
                                <b>IDENTIFICATION:</b>
                                <p>Be sure your pet is microchipped or wears tags in case he or she is separated from you. Microchipping is the best way to insure your pet can be
                                    identified and returned to you.</p>
                            </div>
                        </li>
                    </ol>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    
                </section>
                <section>
                    <div className="video-container">
                        <div className="nail-cutting-video">
                            
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/o_YxH7h2dws?si=fZEQCObQJm9Iqfm1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                        </div>
                     <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                
                        <div className="pet-proofing">

                            <iframe width="560" height="315" src="https://www.youtube.com/embed/AZr97y1b9f0?si=dLuumJM9Uk-v4gBO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                        </div>
                    </div>
                     
                </section>

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                {/* <!-- Pet Insurance Section --> */}
                <div class="resource-section" id="insurance">
                    <h2>PET INSURANCE</h2>
                    <br></br>
                    <br></br>
                    <p>Pet insurance can help by offsetting some or most of the costs of diagnosing, treating and managing your pet's illness or injury. Here are some reasons why you should consider getting pet insurance for your furry friend:</p>
                    <ul>
                        <li>Peace of mind knowing you can afford your pet's health care</li>
                        <br></br>
                        <li>Choice of veterinarian</li>
                        <br></br>
                        <li>Focus on your pet's care, not cost</li>
                    </ul>
                    
                    <br></br>
                    <br></br>

                    <h3>Let's take a look at some Pet Insurance Providers in New York</h3>
                    <div className="insurance-providers">
                        <div className="provider">
                            <div className="icon-placeholder"></div>
                            <p>Healthy Paws</p>
                        </div>
                        <div className="provider">
                            <div className="icon-placeholder"></div>
                            <p>Embrace</p>
                        </div>
                        <div className="provider">
                            <div className="icon-placeholder"></div>
                            <p>Trupanion</p>
                        </div>
                        <div className="provider">
                            <div className="icon-placeholder"></div>
                            <p>Nationwide</p>
                        </div>
                        <div className="provider">
                            <div className="icon-placeholder"></div>
                            <p>ASPCA</p>
                        </div>
                        <div className="provider">
                            <div className="icon-placeholder"></div>
                            <p>Petplan</p>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>


                {/* <!-- newsletter signup --> */}
            <section className="newsletter-signup">
                <div className="container">
                    <h2>Stay in touch!</h2>
                    <p>Keep up to date with our little kritters</p>
                    <form className="signup-form">
                        <input type="email" placeholder="Email Address" className="email-input"></input>
                        <button type="submit" className="submit-button">Subscribe</button>
                    </form>
                </div>
            </section>
        </main>

        
          
        </div>
        </>
    )
}
export default Locationpage;