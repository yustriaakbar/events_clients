import React, { useState } from 'react'
import axios from 'axios';

const QueueCheck = () => {
    const [nik, setNik] = useState("");
    const registerParticipant = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`http://localhost:3001/api/participants/nik`, { nik });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <div class="wrapper">
                <div class="page-wrapper">
                    <div class="container-xl">
                        <div class="px-4 py-5 my-5 text-center">
                            <a href="/"><img class="d-block mx-auto mb-4"
                                src="../frontend/static/images/LogoPemdaDIY.png"
                                alt="" height="96"/>
                            </a>
                            <h1 class="display-5 fw-bold">Cek Antrian Vaksin</h1>
                            <div class="col-lg-6 mx-auto">
                                <p class="lead mb-4">
                                </p>
                                <div class="justify-content-sm-center">
                                    <form method="POST" onSubmit={registerParticipant}>
                                            <div class="mb-3-">
                                                <label for="nik">NIK</label>
                                                <input class="form-control" id="nik" name="nik" placeholder="Nomor KTP" type="text"
                                                    value={nik} onChange={(e) => setNik(e.target.value)} />
                                            </div>
                                            <br />
                                            <div class="mb-3">
                                                <input class="btn btn-primary" id="submit" name="submit" type="submit" value="Submit"/>
                                            </div>
                                    </form>
                                    <br />
                                    <br />
                                    <a href="/"> Kembali ke halaman depan</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QueueCheck
