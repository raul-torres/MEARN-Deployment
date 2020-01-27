import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Router, Link } from '@reach/router';

import PetForm from '../components/PetForm';
import PetList from '../components/PetList';
import PetDetails from '../components/PetDetails';
import PetUpdate from '../components/PetUpdate';

export default () => {
    const [animals, setAnimals] = useState([]),
            [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/pet')
            .then(res =>{ 
                setAnimals(res.data)
                setLoaded(true);
            });
    }, [])

    const createPet = pet => {
        axios.post('http://localhost:8000/api/pet', pet)
            .then(res=>{
                setAnimals([...animals, res.data]);
            })
            .catch(err=>console.log(err))
    }
    return (
        <div>
            <Router>
            <PetForm path = '/pets/new' onSubmitProp={createPet} 
            initialName="" 
            initialType=""
            initialDescription=""
            initialSkill1=""
            initialSkill2=""
            initialSkill3=""/>
           <PetList path = 'pets' animals={animals}/>
            <PetDetails path = '/pets/:id' />
            <PetUpdate path = '/pets/:id/edit'/>
            </Router>
        </div>
    )
}