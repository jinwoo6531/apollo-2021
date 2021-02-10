import React from 'react'
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const GET_MOVIES = gql`
{
  movies {
    id
    medium_cover_image
  }
}
`

const Home = () => {
    const { loading } = useQuery(GET_MOVIES); 
    return (
        <div>
          !  
        </div>
    )
}

export default Home
