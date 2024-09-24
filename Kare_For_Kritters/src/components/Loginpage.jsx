import "../style_components/Loginpage2.css"

const Loginpage = () => {

    return(
        <>
        
        <div className="page-container">
        {/* <!-- Header with navbar --> */}
        <header className="header">
            <div className="container header-content">
                {/* <!-- Logo and site title --> */}
                <a href="/" className="logo">
                    <div className="logo-image"></div>
                    <span className="site-title">KARE FOR KRITTERS</span>
                </a>
                
                <div className="nav-and-actions">
                    {/* <!-- Navigation menu --> */}
                    <nav className="nav-menu">
                        <ul className="nav-list">
                            {/* <!-- Adopt dropdown --> */}
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
                            {/* <!-- Who We Are dropdown --> */}
                            <li className="nav-item">
                                <a href="#" className="nav-link">WHO WE ARE</a>
                                <br></br>
                                <ul className="dropdown">
                                    <li><a href="/success-stories">SUCCESS STORIES</a></li>
                                    <li><a href="/locations">LOCATIONS</a></li>
                                </ul>
                            </li>
                            {/* <!-- Get Involved dropdown --> */}
                            <li className="nav-item">
                                <a href="#" className="nav-link">GET INVOLVED</a>
                                <br></br>
                                <ul className="dropdown">
                                    <li><a href="/donate">DONATE</a></li>
                                </ul>
                            </li>
                            {/* <!-- Resources dropdown --> */}
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
                    
                    {/* <!-- Search and login buttons --> */}
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

        <main className="login-main">
            {/* <!-- Login and Registration forms container --> */}
            <div className="login-container">
                {/* <!-- Login form --> */}
                <h2>Login</h2>
                <form className="login-form">
                    <div className="form-group">
                        <label htmlFor="login-email">Email or Username</label>
                        <input type="text" id="login-email" name="login-email" required></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="login-password">Password</label>
                        <input type="password" id="login-password" name="login-password" required></input>
                    </div>
                    <button type="submit" className="form-submit">Sign In</button>
                </form>

                <hr style={{margin: "2rem 0"}}></hr>

                {/* <!-- Registration form --> */}
                <h2>Register</h2>
                <form className="register-form">
                    <div className="form-group">
                        <label htmlFor="register-name">Full Name</label>
                        <input type="text" id="register-name" name="register-name" required></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="register-email">Email</label>
                        <input type="email" id="register-email" name="register-email" required></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="register-password">Password</label>
                        <input type="password" id="register-password" name="register-password" required></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="register-confirm-password">Confirm Password</label>
                        <input type="password" id="register-confirm-password" name="register-confirm-password" required></input>
                    </div>
                    <button type="submit" className="form-submit">Register</button>
                </form>
            </div>

            {/* <!-- Newsletter signup section --> */}
            <section className="newsletter-signup">
                <div className="container1">
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

export default Loginpage;