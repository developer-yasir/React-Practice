import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const UserCard = () => {
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
        <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-green-600">Users List</h1>

      {err && <p className="text-red-500 text-center mb-4">{err}</p>}

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map(user => (
          <div
            key={user.id}
            className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition"
          >
            <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
            <p className="text-gray-500 mb-2 text-green-600">@{user.username}</p>
            <span className="inline-block px-3 py-1 text-sm bg-green-100 text-green-600 rounded-full">
              User ID: {user.id}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UserCard;
