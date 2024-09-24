
const Homepage = () => {

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
                            <br />
                            <br />

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
                            <input type="search" placeholder="Search..." className="search-input" />
                            <span className="search-icon">🔍</span>
                        </div>
                        <button className="login-button">LOGIN</button>
                    </div>
                </div>
            </div>
        </header>

        
        <main className="main-content">
            {/* <!-- hero banner section --> */}
            <section className="hero-banner">
                {/* <!-- This div will hold the background image --> */}
                <div className="hero-background">
                    <img src="https://images.prismic.io/trustedhousesitters/b45c2273-bd43-4f35-b31f-e417ac0156ae_hunting+dog+names+1.png?auto=compress,format&rect=0,0,1920,800&w=960&h=400" alt="dogimage" />
                </div>
                {/* <!-- This div contains the hero content --> */}
                <div className="hero-content">
                    <p className="hero-quote">Saving one animal won't change the world, but it will change the world for that one animal.</p>
                </div>
            </section>
            <br />
            <br />
            <br />
            <br />

            <div className="container">
                {/* <!-- Donation section --> */}
                <section className="donation-section">
                    <div className="donation-items">
                        <div className="donation-item">
                            <div className="image-placeholder1">
                                <img src="/images/dogdonate.jpg" alt="Dog Image" width="256" height="256" />
                            </div>
                            <button className="donation-button1">Monthly donations</button>
                        </div>
                        <br />
                       

                        <div className="donation-item">
                            <div className="image-placeholder2">
                                <img src="/images/catdonate.jpg" alt="Cat Image" width="256" height="256" />
                            </div>
                            <button className="donation-button2">Donate</button>
                        </div>
                    </div>
                </section>

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                {/* <!-- Mission statement --> */}
                <section className="mission-statement">
                    <p>With Kare for Kritters, you are working to save the lives of cats and dogs all across America, giving pets a second chance at happiness and a home.</p>
                </section>

                <br/><br/><br/>

                {/* <!-- Happily ever afters section --> */}
                <div className="happily-ever-afters">
                    <h2>Happily ever afters</h2>
                    <br/>
                    <br/>
                    <div className="pet-stories">
                        <div className="pet-story1">
                            <div className="image-placeholder3">
                                <img src="/images/fluffington.jpg" alt="Happy Pet 1" width="256" height="256"/>
                            </div>
                            <div className="text-placeholder3">
                                <p>Meet Fluffington! <br/> Who doesn't have a <br/> nickname yet!</p>
                            </div>
                        </div>
                        <br/><br/><br/><br/>
                        <div className="pet-story2">
                            <div className="image-placeholder4">
                                <img src="/images/bagel.jpg" alt="Happy Pet 2" width="256" height="256"/>
                            </div>
                            <div className="text-placeholder4">
                                
                            <p>Meet Bagel! Otherwise known as Cream Cheese!</p> 
                        </div>
                        </div>
                        <br/><br/><br/><br/>
                        <div className="pet-story3">
                            <div className="image-placeholder5">
                                <img src="/images/Kage.jpg" alt="Happy Pet 3" width="256" height="256"/>
                            </div>
                            <div className="text-placeholder5">
                                 <p>Meet Kage! <br/> Otherwise known as <br/> Ro-meow Santos!</p>
                            </div>
                        </div>
                        <br/><br/><br/><br/>
                    </div>
                </div>
            </div>

            {/* <!-- Newsletter signup --> */}
            <section className="newsletter-signup">
                <div className="container">
                    <h2>Stay in touch!</h2>
                    <p>Keep up to date with our little kritters</p>
                    <form className="signup-form">
                        <input type="email" placeholder="Email Address" className="email-input"/>
                        <button type="submit" className="submit-button">Subscribe  </button>
                    </form>
                </div>
            </section>
        </main>

        
    </div>
        </>
    )
}
export default Homepage;