import React, { useState } from 'react';
import './App.scss';
import hero from '../images/hero-desktop.jpg';
import logo from '../images/logo.svg';
import arrow from '../images/icon-arrow.svg';
import error from '../images/icon-error.svg';

function App(){
    const [showError, setError] = useState('hide');
    const [email, setEmail] = useState('');

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if(email.includes('@') && email.includes('.com')){
            setError('hide');
            setEmail('');
        }else{
            setError('active')
        }
    }

    return(
        <div className='App'>
            <div className='App-iconContainer'>
                <img src={logo} alt="icon"/>
            </div>
            <div className='App-content'>
                <div className='App-content__form'>
                    <h3 className='App-content__form-title'>
                        <span>We're</span>
                        coming<br/>soon
                    </h3>
                    <p className='App-content__form-sub'>Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</p>
                    <form onSubmit={handleSubmit}>
                        <div className='inputContainer'>
                            <input type="text" placeholder='Email Address' value={email} onChange={(evt) => setEmail(evt.target.value)} />
                            <button type='submit'>
                                <img src={arrow} alt="arrow icon" />
                            </button>
                            <div className={`inputContainer__error ${showError}`}>
                                <img src={error} alt="error icon" />
                            </div>
                            <div className={`inputContainer__msg ${showError}`}>
                                <p>Please provide a valid email</p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className='App-imgContainer'>
                <img src={hero} alt="woman" />
            </div>
        </div>
    );
}

export default App;