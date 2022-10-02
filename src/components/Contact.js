import React, { useState } from 'react';
import { validateEmail, capitalizeFirstLetter } from '../utils/helpers';

export default function Contact() {
    const [formState, setFormState] = useState({ 
        name: "",email: "", message: "" 
    });


    const [errorMessage, setErrorMessage] = useState('');

    function myParamaters(e) {
        const nameSet = capitalizeFirstLetter(e.target.name)
        
        if(e.target.name === 'email'){
            const isValid = validateEmail(e.target.value);
            if(!isValid){
                setErrorMessage('Not a valid email! Please try again.');
            } else {
                setErrorMessage('');
            }
        } else {
            if(!e.target.value) {
                setErrorMessage(`${nameSet} needs to be filled out.`);
            } else {
                setErrorMessage('');
            }
        }
        if(!errorMessage){
            setFormState({...formState, [e.target.name]: e.target.value });
        }
    }


    const submit = (e) => {
        e.preventDefault();

            if(!errorMessage) {
            setFormState({ [e.target.name]: e.target.value});
            console.log(formState);
        }
    }

    return(
        <div name='contact'>
            <form onSubmit={submit} className="contact-form">
                <div className="contact-div">
                    <h1>Contact</h1>
                    <br />
                    <h4>Full Name</h4>
                    <input placeholder='John Appleseed' className="text-field" type="text" name="name" required onBlur={myParamaters}/>
                    <br/>
                    <br/>
                    <h4>Email</h4>
                    <input placeholder='apple@gmail.com' className="text-field" type="text" name="email" required onBlur={myParamaters}/>
                </div>
                <div className="message">
                <br/>
                    <h4>Message</h4>
                    <textarea placeholder='Wow this is amazing!' name="message" />
                    <br/>
                    <input type="submit" value="Send" />
                </div>
            </form>
        </div>
    )
}
