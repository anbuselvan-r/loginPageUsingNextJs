"use client"
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import axios from 'axios';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

const ProtectedPage = () => {
  const [data, setData] = useState<User[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  useEffect(() => {
    const username = Cookies.get('username');
    if (!username) {
      router.push('/login');
    }
  }, [router]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
        setData(response.data);
      } catch (err) {
        if (axios.isAxiosError(err) && err.response) {
          setError(err.response.data.message); // Adjust as necessary
        } else {
          setError("An unexpected error occurred.");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const handleLogout = () => {
    Cookies.remove('username');
    router.push('/home');
  };

  return (
    <div>
      <p className='text-right mr-2'>Welcome, {Cookies.get('username')}</p>
      <div className='text-right'>
        <button onClick={handleLogout} className='bg-red-700 rounded-xl text-white w-16'>Logout</button>
      </div>
      <h1 className='text-center'>Data from API</h1>
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Username</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Phone</th>
            <th className="border border-gray-300 px-4 py-2">Website</th>
          </tr>
        </thead>
        <tbody>
          {data ? (
            data.map((user: User) => (
              <tr key={user.id}>
                <td className="border border-gray-300 px-4 py-2">{user.id}</td>
                <td className="border border-gray-300 px-4 py-2">{user.name}</td>
                <td className="border border-gray-300 px-4 py-2">{user.username}</td>
                <td className="border border-gray-300 px-4 py-2">{user.email}</td>
                <td className="border border-gray-300 px-4 py-2">{user.phone}</td>
                <td className="border border-gray-300 px-4 py-2">{user.website}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} className="border border-gray-300 text-center">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProtectedPage;
