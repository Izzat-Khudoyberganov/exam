import { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';

import 'react-loading-skeleton/dist/skeleton.css';
import './App.css';
import { Card } from './component';

function App() {
  const [data, setData] = useState([]);

  async function getData() {
    await fetch(`${import.meta.env.VITE_API_URL}/products`)
      .then((res) => res.json())
      .then((json) => setData(json));
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <div className="grid grid-cols-3 gap-[30px] mt-20">
        {data.length
          ? data.map((el) => (
              <Card key={el.id} {...el}/>
            ))
          : Array.from({ length: 12 }).map((el) => (
              <Skeleton
                key={el}
                width={370}
                height={130}
              />
            ))}
      </div>
    </div>
  );
}

export default App;
