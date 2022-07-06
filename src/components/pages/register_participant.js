import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../layout/header';
import Footer from '../layout/footer';

const RegisterParticipant = () => {
    const [full_name, setFullName] = useState("");
    const [event_id, setEvent] = useState();
    const [birthdate, setBirthdate] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [nik, setNik] = useState("");
    const [events, setEvents] = useState([]);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        getEventById();
    }, []);

    const registerParticipant = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`http://localhost:3001/api/participants/store`,
                { event_id, full_name, nik, birthdate, address, phone, email, gender });
            navigate("/"); //redirect message success (add page)
        } catch (error) {
            console.log(error);
        }
    };

    const getEventById = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/api/events/show-detail/${id}`);
            setEvent(response.data.data.id);
        } catch (error) {
            if (error) {
                navigate('/'); // if response id null redirect
            }
        }
    };

    const getEvents = async () => {
        const response = await axios.get('http://localhost:3001/api/events' + '/?search=');
        setEvents(response.data.data);
    };

    useEffect(() => {
        getEvents();
    }, []);

    return (
        <div>
            < Header />
            <div class="container mt-5 mb-5">
                <form onSubmit={registerParticipant}>
                    <div class="row mt-5">
                    <header className="section-header mt-5">
                            <p>Register Participant</p>
                        </header>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="first">Select Event</label>
                                <select disabled class="form-control"
                                    value={event_id} onChange={(e) => setEvents(e.target.value)}>
                                    {events.map((event) => (
                                        <option value={event.id}>{event.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="last">Nama Lengkap</label>
                                <input required
                                    type="text"
                                    class="form-control"
                                    placeholder="Enter Full Name"
                                    value={full_name} onChange={(e) => setFullName(e.target.value)} />
                            </div>
                        </div>
                    </div>


                    <div class="row mt-3">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="company">NIK</label>
                                <input required
                                    type="text"
                                    class="form-control"
                                    placeholder="Enter NIK"
                                    value={nik} onChange={(e) => setNik(e.target.value)} />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="phone">Tanggal Lahir</label>
                                <input required
                                    type="date"
                                    class="form-control"
                                    value={birthdate} onChange={(e) => setBirthdate(e.target.value)} />
                            </div>
                        </div>
                    </div>

                    <div class="row mt-3">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="email">Alamat Lengkap</label>
                                <input required
                                    type="text"
                                    class="form-control"
                                    placeholder="Enter Address"
                                    value={address} onChange={(e) => setAddress(e.target.value)} />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="url">Nomor HP</label>
                                <input required
                                    type="text"
                                    class="form-control"
                                    placeholder="Enter Phone"
                                    value={phone} onChange={(e) => setPhone(e.target.value)} />
                            </div>
                        </div>
                    </div>

                    <div class="row mt-3">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="email">Email Address</label>
                                <input required
                                    type="text"
                                    class="form-control"
                                    placeholder="Enter Email"
                                    value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="url">Jenis Kelamin</label>
                                <input required
                                    type="text"
                                    class="form-control"
                                    placeholder="Enter Gender"
                                    value={gender} onChange={(e) => setGender(e.target.value)} />
                            </div>
                        </div>
                    </div>

                    <button type="submit" class="btn btn-primary mt-3">Submit</button>
                </form>
            </div>
            < Footer />
        </div>
    );
};

export default RegisterParticipant