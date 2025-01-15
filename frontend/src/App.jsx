import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    fetch('http://127.0.0.1:5000/api/data')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const renderData = Array.isArray(data) ? data : [data];

  return (
    <div>
      <h1 className="text-3xl font-bold">User List</h1>
      <ul>
        {renderData.map((user) => (
          <li key={user._id}>
            <strong>Name:</strong> {user.name} <br />
            <strong>Email:</strong> {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
