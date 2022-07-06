import { Link } from 'react-router-dom';
import Moment from 'moment';

const Table = ({ data }) => {
    return (
        <table className="table table-bordered nowrap">
            <tbody>
                <tr>
                    <th>Kegiatan</th>
                    <th>Jenis Vaksin</th>
                    <th>Tanggal</th>
                    <th>Jam Buka</th>
                    <th>Min. Usia</th>
                    <th>Sisa Kuota</th>
                    <th>Action</th>
                    <th>Lokasi</th>
                </tr>
                {data.map((event, index) => (
                    <tr key={event.id}>
                        <td>
                            <b>{event.name}</b>
                        </td>
                        <td>{event.category.name}</td>
                        <td>{Moment(event.date).format('D MMMM Y')}</td>
                        <td>{event.hours}</td>
                        <td>{event.min_age}</td>
                        <td>{event.quota}</td>
                        <td>
                            <Link
                                to={`register/participant/${event.id}`}
                                className="btn btn-primary btn-sm"
                            >
                                Pilih
                            </Link>
                        </td>
                        <td>
                            <span className="address">{event.location}</span></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;