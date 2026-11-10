import { createRoot } from 'react-dom/client';
import App from './App';

const elemenWadah = document.getElementById('root');
const root = createRoot(elemenWadah);

root.render(<App />);