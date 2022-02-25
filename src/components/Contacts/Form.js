import React from 'react';
import {useState} from "react";
import {useDispatch} from "react-redux";
import {addContact,addContacts} from "../../redux/contactSlice";
import {nanoid} from "@reduxjs/toolkit";

function Form(props) {
    const dispatch = useDispatch()
    const [name,setName] = useState("")

    const handleSubmit = (e) => {
            e.preventDefault()
            if(name){
            // dispatch(addContact({id:nanoid(),name}))
            setName( "")
                const names = name.split(',')
                dispatch(addContacts(names.map((name) => ({id: nanoid(), name}))))
        }

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder={"Name"} value={name} onChange={(e)=>setName(e.target.value)}/>
            </form>
        </div>
    );
}

export default Form;
