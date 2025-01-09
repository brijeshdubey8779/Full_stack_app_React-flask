import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);  // Keep data as `null` initially
  const [loading, setLoading] = useState(true);  // Loading state
  const [error, setError] = useState(null);  // Error state

  useEffect(() => {
    // Fetch data from your API
    fetch('http://127.0.0.1:5000/api/data')
      .then((res) => res.json())
      .then((data) => {
        setData(data);  // Store the data in state
        setLoading(false);  // Set loading to false after the data is fetched
      })
      .catch((err) => {
        setError(err);  // Set error state if there's a fetch error
        setLoading(false);  // Set loading to false if there's an error
      });
  }, []);  // Empty dependency array ensures this runs only once (on mount)

  // Check if data is loading or there's an error
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  // Check if data is an object or array
  const renderData = Array.isArray(data) ? data : [data];  // Make sure data is an array

  return (
    <div>
      <h1 className="text-3xl font-bold">User List</h1>
      <ul>
        {/* Map over data (even if it's a single object, we'll make it an array) */}
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
