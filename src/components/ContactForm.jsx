import React, { useState } from 'react';


// Contact form component with validation

function ContactForm() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' }); //Form data state
    const [errors,setErrors] = useState({}); //Error state for validation

    //Handle form field changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    //Validate email format
    const validateEmail = (email) => /\S+@\S+\.\S+/.test(email); 


    //Handle form sunmissionand validate required fields
    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Invalid email address';
        }
        if (!formData.message) newErrors.message = 'Message is required';

        setErrors(newErrors); //Update errors
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input type="text" name="name" onChange={handleChange} />
                    {errors.name && <p>{errors.name}</p>} {/`* Display name error */}
            </div>
            <div>
                <label>Email</label>
                <input type="email" name="email" onChange={handleChange} />
                {errors.email && <p>{errors.email}</p>} {/* Display email error */}
            </div>
            <div>
                <label>Message</label>
                <textarea name="message" onChange={handleChange}></textarea>
                {errors.message && <p>{errors.message}</p>} {/* Display message error */}
            </div>
            <button type="submit">Send</button>
        </form>
            
    );
}

export default ContactForm;