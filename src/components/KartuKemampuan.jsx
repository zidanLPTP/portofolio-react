function KartuKemampuan({ nama, tingkat, deskripsi, gambar }) {
  return (
    <div className="kartu-kemampuan">
      {gambar && <img src={gambar} alt={`Logo ${nama}`} className="ikon-kemampuan" />}
      <div className="teks-kemampuan">
        <h3>{nama}</h3>
        <p><strong>Tingkat:</strong> {tingkat}</p>
        <p>{deskripsi}</p>
      </div>
    </div>
  );
}

export default KartuKemampuan;