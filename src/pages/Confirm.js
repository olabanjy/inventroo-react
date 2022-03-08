import React,{useEffect,useState} from 'react'
import { useLocation,useHistory,Link } from "react-router-dom";
import {ApiService} from '../store/constants/ApiService';
import { useTitle } from '../components/hooks/useTitle'
import {notify} from '../components/Toast';
const Confirm = () => {
    //useTitle('Inventroo | Email Confirmation');
    const history = useHistory();
    const [message,setMessage]=useState("");
    const search = useLocation().search;
    const reference=new URLSearchParams(search).get("reference");
    console.log(reference);
  
const confirmEmail = ()=>{
    ApiService.get(`/account/confirm?reference=${reference}`).then(response=>{
        const {token} = response.data;
        if(token){
            notify("success","Email Verification Successful")
            history.push("/login");
        }
        console.log(response.data);
    }).catch(error=>{
        if(error.response){
            const {Detail} =error.response.data;
            setMessage(Detail);
            console.log(error.response.data); 
        }else if (error.request){
            setMessage("Email Verification Fail! Please try again");
        }
    })
}
useEffect(()=>{
    document.body.classList.remove("2-columns");
    document.body.classList.remove("fixed-navbar");
    document.body.classList.remove("vertical-layout");
    document.body.classList.remove("vertical-menu-modern");
    
    confirmEmail();
   
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
            
    <h3 className="d-flex justify-content-center mb-1 m-auto"><strong>Email Confirmation!</strong></h3>  
    <section className="row flexbox-container">
    <div className="col-12 d-flex align-items-center justify-content-center mt-1">
        <p>{message && message}</p>
        
    </div>
    
</section>
<div className="col-md-12 d-flex align-items-center justify-content-center mt-1"><Link to="/login">Login here</Link></div>
        </div>
      </div>
    </div>
    )
}


export default Confirm;