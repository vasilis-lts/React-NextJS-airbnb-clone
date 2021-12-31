import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic'
import Head from '../../components/head';
import Nav from '../../components/nav';

function HomePage() {
  const [Index, setIndex] = useState<number>(0);

  useEffect(() => {
    setTimeout(() => {
      setIndex(1)
    }, 3000);
  }, []);

  const Map = dynamic(
    () => import('../../components/map'), // replace '@components/map' with your component's location
    {
      loading: () => <p>A map is loading</p>,
      ssr: false // This line is important. It's what prevents server-side render
    }
  )

  const data = [
    {
      name: "John",
      coordinates: {
        longitude: 40.72260370101827,
        latitude: -73.99323791583221
      }
    },
    {
      name: "Bob",
      coordinates: {
        longitude: 40.72843542344666,
        latitude: -73.94860440141105
      }
    },
    {
      name: "Chris",
      coordinates: {
        longitude: 40.79159996340942,
        latitude: -73.94077957876242
      }
    }
  ];


  return <div className='h100 flex-col' id="DashboardContainer">
    <Head title="Dashboard" />
    <Nav />
    <div className='flex' id="DashboardContent">
      <div id="products" className="h100">
        Products
      </div>
      <Map data={data} index={Index} />
    </div>

    <style jsx>{`
      #products {
        width:45%
      }
      #DashboardContent{
        flex:1
      }
    `}</style>
  </div>
}

export default HomePage