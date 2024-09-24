const Adoptionprocesspage = () => {

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
                                <a href="#" class="nav-link">ADOPT</a>
                                <ul class="dropdown">
                                    <li><a href="/adoption-process">ADOPTION PROCESS & FEES</a></li>
                                    <li><a href="/adoptables">VIEW ALL ADOPTABLES</a></li>
                                    <li><a href="/adoption-application">ADOPTION APPLICATION</a></li>
                                </ul>
                            </li>

                            {/* <!-- who we are dropdown --> */}
                            <li className="nav-item">
                                <a href="#" className="nav-link">WHO WE ARE</a>
                                <ul className="dropdown">
                                    <li><a href="/success-stories">SUCCESS STORIES</a></li>
                                    <li><a href="/locations">LOCATIONS</a></li>
                                </ul>
                            </li>
                            {/* <!-- get involved dropdown --> */}
                            <li class="nav-item">
                                <a href="#" className="nav-link">GET INVOLVED</a>
                                <ul className="dropdown">
                                    <li><a href="/donate">DONATE</a></li>
                                </ul>
                            </li>
                            {/* <!-- resources dropdown --> */}
                            <li className="nav-item">
                                <a href="#" className="nav-link">RESOURCES</a>
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

        <main className="adoption-process-main">
            <div className="container">
                <h1>ADOPTION PROCESS</h1>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                <section className="intro-section">
                    <div className="intro-text">
                        <p>Welcome to our adoption process! We're excited to help you find your perfect furry friend. Our process is designed to ensure the best match between pets and their new families.</p>
                        <button className="cta-button">View Adoptable Pets</button>
                    </div>
                    
                    
                    <div className="intro-image">
                        <img src="/images/adoption-process.jpg" alt="adoption-img-fee" width="600" height="600" ></img>
                    </div>
                    
                </section>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <section className="eligibility-requirements">
                    <h2>Eligibility Requirements</h2>
                    <p>To adopt from us, you must meet the following criteria:</p>
                    <ul>
                        <li>Be at least 18 years old</li>
                        <li>Provide a valid ID</li>
                        <li>Show proof of residence</li>
                        <li>If renting, provide landlord's consent</li>
                    </ul>
                </section>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                <section className="adoption-fees">
                    <h2>Adoption Fees</h2>
                    <table>
                        <tr>
                            <th>Pet Type</th>
                            <th>Fee</th>
                        </tr>
                        <tr>
                            <td>Dogs (6 months and older)</td>
                            <td>$250</td>
                        </tr>
                        <tr>
                            <td>Puppies (under 6 months)</td>
                            <td>$350</td>
                        </tr>
                        <tr>
                            <td>Cats (6 months and older)</td>
                            <td>$100</td>
                        </tr>
                        <tr>
                            <td>Kittens (under 6 months)</td>
                            <td>$150</td>
                        </tr>
                    </table>
                </section>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <section className="adoption-steps">
                    <h2>Adoption Steps</h2>
                    <div className="step-dropdown">
                        <h3>Step 1: Browse Available Pets</h3>
                        <div className="step-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className="step-dropdown">
                        <h3>Step 2: Submit an Application</h3>
                        <div className="step-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className="step-dropdown">
                        <h3>Step 3: Meet Your Potential Pet</h3>
                        <div className="step-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className="step-dropdown">
                        <h3>Step 4: Finalize the Adoption</h3>
                        <div className="step-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </section>
                <br></br>
                <br></br>
                <br></br>
                <section className="image-section">
                    <div className="image-placeholder1"></div>
                    <div className="image-placeholder2"></div>
                </section>
                <br></br>
                <br></br>
                <section className="ready-to-adopt">
                    <h2>READY TO ADOPT?</h2>
                    <div className="adopt-buttons">
                        <button className="adopt-button">View Adoptable Pets</button>
                    

                        <button className="adopt-button">Start Application</button>
                    </div>
                </section>
            </div>
            <br></br>
            <br></br>

            {/* <!-- Newsletter signup --> */}
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

    <script>
        // JavaScript for dropdown functionality
        document.querySelectorAll('.step-dropdown h3').forEach(item ={">"} {
            item.addEventListener('click', event => {
                const content = event.target.nextElementSibling;
                content.style.display = content.style.display === 'block' ? 'none' : 'block';
            })};
);
    </script>
        
        </>
    )
}

export default Adoptionprocesspage;