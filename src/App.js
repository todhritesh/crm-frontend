import Navbar from './components/Navbar';
import Container from './components/Container';
import InsertPost from './components/InsertPost';
import InsertCategory from './components/InsertCategory';
import { BrowserRouter ,Routes, Route} from 'react-router-dom';
import SingleContentView from './components/SingleContentView';

function App() {


  return (
    <BrowserRouter>

      <Navbar/>
      <Routes>
        <Route path="/insert/post" exact element={<InsertPost />} />
        <Route path="/insert/category" exact element={<InsertCategory/>} />
        <Route path="/" exact element={<Container />} />
        <Route path='/post/:id' exact element={<SingleContentView/>} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
