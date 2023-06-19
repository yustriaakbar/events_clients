import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../layout/header'
import Footer from '../layout/footer'
import Swal from 'sweetalert2'

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
    const [error, setError] = useState({});

    useEffect(() => {
        getEventById();
    }, []);

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    function isValidPhone(phone) {
        return /^\d{9,12}$/.test(phone);
    }

    const registerParticipant = async (e) => {
        e.preventDefault();
        let messages = {};
        
        if (!isValidEmail(email)) {
            messages.email = 'Email is invalid';
        }
        if (full_name.length < 3) {
            messages.full_name = 'Full name must be more than 3 characters';
        }
        if (!isValidPhone(phone)) {
            messages.phone = 'Phone must be 9 to 11 digits';
        }
        if (nik.length < 16) {
            messages.nik = 'NIK must be 16 digits';
        }
        if (address.length < 3) {
            messages.address = 'Address must be more than 3 characters';
        }

        setError(messages);
        
        if (Object.keys(messages).length === 0) {
            try {
                await axios.post(`http://localhost:3001/api/participants/store`,
                    { event_id, full_name, nik, birthdate, address, phone, email, gender });
                Swal.fire({
                    title: 'Success Registration!',
                    text: 'Please check your email, we have sent you the registration form and ticket code.',
                    icon: 'success'
                })
                navigate("/");
            } catch (error) {
                console.log(error);
            }
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
            <div className="container mt-5 mb-5">
                <form onSubmit={registerParticipant}>
                    <div className="row mt-5">
                    <header className="section-header mt-5">
                            <p>Register Participant</p>
                        </header>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="first">Select Event</label>
                                <select disabled className="form-control"
                                    value={event_id} onChange={(e) => setEvents(e.target.value)}>
                                    {events.map((event, index) => (
                                        <option key={index} value={event.id}>{event.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="last">Nama Lengkap</label>
                                <input required
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Full Name"
                                    value={full_name} onChange={(e) => setFullName(e.target.value)} />
                                {error.full_name && <small className='text-danger'>{error.full_name}</small>}
                            </div>
                        </div>
                    </div>


                    <div className="row mt-3">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="company">NIK</label>
                                <input required
                                    type="number"
                                    className="form-control"
                                    placeholder="Enter NIK"
                                    value={nik} onChange={(e) => setNik(e.target.value)}
                                    maxLength="16" />
                                {error.nik && <small className='text-danger'>{error.nik}</small>}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="phone">Tanggal Lahir</label>
                                <input required
                                    type="date"
                                    className="form-control"
                                    value={birthdate} onChange={(e) => setBirthdate(e.target.value)} />
                            </div>
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="email">Alamat Lengkap</label>
                                <input required
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Address"
                                    value={address} onChange={(e) => setAddress(e.target.value)} />
                                {error.address && <small className='text-danger'>{error.address}</small>}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="url">Nomor HP</label>
                                <input required
                                    type="number"
                                    className="form-control"
                                    placeholder="Enter Phone"
                                    value={phone} onChange={(e) => setPhone(e.target.value)} />
                                {error.phone && <small className='text-danger'>{error.phone}</small>}
                            </div>
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input required
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Email"
                                    value={email} onChange={(e) => setEmail(e.target.value)} />
                                {error.email && <small className='text-danger'>{error.email}</small>}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="url">Jenis Kelamin</label>
                                <select required className="form-control" onChange={(e) => setGender(e.target.value)}>
                                    <option value="male">Laki-laki</option>
                                    <option value="female">Perempuan</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary mt-3">Submit</button>
                </form>
            </div>
            < Footer />
        </div>
    );
};

export default RegisterParticipant