import React, { useState, useEffect } from 'react'

function Navbar() {
  const [show,setShow]=useState(false);
  const scrollHandler =()=>{
    if(window.scrollY>100)
    {
      setShow(true);
    }
    else{
      setShow(false);
    }
  }
  useEffect(()=>{
    window.addEventListener('scroll', scrollHandler);
    return ()=>{
      window.removeEventListener('scroll', scrollHandler);
    }
  },[]);
  return (
    <nav style={{backgroundColor: show? 'black': 'transparent', transition:'0.5s'}}>
      <section>
        <div className="nav_left">
          <img
            alt="Netflix"
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
            className="nav_logo"
          ></img>
          <div className="nav_links">
            <a href="/">Home</a>
            <a href="/">TV Shows</a>
            <a href="/">Movies</a>
            <a href="/">New & Popular</a>
            <a href="/">My List</a>
            <a href="/">Browse by Languages</a>
          </div>
        </div>
        <div className="nav_right">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="search-icon"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13 11C13 13.7614 10.7614 16 8 16C5.23858 16 3 13.7614 3 11C3 8.23858 5.23858 6 8 6C10.7614 6 13 8.23858 13 11ZM14.0425 16.2431C12.5758 17.932 10.4126 19 8 19C3.58172 19 0 15.4183 0 11C0 6.58172 3.58172 3 8 3C12.4183 3 16 6.58172 16 11C16 11.9287 15.8417 12.8205 15.5507 13.6497L24.2533 18.7028L22.7468 21.2972L14.0425 16.2431Z"
              fill="currentColor"
            ></path>
          </svg>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="Hawkins-Icon Hawkins-Icon-Standard"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13 4.07092C16.3922 4.55624 18.9998 7.4736 18.9998 11V15.2538C20.0486 15.3307 21.0848 15.4245 22.107 15.5347L21.8926 17.5232C18.7219 17.1813 15.409 17 11.9998 17C8.59056 17 5.27764 17.1813 2.10699 17.5232L1.89258 15.5347C2.91473 15.4245 3.95095 15.3307 4.99978 15.2538V11C4.99978 7.47345 7.6076 4.55599 11 4.07086V2L13 2V4.07092ZM16.9998 15.1287V11C16.9998 8.23858 14.7612 6 11.9998 6C9.23836 6 6.99978 8.23858 6.99978 11V15.1287C8.64041 15.0437 10.3089 15 11.9998 15C13.6907 15 15.3591 15.0437 16.9998 15.1287ZM8.62568 19.3712C8.6621 20.5173 10.1509 22 11.9993 22C13.8477 22 15.3365 20.5173 15.373 19.3712C15.38 19.1489 15.1756 19 14.9531 19H9.04555C8.82308 19 8.61862 19.1489 8.62568 19.3712Z"
              fill="currentColor"
            ></path>
          </svg>
          <p>Children</p>
          <div className="account-dropdown-button">
            <a
              href="/YourAccount"
              role="button"
              tabIndex="0"
              aria-haspopup="true"
              aria-expanded="false"
              aria-label="Stranger – Account &amp; Settings"
            >
              <span className="profile-link" role="presentation">
                <img
                  className="profile-icon"
                  src="https://occ-0-2087-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABQnOnMxhb19v9lQZScL86ZpnI21__HC3fseri3xG_4k-rYBafycfVvfsw_SqXVYXJJrelgRPF-eed5E69w1GQ3rq-CxZLW0.png?r=a4b"
                  alt=""
                />
              </span>
            </a>
            <span className="caret" role="presentation"></span>
          </div>
        </div>
      </section>
    </nav>
  );
}
export default Navbar;
