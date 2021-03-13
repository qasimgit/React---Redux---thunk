import { Grid, FormControl, Button, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';


const Form = () => {
    const [name, setName] = useState("")
    const [city, setCity] = useState("")
    const [users, setUsers] = useState([])

    const dispatch = useDispatch()


    const submitHandler = (e) => {
        if (name.length && city.length) {

            console.log("submit handler function")
            e.preventDefault();
            setName("")
            setCity("")
            dispatch({ type: "ADD_USER", payload: { id: uuidv4(), name, city } })
        } else console.log("please fill this form")
    }

    console.log(users)

    return (
        <Grid container >
            <FormControl style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%" }} onSubmit={submitHandler}  >
                <TextField id="outlined-basic" label="Name" variant="outlined" value={name} onChange={(val) => setName(val.target.value)} style={{ margin: 10, width: "30%", marginBottom: 20 }} />
                <TextField id="outlined-basic" label="City" variant="outlined" value={city} onChange={(val) => setCity(val.target.value)} style={{ margin: 10, width: "30%", marginBottom: 20 }} />
                <Button variant="contained" color="primary" style={{ width: "20%" }} onClick={(e) => submitHandler(e)} > Submit</Button>
            </FormControl>
        </Grid >
    )
}

export default Form
