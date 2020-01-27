import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';

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
    const [pet, setPet] = useState ({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/pet/" + props.id)
            .then(res => setPet({
                ...res.data
            }))
    }, [])
    const deletePet = (petId) => {
        axios.delete('http://localhost:8000/api/pet/' + petId)
            .then(res => {
                console.log(res);
                navigate("/pets")
            })
    }
    return(
        <div className='container'>
            <div className='jumbotron'>
                    <Heading fontSize = {[5]}
                    >Details about {pet.name} </Heading>
                    <Link      to ='/pets'
                        className = 'btn btn-outline-primary'
                            style = {{
                                border : 'none',
                                fontSize : '18px'
                            }}
                    >Back to Home</Link>
                    <hr />
                    <br />
                    <Text fontSize = {[4]} fontWeight='bold'>Pet Type:</Text>
                    <Text fontSize = {[4]}>{pet.type}</Text>
                    <br />
                    <Text fontSize = {[4]} fontWeight='bold'>Description:</Text>
                    <Text fontSize = {[4]}>{pet.description}</Text>
                    <br />
                    <Text fontSize = {[4]} fontWeight='bold'>Skills:</Text>
                    <Text fontSize = {[4]} fontWeight='bold'>Skill 1:</Text>
                    <Text fontSize = {[4]}>{pet.skill1}</Text>
                    <Text fontSize = {[4]} fontWeight='bold'>Skill 2:</Text>
                    <Text fontSize = {[4]}>{pet.skill2}</Text>
                    <Text fontSize = {[4]} fontWeight='bold'>Skill 3:</Text>
                    <Text fontSize = {[4]}>{pet.skill3}</Text>   
                    <br />
                    <button onClick = { (e) => {deletePet(pet._id)}}
                          className = 'btn btn-outline-danger'>
                    Adopt this pet!
                    </button>
            </div>
        </div>
    )
}