import React , {useEffect , useState} from "react"
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import './styles/tailwind.css';

function App() {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:8000/")
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, []);

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Home/>
      </div>
    </>
  )
}

export default App
