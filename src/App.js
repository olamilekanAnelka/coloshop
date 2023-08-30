import './App.css';

import Navbar from './component/navbar/navbar';
import Header from './component/header/header';
import Gallery from './component/gallery/gallery';
import NewArrival from './component/newArrival/newArrival';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Gallery />
      <NewArrival />
    </div>
  );
}

export default App;
