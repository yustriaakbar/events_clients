import React from 'react'

const SectionQueue = () => {
    return (
        <div>
                <section id="cekantrian" className="cekantrian">
                    <div className="container" data-aos="fade-up">
                        <header className="section-header">
                            <h2>Cek Antrian</h2>
                            <p>Cek Antrian dan Download Form Screning</p>
                        </header>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="content" data-aos="fade-up" data-aos-delay="200">
                                    <h3>Penting!</h3>
                                    <h2>Pastikan saat hari pelaksanaan Anda <b>tidak</b>:</h2>
                                    <ul>
                                        <li>Sedang Terkonfirmasi Covid-19.</li>
                                        <li>Kontak erat dengan penderita Covid-19.</li>
                                        <li>Dalam keadaan hamil.</li>
                                        <li>Bergejala minimal 1 atau lebih berikut ini:
                                            <ul>
                                                <li>Demam tinggi > 37ºC</li>
                                                <li>Batuk</li>
                                                <li>Pilek</li>
                                                <li>Mual/muntah</li>
                                                <li>Nyeri tenggorokan/sendi</li>
                                                <li>Gejala mirip influenza lainnya</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="box" data-aos="fade-up" data-aos-delay="200">
                                    <img src="frontend/static/assets/img/cek-antrian.png" className="img-fluid" alt="" />
                                    <h3>Cek Antrian di sini.</h3>
                                    <p>Klik link di bawah ini dan masukkan NIK Anda untuk memeriksa status antrian Anda.</p>
                                    <div className="d-grid gap-2">
                                        <a href="/participant/queue_check" className="btn btn-primary"><i className="bi bi-list-check"></i> Cek Antrian</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 mt-4 mt-lg-0">
                                <div className="box" data-aos="fade-up" data-aos-delay="400">
                                    <img src="frontend/static/assets/img/download-form.png" className="img-fluid" alt="" />
                                    <h3>Download Form Screening</h3>
                                    <div className="d-grid gap-2">
                                        <a href="frontend/static/files/formskriningumum.pdf" className="btn btn-primary" download><i className="bi bi-file-earmark-arrow-down-fill"></i> Form Screening Umum</a>
                                        <a href="frontend/static/files/formskriningibuhamil.pdf" className="btn btn-primary" download=""><i className="bi bi-file-earmark-arrow-down-fill"></i> Form Screening Ibu Hamil</a>
                                        <a href="frontend/static/files/formskriningremaja.pdf" className="btn btn-primary" download><i className="bi bi-file-earmark-arrow-down-fill"></i> Form Screening Remaja</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </div>
    );
};

export default SectionQueue