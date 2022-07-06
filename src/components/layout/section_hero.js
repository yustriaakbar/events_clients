import React from 'react'

const SectionHero = () => {
    return (
        <div>
            <section id="hero" className="hero d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex flex-column justify-content-center">
                            <h1 data-aos="fade-up"><b>Vaksinasi penting</b> untuk menjaga kesehatan diri dan keluarga.</h1>
                            <h2 data-aos="fade-up" data-aos-delay="400"><b>Jangan lupa</b> tetap <b>pakai masker</b>, <b>jaga jarak</b>, dan selalu <b>cuci tangan pakai sabun</b> agar terhindar dari <b>COVID-19</b> </h2>
                            <div data-aos="fade-up" data-aos-delay="600">
                                <div className="text-center text-lg-start">
                                    <a href="#event" className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                                        <span>Daftar Vaksinasi Sekarang!</span>
                                        <i className="bi bi-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay="200">
                            <img src="frontend/static/images/vaksinasi.svg" className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SectionHero