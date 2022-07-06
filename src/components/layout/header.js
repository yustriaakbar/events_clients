import React from 'react'

const Header = () => {
    return (
        <div>
           <header id="header" className="header fixed-top header-scrolled">
                <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
                    <a href="/" className="logo d-flex align-items-center">
                        <img src="frontend/static/images/LogoPemdaDIY.png" alt="" />
                        <span>ꦲꦪꦺꦴꦥ꦳ꦏ꧀ꦱꦶꦤ꧀</span>
                    </a>
                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><a className="nav-link scrollto active" href="/">Home</a></li>
                            {/* <li><a className="nav-link scrollto" href="#cekantrian">Cek Antrian</a></li> */}
                            <li><a className="nav-link scrollto" href="#event">Lokasi Vaksin</a></li>
                            <li><a className="nav-link scrollto" href="participant/queue_check">Cek Antrian</a></li>
                            <li><a className="getstarted scrollto" href="#cekantrian">Unduh Kartu Kendali</a></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>
                </div>
            </header>
        </div>
    );
};

export default Header