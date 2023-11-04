import Store from '../store/StoreContext';
import Router from './Router'
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/legacy/build/pdf.worker.min.js',
  import.meta.url,
).toString();

function App() {

  return (
    <Store>
      <Router />
    </Store>
  )
}

export default App
