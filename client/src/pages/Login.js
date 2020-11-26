import React, { useState, useRef, useContext } from 'react'
import axios from 'axios'
import styled from "styled-components";
import { UserContext } from '../contexts/UserContext';
import { toast } from "react-toastify";
import twitter from '../twitter.png';

export default function Login(props) {
    const url = "http://localhost:5000/login";

    const signal = useRef(axios.CancelToken.source());

    const { setUser } = useContext(UserContext);

    let [account, setAccount] = useState({
        username: '',
        password: ''
    });
    const [errors, setErrors] = useState(null)

    let handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        account[name] = value;
        setAccount({ ...account, account });
    }

    const github = async (e) => {
        try {
            const res = await axios.get('http://localhost:5000/github', {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true,
                cancelToken: signal.current.token
            })
            console.log(res.data)
            localStorage.setItem('username', res.data.user.username)
            res.data.status && props.history.replace('/')

            if (!res.status) {
                //console.log(res.message)
                setErrors(res.data.message)
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
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!account.username || !account.password) {
            console.error("Please fill in both the fields");
            return toast.error("Please fill in both the fields");
        }

        try {
            const res = await axios.post(url, account, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true,
                cancelToken: signal.current.token
            })
            console.log('login', res)
            // if (!res.data.status) {
            //     toast.error(res.data.message)
            //     setErrors(res.data.message)
            //     console.log(errors)
            //     return;
            // }

            localStorage.setItem('user', JSON.stringify(res.data.user))
            setUser(res.data.user)
            // res.data.status && props.history.replace('/')

            if (!res.status) {
                toast.error(res.data.message)
                setErrors(res.data.message)
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
        <LoginContainer className="col-sm-10 col-md-10 col-lg-5" >
            <img src={twitter} alt="logo" className="logo" height="40"/>

            <h4 className="main-title">Log in to Twitter</h4>
            <form onSubmit={e => { handleSubmit(e) }}>
                <div className="input_container">
                    <label htmlFor="username" className="l text-capitalize"> username</label>
                    <input required type="text" id="username" name="username" value={account.username} onChange={handleChange} />
                </div>
                <br />
                <div className="input_container">
                    <label htmlFor="password" className="l text-capitalize"> password</label>
                    <input required type="text" id="password" name="password" value={account.password} onChange={handleChange} />
                </div>
                <p>{errors}</p>
                <button className="submit login" type="submit"  disabled={account.username.length > 0 && account.password.length > 0 ? false : true}>Log in</button>
                <br />
                <div className="small">
                    <span className="">Forgot Password &nbsp; &middot;</span>
                    <span>&nbsp; Sign up for Twitter</span>
                </div>
            </form>
            <button onClick={github} className="submit github">Github Login</button>
        </LoginContainer>
    )
}

const LoginContainer = styled.div`
max-width: 500px;
margin: 0 auto;
text-align: center;
.logo, .main-title, .small{
    margin: 1.25rem auto;
}
.main-title{
    width: max-content;
    font-weight: 700;
}
.submit{
    width:100%;
    border:none;
    padding: .7rem 0;
    color: var(--mainWhite);
    font-weight: 800;
    margin: 1.25rem 0 0 0;
}
.login{
    background-color: #1da1f2;
    border-radius: 1.5rem;
}
.submit:disabled {
    background: var(--disabledBlue);
}
.github{
    background-color: var(--grey);
}
label{
    color: var(--grey);
    float: left !important;
}
input{
    outline: none;
    display:block;
    border: none;
    width:100%;
    background-color: transparent;
}
input:focus:-internal-autofill-selected {
    background:none;
    background-color: transparent !important;
}
.input_container{
    padding: 0 .5rem;
    border-bottom: 2px solid var(--grey);
    background-color: var(--sidebarBg);
}
.input_container:focus-within {
    border-color: var(--mainBlue);
  }
.input_container:focus-within label{
    color: var(--mainBlue);
}
.small{
    width: max-content;
    color: #1da1f2;
    font-weight: 600;
}
// input:focus:invalid {
//     border: 1px solid red;
//     outline: none;
//     }


p {
    color: red;
}

`;
