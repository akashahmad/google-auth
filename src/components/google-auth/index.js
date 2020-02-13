import React from 'react'
import Style from './style'
import GoogleLogin from 'react-google-login';
import {googleClientId, apiPath} from '../config'
import axios from 'axios'
export default () => {
    const responseGoogle = (res) => {
        let payLoad = res.tokenObj.access_token;
        axios.post(apiPath + "/users/oauth/google", payLoad)
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.log(err);
            });
    };
    return (
        <div>
            <GoogleLogin
                clientId={googleClientId}
                render={renderProps => (
                    <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
                        <div className="google-btn">
                            <div className="google-icon-wrapper">
                                <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                                <p className="btn-text"><b>Sign in with google</b></p>
                            </div>
                        </div>
                    </button>
                )}
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
            <Style/>
        </div>
    );
}