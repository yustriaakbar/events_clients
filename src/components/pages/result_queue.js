import React from 'react'
import Moment from 'moment'

const ResultQueue = ({participant}) => {
    return (
        <table className="table table-bordered nowrap">
            <tbody>
                <tr>
                    <th>Nomor Tiket</th>
                    <td><img style={{ width: 50}} src="https://static.vecteezy.com/system/resources/previews/002/557/391/original/qr-code-for-scanning-free-vector.jpg" alt="Logo" /></td>
                </tr>
                <tr>
                    <th>Nama Participant</th>
                    <td>{participant.full_name}</td>
                </tr>
                <tr>
                    <th>Alamat Participant</th>
                    <td>{participant.address}</td>
                </tr>
                <tr>
                    <th>Jenis Vaksin</th>
                    <td>{participant.event.name}</td>
                </tr>
                <tr>
                    <th>Lokasi Vaksin</th>
                    <td>{participant.event.location}</td>
                </tr>
                <tr>
                    <th>Tanggal & Jam Vaksin</th>
                    <td>{Moment(participant.event.date).format('D MMMM Y')} pukul {participant.event.hours}</td>
                </tr>
            </tbody>
        </table>
    );
};

export default ResultQueue