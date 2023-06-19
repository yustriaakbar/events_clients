import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Aos from 'aos';
import Header from '../layout/header';
import Footer from '../layout/footer';
import SectionHero from '../layout/section_hero';
import Table from '../layout/table';

const LandingPage = () => {
    Aos.init();

    const [query, setQuery] = useState("");
    const [events, setEvents] = useState([]);

    const getEvents = async () => {
        const response = await axios.get(`http://localhost:3001/api/events?search=${query}`);
        setEvents(response.data.data);
    }

    useEffect(() => {
        getEvents();
        if (query.length === 0 || query.length > 2) getEvents();
    }, [query]);

    return (
        <div>
            < Header />
            < SectionHero />
            <main id="main">
                <section id="event" className="event">
                    <div className="container" data-aos="fade-up">
                        <header className="section-header">
                            <h2>Event Vaksinasi Tersedia</h2>
                            <p>Silakan pilih event vaksinasi yang sesuai.</p>
                        </header>
                        
                        <div className="row gx-0">
                            <div className="col-lg-12 d-flex flex-column items-center" data-aos="fade-up" data-aos-delay="300">
                                <div className="py-1 px-3">
                                <input type="text" className="form-control" placeholder="Cari Kegiatan" 
                                    onChange={(e) => setQuery(e.target.value.toLowerCase())}/>
                                    {<Table data={events} />}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <SectionQueue /> */}
            </main>
            < Footer />
        </div>
    );
};

export default LandingPage
