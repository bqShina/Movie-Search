import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Navigation } from './components/Navigation';
import { Heading } from './components/Heading';
import { Footer } from './components/Footer';
import { SearchArea } from './components/SearchArea';



function App() {
  return (
    <div>
      <Navigation />
      <Heading />
      <SearchArea />
      <Footer />
    </div>
  );
}

export default App;
