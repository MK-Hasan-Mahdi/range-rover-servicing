import React from 'react';
import google from '../../../images/google.png';
import facebook from '../../../images/facebook.png';
import github from '../../../images/github.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

    const navigate = useNavigate();
    let errorElement;
    if (error || error1) {
        errorElement = <p>Error: {error?.message} {error1?.message}</p>;
        // console.log(errorElement);
    }

    if (user || user1) {
        navigate('/home');
    }

    return (
        <div>
            <div className=' d-flex align-items-center'>
                <div style={{ height: '2px' }} className='bg-primary w-50'></div>
                <p className=' m-2 px-2'>OR</p>
                <div style={{ height: '2px' }} className=' bg-primary w-50'></div>
            </div>
            {errorElement}
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-primary mx-auto d-block my-2 w-50'>
                    <img style={{ height: '30px' }} src={google} alt="" />
                    <span className=' px-2'>Google Sign In</span>
                </button>
                <button className='btn btn-primary mx-auto d-block my-2 w-50'>
                    <img style={{ height: '30px' }} src={facebook} alt="" />
                    <span className=' px-2'>Facebook Sign In</span>
                </button>
                <button onClick={() => signInWithGithub()} className='btn btn-primary mx-auto d-block w-50'>
                    <img style={{ height: '30px' }} src={github} alt="" />
                    <span className=' px-2'>Github Sign In</span>
                </button>
            </div>

            {/* <div className=''>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-info w-50 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={google} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
                <button className='btn btn-info w-50 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={facebook} alt="" />
                    <span className='px-2'>Facebook Sign In</span>
                </button>
                <button
                    onClick={() => signInWithGithub()}
                    className='btn btn-info w-50 d-block mx-auto'>
                    <img style={{ width: '30px' }} src={github} alt="" />
                    <span className='px-2'>Github Sign In</span>
                </button>
            </div> */}
        </div>
    );
};

export default SocialLogin;