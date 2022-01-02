import dynamic from 'next/dynamic'
import Head from '../../components/head';
import Nav from '../../components/nav';
import { Box } from '@chakra-ui/react';
import PropertiesAvailable from '../../components/PropertiesAvailable';

function HomePage() {

  const Map = dynamic(
    () => import('../../components/map'), // replace '@components/map' with your component's location
    {
      loading: () => <p>A map is loading</p>,
      ssr: false // This line is important. It's what prevents server-side render
    }
  );

  return <div className='h100 flex-col' id="DashboardContainer">
    <Head title="Dashboard" />
    <Nav />
    <div className='flex' id="DashboardContent">
      <div id="products" className="h100">
        <Box p='2'>
          <PropertiesAvailable />
        </Box>
      </div>
      <Map />
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