import JudulBagian from "./JudulBagian.jsx";
import DaftarKemampuan from "./DaftarKemampuan.jsx";
import Kemampuan from "../data.js";

function KontenUtama() {
  return (
    <main className="konten-utama">
      <JudulBagian teks="Daftar Bahasa Pemrograman" />
      <DaftarKemampuan daftarData={Kemampuan} />
    </main>
  );
}

export default KontenUtama;
