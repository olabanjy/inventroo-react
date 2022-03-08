import React,{useEffect,useState} from 'react'
import { useTitle } from '../components/hooks/useTitle'
import { useSelector, useDispatch } from 'react-redux';
import {registerUser} from '../store/actions/register';
import { useHistory} from 'react-router-dom';
import {notify} from '../components/Toast';


export const Register = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const { success, error, loading } = useSelector((state) => state.register);
    //useTitle('Inventroo | Register');
    console.log(success);

const [businessName,setBusinessName]= useState("");
const [email,setEmail] = useState("");
const [password,setPassword] =useState("");
const [confirmPassword,setConfirmPassword] = useState("");
const [validationError,setValidationError] =useState("");
const [togglePassword,setTogglePassword]=useState(false);

if (success) {
    notify('success',"Registration successful");
    history.push("/email-confirmation",{from:"register"});
}
const handleSubmit = (e)=>{
    e.preventDefault();
    if(password!==confirmPassword){
        setValidationError("Password didn't match");
    }else{
        setValidationError("");
        dispatch(registerUser(businessName,email, password,confirmPassword));
    }
        
}
const togglePasswordChange = ()=>{
    setTogglePassword(!togglePassword);
}
useEffect(()=>{
    document.body.classList.remove("2-columns");
    document.body.classList.remove("fixed-navbar");
    document.body.classList.remove("vertical-layout");
    document.body.classList.remove("vertical-menu-modern");
    return ()=>{
        document.body.classList.add("2-columns");
        document.body.classList.add("fixed-navbar");
        document.body.classList.add("vertical-layout");
        document.body.classList.add("vertical-menu-modern");
    }
    },[])

    return (
        <div className="app-content content">
        <div className="content-overlay"></div>
        <div className="content-wrapper">
          
          <div className="content-body">
              <div className="row justify-content-center align-items-center">
              <img src="/app-assets/images/logo/troo-logo-color2.png" 
                  alt="branding logo" className="mb-2"/>
              </div>
              
      <section className="row flexbox-container">
          <p className=" m-auto mb-3"><strong>New Account</strong></p>
      <div className="col-md-12 col-sm-12 col-lg-12 d-flex align-items-center justify-content-center mt-1">
          
          <div className="col-lg-3 p-0 ">
              <div className="card p-1 shadow-none  border-main m-0" style={{borderRadius:"20px"}}>
                  <div className="card-header border-0">
                      <div className="card-title text-center">
                          
                      </div>
                      
                  </div>
                  <div className="card-content">
                      <h5 className="card-subtitle text-muted mb-1 mx-1 bold">
                          <span className="">
                              <strong>Register</strong></span></h5>
                      <div className="card-body pt-0">
                          <form className="form-horizontal" onSubmit={handleSubmit}>
                              <p className="text-danger">{error && error}</p>
                              <fieldset className="form-group floating-label-form-group">
                                  <label htmlFor="user-name">Business Name</label>
                                  <div className="row">
                                      <input type="text" value={businessName} onChange={(e)=>setBusinessName(e.target.value)} className="form-control"  placeholder="Your Business Name" required/>
                                  </div>
                              </fieldset>
                              <fieldset className="form-group floating-label-form-group">
                                  <label htmlFor="user-name">Email</label>
                                  <div className="row">
                                      <input type="text" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Your Email" required/>
                                  </div>
                              </fieldset>
                              <fieldset className="form-group floating-label-form-group">
                                  <label htmlFor="user-password">Password</label>
                                  <div className="row">
                                      <input type={togglePassword ? "text" : "password"} className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)}
                                      placeholder="Enter Password" required/>
                                      <span className="feather icon-eye passwordToggle" onClick={togglePasswordChange}></span>
                                      
                                  </div>
                              </fieldset>
                              <fieldset className="form-group floating-label-form-group">
                                  <label htmlFor="confirm-password">Confirm Password</label>
                                  <div className="row">
                                      <input type={togglePassword ? "text" : "password"} className="form-control" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}
                                      placeholder="Confirm Password" required />
                                      <span className="feather icon-eye passwordToggle" onClick={togglePasswordChange}></span>
                                      
                                  </div>
                                  <p className="text-danger">{validationError && validationError}</p>
                              </fieldset>
                            
                              <div className="d-flex justify-content-center align-items-center">
                              {loading === true ? (
                                    <button className="btn btn-main pl-4 pr-4" type="button" disabled>
                                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                             Please wait...
                                            </button>
                                        ) :(
                                            <button type="submit" className="btn btn-main pl-4 pr-4" > 
                                            Create</button>
                                        )
}
                                  
                               
                              </div>
                          </form>
                      </div>
                     
                      
                  </div>
                  
              </div>
              
          </div>
      </div>
      
  </section>
          </div>
        </div>
      </div>
    )
}
