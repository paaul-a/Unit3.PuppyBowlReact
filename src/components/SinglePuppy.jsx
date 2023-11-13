import { useState, useEffect } from "react"
import Axios from 'axios'

import { useParams } from "react-router-dom"

function SinglePuppy() {

  const [ puppy, setPuppy ] = useState({})

  const { id } = useParams()
  console.log(id)

  useEffect(() => {
    fetchSinglePuppy();

  }, [])

  async function fetchSinglePuppy() {
    let API = 'https://fsa-puppy-bowl.herokuapp.com/api/2309-FTB-ET-WEB-FT';
    try { 
      const { data: json } = await Axios.get(`${API}/players/${id}`);

      setPuppy(json.data.player)

      
    } catch(err) {
      console.error(err.message)
    }

  }
  // console.log(puppy.id)

  // if (puppy.id) {
  //   return <h1>good case</h1>

  // } else {
  //   return <h1>no puppy found</h1>
  // }

  return <div className='details'>
    {
      puppy.id ? 
        <div className="single-puppy">

          <h2>{puppy.name}</h2>
          <h3>{puppy.id}</h3>
          <h3>Breed: {puppy.breed}</h3>
          <h4>Status: {puppy.status}</h4>
          <img src={puppy.imageUrl}/>
        </div>
      :
        <h1>No Puppy Was Found with id: {id}. Try agin.</h1>

    }
  </div>
}

export default SinglePuppy