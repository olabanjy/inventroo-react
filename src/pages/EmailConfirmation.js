import React,{useEffect} from 'react';
import {useDispatch } from 'react-redux';
import {registrationComplete} from '../store/actions/register';
import {getModules} from '../store/actions/modules';
const EmailConfirmation = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(registrationComplete());
    
    document.body.classList.remove("2-columns");
    document.body.classList.remove("fixed-navbar");
    document.body.classList.remove("vertical-layout");
    document.body.classList.remove("vertical-menu-modern");
    },[]);

    return (
        <div className="app-content content">
      <div className="content-overlay"></div>
      <div className="content-wrapper">
        <div className="content-header row">
        </div>
        <div className="content-body">
            <div className="row justify-content-center align-items-center mt-5">
            <img src="/app-assets/images/logo/troo-logo-color2.png" 
                  alt="branding logo" className="mb-2"/>
            </div>
            <div className="row justify-content-center mt-5">
                <i className="feather icon-mail color-main" style={{fontSize:"5rem"}}></i>
            </div>
            
    <h3 className="d-flex justify-content-center mb-1 m-auto"><strong>Great, You are almost done!</strong></h3>  
    <section className="row flexbox-container">
    <div className="col-12 d-flex align-items-center justify-content-center mt-1">
        <p>A confirmation email has been sent to your email</p>
        
    </div>
    
</section>
        </div>
      </div>
    </div>
    )
}

export default EmailConfirmation;
