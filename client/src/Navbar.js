import React, { Fragment } from 'react'

export const Navbar = () => {
    return (
        <Fragment>
             <header className='topbar' data-navbarbg='skin1'>
          <nav className='navbar top-navbar navbar-expand-md navbar-dark'>
            <div className='navbar-header' data-logobg='skin6'>
              {/* This is for the sidebar toggle which is visible on mobile only */}
              <a
                className='nav-toggler waves-effect waves-light d-block d-md-none'
                href='javascript:void(0)'
              >
                <i className='fa fa-bars' />
              </a>
              {/* ============================================================== */}
              {/* Logo */}
              {/* ============================================================== */}
              <a className='navbar-brand' href='#'>
                {/* Logo icon */}
                <b className='logo-icon'>
                  {/*You can put here icon as well // <i class="wi wi-sunset"></i> //*/}
                  {/* Dark Logo icon */}
                  <img
                    src="logo.png"
                    alt='homepage'
                    className='dark-logo'
                  />
                  {/* Light Logo icon */}
                  <img
                    src='logo.png'
                    alt='homepage'
                    className='light-logo'
                  />
                </b>
                {/*End Logo icon */}
                {/* Logo text */}
                <span className='logo-text'>
                  {/* dark Logo text */}
                  <img
                    src='logo.png'
                    alt='homepage'
                    className='dark-logo'
                  />
                  {/* Light Logo text */}
                  <img
                    src='logo.png'
                    className='light-logo'
                    alt='homepage'
                  />
                </span>
              </a>
              {/* ============================================================== */}
              {/* End Logo */}
              {/* ============================================================== */}
              {/* ============================================================== */}
              {/* Toggle which is visible on mobile only */}
              {/* ============================================================== */}
              <a
                className='topbartoggler d-block d-md-none waves-effect waves-light'
                href='javascript:void(0)'
                data-toggle='collapse'
                data-target='#navbarSupportedContent'
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'
              >
                <i className='fa fa-search' />
              </a>
            </div>
            {/* ============================================================== */}
            {/* End Logo */}
            {/* ============================================================== */}
            <div
              className='navbar-collapse collapse'
              id='navbarSupportedContent'
              data-navbarbg='skin1'
            >
              {/* ============================================================== */}
              {/* toggle and nav items */}
              {/* ============================================================== */}
              <ul className='navbar-nav float-left mr-auto'>
                <li className='nav-item d-none d-md-block'>
                  <a
                    className='nav-link sidebartoggler waves-effect waves-light'
                    href='javascript:void(0)'
                    data-sidebartype='mini-sidebar'
                  >
                    <i className='mdi mdi-menu font-24' />
                  </a>
                </li>
                {/* ============================================================== */}
                {/* mega menu */}
                {/* ============================================================== */}
                <li className='nav-item dropdown mega-dropdown'>
                  <a
                    className='nav-link dropdown-toggle waves-effect waves-dark'
                    href='#'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    <span className='d-none d-md-block'>
                      Mega <i className='fa fa-angle-down' />
                    </span>
                    <span className='d-block d-md-none'>
                      <i className='mdi mdi-dialpad font-24' />
                    </span>
                  </a>
                  <div className='dropdown-menu animated bounceInDown'>
                    <div className='mega-dropdown-menu row'>
                      <div className='col-lg-3 col-xlg-2 mb-4'>
                        <h4 className='mb-3'>CAROUSEL</h4>
                        {/* CAROUSEL */}
                        <div
                          id='carouselExampleControls'
                          className='carousel slide'
                          data-ride='carousel'
                        >
                          <div className='carousel-inner' role='listbox'>
                            <div className='carousel-item active'>
                              <div className='container p-0'>
                                {' '}
                                <img
                                  className='d-block img-fluid'
                                  src='./BIZMAP/img1.jpg'
                                  alt='First slide'
                                />
                              </div>
                            </div>
                            <div className='carousel-item'>
                              <div className='container p-0'>
                                <img
                                  className='d-block img-fluid'
                                  src='./BIZMAP/img2.jpg'
                                  alt='Second slide'
                                />
                              </div>
                            </div>
                            <div className='carousel-item'>
                              <div className='container p-0'>
                                <img
                                  className='d-block img-fluid'
                                  src='./BIZMAP/img3.jpg'
                                  alt='Third slide'
                                />
                              </div>
                            </div>
                          </div>
                          <a
                            className='carousel-control-prev'
                            href='#'
                            role='button'
                            data-slide='prev'
                          >
                            {' '}
                            <span
                              className='carousel-control-prev-icon'
                              aria-hidden='true'
                            />{' '}
                            <span className='sr-only'>Previous</span>{' '}
                          </a>
                          <a
                            className='carousel-control-next'
                            href='#'
                            role='button'
                            data-slide='next'
                          >
                            {' '}
                            <span
                              className='carousel-control-next-icon'
                              aria-hidden='true'
                            />{' '}
                            <span className='sr-only'>Next</span>{' '}
                          </a>
                        </div>
                        {/* End CAROUSEL */}
                      </div>
                      <div className='col-lg-3 mb-4'>
                        <h4 className='mb-3'>ACCORDION</h4>
                        {/* Accordian */}
                        <div id='accordion'>
                          <div className='card mb-1'>
                            <div className='card-header' id='headingOne'>
                              <h5 className='mb-0'>
                                <button
                                  className='btn btn-link'
                                  data-toggle='collapse'
                                  data-target='#collapseOne'
                                  aria-expanded='true'
                                  aria-controls='collapseOne'
                                >
                                  Collapsible Group Item #1
                                </button>
                              </h5>
                            </div>
                            <div
                              id='collapseOne'
                              className='collapse show'
                              aria-labelledby='headingOne'
                              data-parent='#accordion'
                            >
                              <div className='card-body'>
                                Anim pariatur cliche reprehenderit, enim eiusmod
                                high life accusamus terry.
                              </div>
                            </div>
                          </div>
                          <div className='card mb-1'>
                            <div className='card-header' id='headingTwo'>
                              <h5 className='mb-0'>
                                <button
                                  className='btn btn-link collapsed'
                                  data-toggle='collapse'
                                  data-target='#collapseTwo'
                                  aria-expanded='false'
                                  aria-controls='collapseTwo'
                                >
                                  Collapsible Group Item #2
                                </button>
                              </h5>
                            </div>
                            <div
                              id='collapseTwo'
                              className='collapse'
                              aria-labelledby='headingTwo'
                              data-parent='#accordion'
                            >
                              <div className='card-body'>
                                Anim pariatur cliche reprehenderit, enim eiusmod
                                high life accusamus terry.
                              </div>
                            </div>
                          </div>
                          <div className='card mb-1'>
                            <div className='card-header' id='headingThree'>
                              <h5 className='mb-0'>
                                <button
                                  className='btn btn-link collapsed'
                                  data-toggle='collapse'
                                  data-target='#collapseThree'
                                  aria-expanded='false'
                                  aria-controls='collapseThree'
                                >
                                  Collapsible Group Item #3
                                </button>
                              </h5>
                            </div>
                            <div
                              id='collapseThree'
                              className='collapse'
                              aria-labelledby='headingThree'
                              data-parent='#accordion'
                            >
                              <div className='card-body'>
                                Anim pariatur cliche reprehenderit, enim eiusmod
                                high life accusamus terry.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-lg-3  mb-4'>
                        <h4 className='mb-3'>CONTACT US</h4>
                        {/* Contact */}
                        <form>
                          <div className='form-group'>
                            <input
                              type='text'
                              className='form-control'
                              id='exampleInputname1'
                              placeholder='Enter Name'
                            />{' '}
                          </div>
                          <div className='form-group'>
                            <input
                              type='email'
                              className='form-control'
                              placeholder='Enter email'
                            />{' '}
                          </div>
                          <div className='form-group'>
                            <textarea
                              className='form-control'
                              id='exampleTextarea'
                              rows={3}
                              placeholder='Message'
                              defaultValue={''}
                            />
                          </div>
                          <button type='submit' className='btn btn-info'>
                            Submit
                          </button>
                        </form>
                      </div>
                      <div className='col-lg-3 col-xlg-4 mb-4'>
                        <h4 className='mb-3'>List style</h4>
                        {/* List style */}
                        <ul className='list-style-none'>
                          <li>
                            <a href='javascript:void(0)'>
                              <i className='fa fa-check text-success' /> You can
                              give link
                            </a>
                          </li>
                          <li>
                            <a href='javascript:void(0)'>
                              <i className='fa fa-check text-success' /> Give
                              link
                            </a>
                          </li>
                          <li>
                            <a href='javascript:void(0)'>
                              <i className='fa fa-check text-success' /> Another
                              Give link
                            </a>
                          </li>
                          <li>
                            <a href='javascript:void(0)'>
                              <i className='fa fa-check text-success' /> Forth
                              link
                            </a>
                          </li>
                          <li>
                            <a href='javascript:void(0)'>
                              <i className='fa fa-check text-success' /> Another
                              fifth link
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                {/* ============================================================== */}
                {/* End mega menu */}
                {/* ============================================================== */}
                {/* ============================================================== */}
                {/* create new */}
                {/* ============================================================== */}
                <li className='nav-item dropdown'>
                  <a
                    className='nav-link dropdown-toggle'
                    href='#'
                    id='navbarDropdown'
                    role='button'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    <span className='d-none d-md-block'>
                      Create New <i className='fa fa-angle-down' />
                    </span>
                    <span className='d-block d-md-none'>
                      <i className='fa fa-plus' />
                    </span>
                  </a>
                  <div
                    className='dropdown-menu'
                    aria-labelledby='navbarDropdown'
                  >
                    <a className='dropdown-item' href='#'>
                      Action
                    </a>
                    <a className='dropdown-item' href='#'>
                      Another action
                    </a>
                    <div className='dropdown-divider' />
                    <a className='dropdown-item' href='#'>
                      Something else here
                    </a>
                  </div>
                </li>
                {/* ============================================================== */}
                {/* Search */}
                {/* ============================================================== */}
                <li className='nav-item search-box'>
                  {' '}
                  <a
                    className='nav-link waves-effect waves-dark'
                    href='javascript:void(0)'
                  >
                    <i className='fa fa-search' />
                  </a>
                  <form className='app-search position-absolute'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Search & enter'
                    />{' '}
                    <a className='srh-btn'>
                      <i className='fas fa-bars' />
                    </a>
                  </form>
                </li>
              </ul>
              {/* ============================================================== */}
              {/* Right side toggle and nav items */}
              {/* ============================================================== */}
              <ul className='navbar-nav float-right'>
                {/* ============================================================== */}

                {/* ============================================================== */}
              </ul>
            </div>
          </nav>
        </header>
            
        </Fragment>
    )
}
