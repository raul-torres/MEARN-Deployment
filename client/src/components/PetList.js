import React, { useEffect, useState } from 'react'
import { Link } from '@reach/router';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Box,
    Card,
    Image,
    Heading,
    Text,
    Button
  } from 'rebass';

export default props => {
    const [animals, setAnimals] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/pet')
            .then(res => setAnimals(res.data));
    }, [])
    return(
        <div className = 'contianer'>
            <div className = 'jumbotron'>
                <Heading fontSize={[5]}>These pets are looking for a home!</Heading>
                <p></p>
                <Link to = '/pets/new'>Add a pet to the Shelter</Link>
                <p></p>
                <br />
                    <table className='table table-striped'>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                    {
                    animals.map( pet => 
                    <tr key={pet._id}>
                        <td>{pet.name}</td>
                        <td>{pet.type}</td>
                        <td>
                        <Link to = {"/pets/" + pet._id} 
                        >Details  </Link>
                        <span style={{fontSize : '25px'}}>||</span>
                        <Link to = {"/pets/" + pet._id + '/edit'} 
                        >  Edit</Link>
                        </td>
                    </tr>
                    )
                }   
                </table>     
            </div>
        </div>
    )
}