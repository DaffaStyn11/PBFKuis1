import React from "react";
// MENAMPILKAN LIST DATA
const PostMahasiswa = (props) => {
    return (
        <div className="mahasiswa">
            <div className="gambar-artikel">
                <img src="https://cdn3d.iconscout.com/3d/premium/preview/cap-boy-6877450-5638286.png?f=avif&h=700" alt="Gambar Tumbnail Artikel" className="src" />
            </div>
            <div className="konten-mahasiswa">
                <div className="nim-mahasiswa">NIM : {props.nim} </div>
                <p className="nama-mahasiswa">NAMA : {props.nama}</p>
                <p className="alamat-mahasiswa">ALAMAT : {props.alamat}</p>
                <p className="hp-mahasiswa">TELP : {props.hp}</p>
                <p className="angkatan-mahasiswa">ANGKATAN : {props.angkatan}</p>
                <p className="status-mahasiswa">STATUS : {props.status}</p>
                <button className="btn btn-sm btn-danger" onClick={()=> props.hapusMahasiswa(props.idMahasiswa)}>Hapus Mahasiswa</button>
            </div>
        </div>
    )
}

export default PostMahasiswa;