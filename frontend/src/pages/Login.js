import React, { useState, useRef } from 'react'
import axios from 'axios'
import styled from "styled-components";

export default function Login(props) {

    const url = "http://localhost:5000/logn";

    const signal = useRef(axios.CancelToken.source());

    let [account, setAccount ] = useState({
        username: '',
        password: ''
    });
    const [ errors, setErrors ] = useState(null)

    let handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        account[name] = value;
        setAccount({ ...account, account });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let { username, password } = account

        console.log(username, password)
        try {
            const res = await axios.post(url, {
                username, password
            }, { cancelToken: signal.current.token, })
            console.log(res)
            res.data.status && props.history.replace('/')

            if (!res.status) {
                console.log(res.message)
                setErrors(res.message)
                return;
            }
        } catch (err) {
            if (axios.isCancel(e)) {
                console.log('Get request canceled');
                setErrors(e.message)
            } else {
                console.log(err)
                setErrors(err.message)
            }
        }

        
        return () => {
            console.log('unmount and cancel running axios request');
            signal.current.cancel('Operation canceled by the user.');
            setAccount({ ...account, username: '', password: '' });
          };
    }

    return (
        <LoginContainer className="home col-sm-10 col-md-10 col-lg-5" >
            <h3>Login</h3>
            <form onSubmit={e => { handleSubmit(e) }}>
                <input type="text" name="username" value={account.username} onChange={handleChange} placeholder="username" />
                <input type="text" name="password" value={account.password} onChange={handleChange} placeholder="password" />
                <button className="btn">Sign in</button>
                <p>{errors}</p>
            </form>
        </LoginContainer>
    )
}

const LoginContainer = styled.div`
p {
    color: red;
}

`;
