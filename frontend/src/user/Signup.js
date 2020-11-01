import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Layout from '../core/Layout';
import { signup } from '../auth';

const Signup = () => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        error: "",
        success: false
    })

    const { name, email, password, confirmPassword, error, success } = values;

    const handleChange = name => event => {

        setValues({ ...values, error: false, [name]: event.target.value })
    }

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false });
        signup({ name, email, password, confirmPassword }).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, success: false });
            } else {
                setValues({
                    ...values,
                    name: '',
                    email: '',
                    password: '',
                    error: '',
                    success: true
                });
            }
        });
    };


    const signUpForm = () => (
        <form>
            <div>
                <label >Име, Фамилия</label>
                <input onChange={handleChange('name')} type="text"></input>

            </div>
            <div>
                <label>Email адрес</label>
                <input onChange={handleChange('email')} type="email"></input>

            </div>
            <div>
                <label>Парола</label>
                <input onChange={handleChange('password')} type="password" ></input>
            </div>
            <div>
                <label>Повтори парола</label>
                <input onChange={handleChange('confirmPassword')} type="password"></input>
            </div>
            <button onClick={clickSubmit}>Потвърди</button>
        </form>
    );
    const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );

    const showSuccess = () => (
        <div className="alert alert-info" style={{ display: success ? '' : 'none' }}>
            Успешна регистрация. Моля влезте в <Link to="/signin">профила си</Link>
        </div>


    );
    return (<Layout title="Здравей,"
        description="За да направиш поръчка, регистрирай потребителско име с няколко лесни стъпки"
    >
        {showSuccess()}
        {showError()}
        {signUpForm()}

    </Layout>)
}


export default Signup;