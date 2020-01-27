import React, { useState, useEffect } from 'react';
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
import {
    Label,
    Input,
    Select,
    Textarea,
    Radio,
    Checkbox,
} from '@rebass/forms';

export default props => {

                         const { id } = props,
                      [name, setName] = useState(),
                      [type, setType] = useState(),
        [description, setDescription] = useState(),
                  [skill1, setSkill1] = useState(),
                  [skill2, setSkill2] = useState(),
                  [skill3, setSkill3] = useState();

        useEffect(() => {
        axios.get('http://localhost:8000/api/pet/' + id)
        .then(res => {
            setName(res.data.name);
            setType(res.data.type);
            setDescription(res.data.description);
            setSkill1(res.data.skill1);
            setSkill2(res.data.skill2);
            setSkill3(res.data.skill3);
        })
        }, [])

        const [errors, setErrors] = useState({});
        const updatePet = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/pet/' + id, {
        name,
        type,
        description,
        skill1,
        skill2,
        skill3
        })
        .then(res => {
            if(res.data.errors) {
                setErrors(res.data.errors);
            }
            else {
            console.log(res);
            navigate('/pets')
            }
            })
        }


    return (
        <div className = 'container'>
        <div className = 'jumbotron'>
        <Heading fontSize ={[5]}>Edit this Pet</Heading>
        <br />
        <Link to = '/pets'
            className = 'btn btn-outline-primary'
            style = {{
                border : '0',
            }}
        >Cancel</Link>
        <hr />
        <form onSubmit = { updatePet }>
            <p>
                <Label>Pet Name:</Label>
                <Input     type = 'text'
                    placeholder = 'name'
                          value = {name}
                       onChange = { (e) => setName(e.target.value) }
                          style = {{
                              borderRadius : '10px'
                          }}
                       />
                <span style = {{
                    color : 'red',
                    display : 'block',
                }}>{errors.name ? errors.name.message: ''}</span>
            </p>
            <p>
                <Label>Pet Type:</Label>
                <Input     type = 'text'
                    placeholder = 'type'
                          value = {type}
                       onChange = { (e) => setType(e.target.value) }
                          style = {{
                            borderRadius : '10px'
                        }}
                       />
                <span style = {{
                    color : 'red',
                    display : 'block',
                }}>{errors.type ? errors.type.message: ''}</span>
            </p>
            <p>
                <Label>Description:</Label>
                <Input     type = 'text'
                    placeholder = 'description'
                          value = {description}
                       onChange = { (e) => setDescription(e.target.value) }
                          style = {{
                            borderRadius : '10px'
                        }}
                       />
                <span style = {{
                        color : 'red',
                        display : 'block',
                    }}>{errors.description ? errors.description.message: ''}</span>
            </p>
            <p>
                <Label>Skills:</Label>
            </p>
            <Label style = {{
                marginLeft : '2%'
            }}>Skill 1:</Label>
            <Input         type = 'text'
                    placeholder = 'skill 1'
                          value = {skill1}
                       onChange = { (e) => setSkill1(e.target.value) }
                          style = {{
                            borderRadius : '10px',
                            marginBottom : '1%',
                            marginLeft : '2%'
                        }}/>
            <Label style = {{
                marginLeft : '2%'
            }}>Skill 2:</Label>
            <Input         type = 'text'
                    placeholder = 'skill 2'
                          value = {skill2}
                       onChange = { (e) => setSkill2(e.target.value) }
                          style = {{
                            borderRadius : '10px',
                            marginBottom : '1%',
                            marginLeft : '2%'
                        }}/>
            <Label style = {{
                marginLeft : '2%'
            }}>Skill 3:</Label>
            <Input         type = 'text'
                    placeholder = 'skill 3'
                          value = {skill3}
                       onChange = { (e) => setSkill3(e.target.value) }
                          style = {{
                            borderRadius : '10px',
                            marginLeft : '2%'
                        }}/>
            <br />
            <p>
                <input type = 'submit'
                  className = 'btn btn-outline-primary'
                      value = 'Edit Pet'
                      style = {{
                          borderRadius : '8px',
                      }} />
            </p>
        </form>
        

    </div>
    </div>
    )}