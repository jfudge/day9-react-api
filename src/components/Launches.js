import { useState, useEffect } from 'react';
import axios from 'axios'; // Import the axios library


const Launches = () => {
  // Create a state for the launches data
  const [launches, setLaunches] = useState([]);

  // Call the SpaceX launches API when the Launches component mounts
  useEffect(() => {
    console.log('Launches component mounts');

    // To prevent flickers, you want your app to set a minimum load time
    setTimeout(() => {
      // Call the launches API
      axios.get('https://api.spacexdata.com/v4/launches/past')
      .then((response) => {
        // Handle the successful response
        // console.log(response);
        const { data } = response;

        // You need to make this data available to the Component's JSX
        // When we get the API response with the appropriate data
        // update the state, the component will re-render with the state data saved (temp)
        setLaunches(data);
      })
      .catch((error) => {
        // Handle any errors
        console.log(error.response);
      }).then(() => {
        console.log('More!');
      });
    }, 1500); // time is set in milliseconds
  }, []); // Put an empty dependency array to simulate mounting

  console.log(launches);

  return (
    <div>
      {launches.length === 0 ? (
        <div className="text-center my-5">
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Flight Number</th>
              <th>Name</th>
              <th>Details</th>
              <th>Success</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {launches.map(launch => (
              <tr key={launch.id}>
                <td>{launch.flight_number}</td>
                <td>{launch.name}</td>
                <td>{launch.details}</td>
                <td>{launch.success ? 'Yes' : 'No'}</td>
                <td>{launch.date_local}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Launches;
