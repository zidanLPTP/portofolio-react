import logoJs from './assets/javascript.png';
import logoPython from './assets/python.png';
import logoHtml from './assets/html.png';
import logoCss from './assets/css.png';
import logoReact from './assets/react.png';

const kemampuan = [
    {
        id: 1,
        nama: 'JavaScript',
        tingkat: 'Lanjutan',
        deskripsi: 'Bahasa pemrograman utama untuk pengembangan web reaktif.',
        gambar: logoJs
    },
    {
        id: 2,
        nama: 'Python',
        tingkat: 'Menengah',
        deskripsi: 'Digunakan untuk pengolahan data.',
        gambar: logoPython
    },
    {
        id: 3,
        nama: 'HTML',
        tingkat: 'Menengah',
        deskripsi: 'Bahasa Markup sebagai basic menjadi web developer.',
        gambar: logoHtml
    },
    {
        id: 4,
        nama: 'CSS',
        tingkat: 'Menengah',
        deskripsi: 'Bahasa Styling sebagai basic menjadi web developer.',
        gambar: logoCss
    },
    {
        id: 5,
        nama: 'React JS',
        tingkat: 'Lanjutan',
        deskripsi: 'Framework React JS menjadi basic menjadi frontend developer.',
        gambar: logoReact
    }
];

export default kemampuan;