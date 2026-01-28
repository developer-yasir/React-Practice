import { useState, useEffect } from 'react'
import axios from 'axios'
import './index.css'
import UserCard from './components/UserCard'

function App() {
  const [data, setData] = useState([]);
  const [err, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/users');
        setData(response.data);
      } catch (error) {
        setError(error.message);
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <UserCard />
  )
}

export default App
