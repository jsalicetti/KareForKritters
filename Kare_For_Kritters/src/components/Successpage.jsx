const Successpage = () => {

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

        <main className="success-stories-main">
            <div className="container">
                <h1>Success Stories</h1> 

            
                    <h1>Our top stories of 2024</h1>
                         
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>   

                <div className="success-stories-grid">
                    <div className="success-story">
                        <div className="story-image">
                            <img src="/images/Rue.jpg" alt="Happy Pet 1" width="379" height="222"></img>
                        </div>
                        <p>Ruebear Mcstuffins found her forever home with a loving family after months in the shelter.</p>
                    </div>
                    <div className="success-story">
                        <div className="story-image">

                            <img src="/images/RJ.jpg" alt="Happy Pet 1" width="380" height="222"></img>
                        </div>
                        <p>RJ, a shy cat, blossomed in his new home and became the family's best friend.</p>
                    </div>
                    <div className="success-story">
                        <div className="story-image">

                            <img src="/images/Juju.jpg" alt="Happy Pet 1" width="379" height="222"></img>
                        </div>
                        <p>Juju, an older dog, found a second chance at happiness with a young couple.</p>
                    </div>
                    <div className="success-story">
                        <div className="story-image">
                            <img src="/images/oreo.jpg" alt="Happy Pet 1" width="379" height="222"></img>   
                        </div>
                        <p>Oreo, a rescue dog, now hops freely in his new family's garden.</p>
                    </div>
                    <div className="success-story">
                        <div className="story-image">
                            <img src="/images/Gordo.jpg" alt="Happy Pet 1" width="379" height="222"></img>

                        </div>
                        <p>Gordo, a handsome dog, found a loving home and a spacious backyard to explore.</p>
                    </div>
                    <div className="success-story">
                        <div className="story-image">
                            <img src="/images/Lux.jpg" alt="Happy Pet 1" width="379" height="222"></img>
                        </div>
                        <p>Lux, a sweet little angel, inspired her new family with her resilience and affection.</p>
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

export default Successpage;