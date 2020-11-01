import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Layout from "../core/Layout";
import { signin, authenticate, isAuthenticated } from "../auth";


const Signin = () => {
    const [values, setValues] = useState({
        email: "",
        password: "",
        error: "",
        loading: false,
        redirectToReferrer: false
    });




    const { email, password, loading, error, redirectToReferrer } = values;
    const { user } = isAuthenticated();

    const handleChange = name => event => {

        setValues({ ...values, error: false, [name]: event.target.value })
    }

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false, loading: true });
        signin({ email, password }).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, loading: false });
            } else {
                authenticate(data, () => {
                    setValues({
                        ...values,
                        redirectToReferrer: true
                    });
                });
            }
        });
    };



    const signInForm = () => (
        <form>
            <div>
                <div >
                    <input id="email" onChange={handleChange('email')} type="email" placeholder="e-mail адрес"></input>
                </div>
                <div >
                    <input id="password" onChange={handleChange('password')} type="password" placeholder="парола"></input>
                </div>
                <button type="submit" onClick={clickSubmit} >Потвърди</button>
            </div>
        </form>
    );
    const showError = () => (
        <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
        >
            {error}
        </div>
    );

    const showLoading = () =>
        loading && (
            <div className="alert alert-info">
                <h2>Loading...</h2>
            </div>
        );

    const redirectUser = () => {
        if (redirectToReferrer) {
            if (user && user.role === 1) {
                return <Redirect to="/admin/dashboard" />;
            } else {
                return <Redirect to="/user/dashboard" />;
            }
        }
        if (isAuthenticated()) {
            return <Redirect to="/" />;
        }
    };
    return (<Layout title="Здравей,"
        description="За да направиш поръчка, използвай e-mail адрес и парола"
    >
        {showLoading()}
        {showError()}
        {signInForm()}
        {redirectUser()}

    </Layout>)
};

export default Signin;