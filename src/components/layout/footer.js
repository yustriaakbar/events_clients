import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer id="footer" className="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row gy-4">
                            <div className="col-lg-4 col-md-12 footer-info">
                                <a href="#" className="logo d-flex align-items-center">
                                    <img src="frontend/static/images/LogoPemdaDIY.png" alt="" />
                                    <span>Ayo<b>Vaksin</b></span>
                                </a>
                                <p>Sistem AYO<b>VAKSIN</b> adalah sistem antrian vaksinasi resmi dari Pemerintah Daerah Daerah Istimewa Yogyakarta</p>
                                <div className="social-links mt-3">
                                    <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                                    <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                                    <a href="#" className="instagram"><i className="bi bi-instagram bx bxl-instagram"></i></a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-6 footer-links">
                                <h4>Link Terkait</h4>
                                <ul>
                                    <li><i className="bi bi-chevron-right"></i> <a href="https://corona.jogjaprov.go.id/">Corona Jogjaprov</a></li>
                                    <li><i className="bi bi-chevron-right"></i> <a href="https://jogjaprov.go.id/">Pemda DIY</a></li>
                                    <li><i className="bi bi-chevron-right"></i> <a href="https://www.dinkes.jogjaprov.go.id/">Dinkes DIY</a></li>
                                    <li><i className="bi bi-chevron-right"></i> <a href="https://diskominfo.jogjaprov.go.id/">Diskominfo DIY</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-6 footer-links">
                                <h4>Dinas Kabupaten/Kota</h4>
                                <ul>
                                    <li><i className="bi bi-chevron-right"></i> <a href="https://kesehatan.jogjakota.go.id/beranda">Dinkes Kota Yogyakarta</a></li>
                                    <li><i className="bi bi-chevron-right"></i> <a href="https://dinkes.slemankab.go.id/">Dinkes Kab. Sleman</a></li>
                                    <li><i className="bi bi-chevron-right"></i> <a href="https://gunungkidulkab.go.id/D-7c5c10bd7afb63f86b3f053bd8c45ae7-NR-100-0.html">Dinkes Kab. Gunungkidul</a></li>
                                    <li><i className="bi bi-chevron-right"></i> <a href="https://dinkes.bantulkab.go.id/">Dinkes Kab. Bantul</a></li>
                                    <li><i className="bi bi-chevron-right"></i> <a href="https://dinkes.kulonprogokab.go.id/">Dinkes Kab. Kulonprogo</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="copyright">
                        &copy; 2021 <strong><span>AyoVaksin</span></strong>. All Rights Reserved
                    </div>
                    <div className="credits">
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer