import Joi from 'joi';
import KartuKemampuan from './KartuKemampuan.jsx';

// Skema validasi 
const itemKemampuanSchema = Joi.object({
  id: Joi.number().required(),
  nama: Joi.string().min(2).required(),
  tingkat: Joi.string().valid('Pemula', 'Menengah', 'Lanjutan').required(),
  deskripsi: Joi.string().required(),
  gambar: Joi.string().allow('', null).optional(),
});

// Skema validasi untuk array 
const daftarKemampuanSchema = Joi.array().items(itemKemampuanSchema).required();

function DaftarKemampuan({ daftarData }) {
  const { error, value: dataTervalidasi } = daftarKemampuanSchema.validate(
    daftarData,
    { abortEarly: false }
  );

  if (error) {
    console.error('Validasi Joi gagal:', error.details);
    return (
      <div
        style={{
          border: '1px solid #ef4444',
          backgroundColor: '#fee2e2',
          color: '#991b1b',
          padding: '12px',
          borderRadius: '8px',
          margin: '16px 0',
        }}
      >
        <strong>Data Kemampuan Tidak Valid (Validasi Joi):</strong>
        <ul style={{ margin: '8px 0 0 20px', padding: 0 }}>
          {error.details.map((detail, index) => (
            <li key={index}>{detail.message}</li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="daftar-kemampuan">
      {dataTervalidasi.map((item) => (
        <KartuKemampuan
          key={item.id}
          nama={item.nama}
          tingkat={item.tingkat}
          deskripsi={item.deskripsi}
          gambar={item.gambar}
        />
      ))}
    </div>
  );
}

export default DaftarKemampuan;