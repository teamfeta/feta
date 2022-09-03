import Head from 'next/head'
import Image from 'next/image'
import { useQuery } from '../convex/_generated/react'

import GoogleMapReact from 'google-map-react';
import { filter, useColorModeValue } from '@chakra-ui/react';

// function SimpleMap() {
//   const defaultProps = {
//     center: {
//       lat: 10.99835602,
//       lng: 77.01502627
//     },
//     zoom: 11
//   };
// }

//Anthony Li is a menace to M&T and
// society
// an absolute menace
// thank you
// you're welcome
//Feta is a masterstroke of genius

const styleLight = {
  
}
const styleDark = {
  height: "100vh",
  filter: "invert(90%)"
}
const Home = () => {
  const foodItems = useQuery("listFoodItems") || [];
  console.log(foodItems);

  return (
    <div>
      <Head>
        <title>Feta</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        
        <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyCSxzMYTqfbSHfVOtitKKztGTPQq-KfwwI" }}
            // style={useColorModeValue({styleLight}, {styleDark})}
            defaultCenter={{
              lat: 39.9534148,
              lng: -75.1892429
            }}
            defaultZoom={11}  
          >
            {foodItems.map(foodItem => {
              // For each food item, return an annotation.
              return <div
                key={foodItem._id}
                /* @ts-ignore */
                lat={foodItem.lat}
                /* @ts-ignore */
                lng={foodItem.long}
                style={{
                  color: 'white',
                  background: 'grey',
                  padding: '15px 10px',
                  display: 'inline-flex',
                  textAlign: 'center',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transform: 'translate(-50%, -50%)',
                }}>
                  <img src={foodItem.photo} style={{ width: 50, height: 50 }} />
                </div>
            })}
          </GoogleMapReact>
        </div>
      </main>

      <footer>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
            <Image src="/feta-logo-better.png" alt="Convex Logo" width={90} height={18} />
          </span>
        </a>
      </footer>
    </div>
  )
}

  export default Home;
