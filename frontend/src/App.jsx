import React , {useEffect , useState} from "react"
import './styles/tailwind.css';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
          <p className="text-green-700 text-center">{data}</p>
        </div>
      </div>
    </>
  )
}

export default App
