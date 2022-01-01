import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic'
import Head from '../../components/head';
import Nav from '../../components/nav';
import PropertyListItem from '../../components/PropertyListItem';
import { Box, Stack, Text } from '@chakra-ui/react';

function HomePage() {
  const [Index, setIndex] = useState<number>(0);
  const [data, setdata] = useState<any>([
    {
      id: 1,
      name: "Preiswere Wohnung",
      pricePerNight: 39,
      coordinates: {
        longitude: 48.192103427883985,
        latitude: 16.368900854039936
      }
    },
    {
      id: 2,
      name: "Near the center convenient room",
      pricePerNight: 43,
      coordinates: {
        longitude: 48.201180617995654,
        latitude: 16.356884979513303
      }
    },
    {
      id: 3,
      name: "Bright room in artsy flat",
      pricePerNight: 42,
      coordinates: {
        longitude: 48.18863645868057,
        latitude: 16.4028060276171
      }
    },
    {
      id: 4,
      name: "Private cozy room",
      pricePerNight: 41,
      coordinates: {
        longitude: 48.221947147570326,
        latitude: 16.361582358775895
      }
    }
  ]);

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
  );

  return <div className='h100 flex-col' id="DashboardContainer">
    <Head title="Dashboard" />
    <Nav />
    <div className='flex' id="DashboardContent">
      <div id="products" className="h100">
        <Box p='2'>
          <Box p='2'>
            <Stack spacing={1}>
              <Text fontSize='md'>{data.length} stays in map area</Text>
              <Text fontSize='md'>Review COVID-19 travel restrictions before you book.</Text>
            </Stack>
          </Box>
          <br />
          {data.length ?
            <div id="properties-container">
              {data.map(entry => {
                return (
                  <PropertyListItem
                    key={entry.id}
                    data={entry}
                  />
                )
              })}
            </div>
            : null}
        </Box>
      </div>
      <Map data={data} />
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