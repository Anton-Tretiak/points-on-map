import React, { useEffect, useState } from 'react';
// import { Data } from './Types/database_data';

export const App: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async() => {
    try {
      const response = await fetch('http://localhost:5000/data');
      const jsonData = await response.json();

      setData(jsonData);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error fetching data', error);
    }
  };

  return (
    <div className="App">
      {data.map((item: any) => {
        return (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <span>latitude: {item.latitude}</span>
            <br/>
            <span>longitude: {item.longitude}</span>
          </div>
        );
      })}
    </div>
  );
};
