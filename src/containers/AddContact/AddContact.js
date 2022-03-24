import React, {useContext, useEffect, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import {Box, Checkbox, FormControl, FormControlLabel, InputLabel, NativeSelect, Radio, RadioGroup} from "@mui/material";
import FormLabel from "@material-ui/core/FormLabel";
import {ToastContainer, toast} from 'react-toastify';
import {useNavigate} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import {GlobalContext} from '../../context/GlobalContext';
import InputField from "../../components/InputField";



const AddContact = () => {

    const navigate = useNavigate();

    const{ contacts,addContact} = useContext(GlobalContext)

    //state hooks
    const [newsletter, setNewsletter] = useState(false)
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [fathersName, setFathersName] = useState('')
    const [email, setEmail] = useState('')
    const [profession, setProfession] = useState('')
    const [gender, setGender] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();
        toast("Successfully added!");
        const newContact = {
            id: contacts.length + 1,
            newsletter,
            name,
            surname,
            fathersName,
            email,
            profession,
            gender
        };
        addContact(newContact);
        setTimeout(() => {
            navigate('/contacts');
        }, 1000)

    };

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <h1>New Contact</h1>
                        <div className='main'>
                            <div className='form-container'>
                                <form autoComplete="off" className='form-group'
                                      onSubmit={onSubmit}>
                                    <div className='row'>
                                        <div className='col-6'>
                                            <InputField
                                                type="text"
                                                value={name}
                                                placeholder="Enter your name"
                                                label="Name"
                                                name="name"
                                                onChange={(event) => setName(event.target.value)}
                                            />
                                        </div>
                                        <div className='col-6'>
                                            <InputField
                                                type="text"
                                                value={surname}
                                                placeholder="Enter your Surname"
                                                label="Surname"
                                                name="surname"
                                                onChange={(event) => setSurname(event.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-6'>
                                            <InputField
                                                type="text"
                                                value={fathersName}
                                                placeholder="Enter your Father's Name"
                                                label="Father's Name"
                                                name="fathersName"
                                                onChange={(event) => setFathersName(event.target.value)}
                                            />
                                        </div>
                                        <div className='col-6'>
                                            <InputField
                                                type="email"
                                                value={email}
                                                placeholder="Enter your Email Address"
                                                label="Email"
                                                name="email"
                                                onChange={(event) => setEmail(event.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <ToastContainer position='top-center'/>
                                    <br/>
                                    <FormControl>
                                        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                                        <RadioGroup
                                            aria-labelledby="demo-radio-buttons-group-label"
                                            defaultValue="female"
                                            name="radio-buttons-group"
                                            value={gender}
                                            aria-required
                                        >
                                            <FormControlLabel name="gender" id="Female"
                                                              onChange={(event) => setGender(event.target.value)}
                                                              value="female" control={<Radio/>} label="Female"/>
                                            <FormControlLabel name="gender" id="Male"
                                                              onChange={(event) => setGender(event.target.value)}
                                                              value="male" control={<Radio/>} label="Male"/>
                                            <FormControlLabel name="gender" id="Other"
                                                              onChange={(event) => setGender(event.target.value)}
                                                              value="other" control={<Radio/>} label="Other"/>
                                        </RadioGroup>
                                    </FormControl>
                                    <br/>
                                    <Box sx={{minWidth: 120}}>
                                        <FormControl>
                                            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                                Profession
                                            </InputLabel>
                                            <NativeSelect
                                                required
                                                defaultValue={'Developer'}
                                                inputProps={{
                                                    name: 'profession',
                                                    id: 'uncontrolled-native',
                                                }}

                                                onChange={(event) => setProfession(event.target.value)}
                                            >
                                                <option id='developer' name='profession'>Developer</option>
                                                <option id='designer' name='profession'>Designer</option>
                                                <option id='teacher' name='profession'>Teacher</option>
                                                <option id='doctor' name='profession'>Doctor</option>
                                            </NativeSelect>
                                        </FormControl>
                                        <Checkbox
                                            onChange={(event) => setNewsletter(event.target.checked)}
                                            sx={{'& .MuiSvgIcon-root': {fontSize: 28}}}
                                        />
                                    </Box>
                                    <br/>
                                    <Grid item>
                                        <button type="submit" className='btn btn-success btn-md'>
                                            ADD
                                        </button>
                                    </Grid>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}



export default AddContact


