import fotoGue from "../assets/FotoProfile.jpg";

function FotoProfil() {
  return (
    <>
      <img src={fotoGue} alt="Foto Profil" className="foto-profil" />
      <figcaption>Foto aku waktu masih muda 2019</figcaption>
    </>
  );
}

export default FotoProfil;
