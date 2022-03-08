import React,{useEffect,useState} from 'react';
import {Link,useHistory} from 'react-router-dom';
import { useTitle } from '../components/hooks/useTitle';
import {loginUser} from '../store/actions/auth';
import {getModules} from '../store/actions/modules';
import {useDispatch,useSelector} from 'react-redux';

const Login = ()=>{
   useTitle('Inventroo | Login');
   const [email,setEmail]=useState("");
   const [password,setPassword]= useState("");
   const [togglePassword,setTogglePassword]=useState(false);

   const dispatch = useDispatch();
   const history = useHistory();

   const { token, user,error, loading } = useSelector((state) => state.auth);
   if(token){
       if(user && user.account_type==="admin" && user.profileStatus===false){
           history.push('/account/setup/org-profile');
       }else{
        history.push("/dashboard");
       }

   }
   const login = (e)=>{
       e.preventDefault();
       dispatch(loginUser(email,password));
   }
   const togglePasswordChange = ()=>{
       setTogglePassword(!togglePassword);
   }

   useEffect(()=>{
    document.body.classList.remove("menu-fixed");
    document.body.classList.remove("menu-expanded");
    document.body.classList.remove("2-columns");
    document.body.classList.remove("fixed-navbar");
    document.body.classList.remove("vertical-layout");
    document.body.classList.remove("vertical-menu-modern");
    return ()=>{
      document.body.classList.add("vertical-layout");
      document.body.classList.add("vertical-menu-modern");
      document.body.classList.add("fixed-navbar");
      document.body.classList.add("2-columns");
      document.body.classList.add("menu-expanded");

    }
    },[])
return(
    <div className="app-content content">
    <div className="content-overlay"></div>
    <div className="content-wrapper">

      <div className="row justify-content-center">

                  <img src="/app-assets/images/logo/troo-logo-color2.png"
                  alt="branding logo" className="mb-2"/>

          </div>
      <div className="content-body">

  <section className="row flexbox-container mt-1 ">
  <div className="col-md-12 d-flex align-items-center justify-content-center">
      <div className="col-md-3 p-0 ">
          <div className="card p-1 shadow-none  border-main 3 m-0" style={{ borderRadius:'20px' }}>

              <div className="card-content mt-5 ">

                  <h4 className="card-subtitle text-muted mb-1 mx-2 bold">
                      <span className="">
                          <strong>Login</strong></span></h4>
                  <div className="card-body pt-0">
                  <h5 className="text-danger text-center">
                      {error && error}
                  </h5>
                      <form className="form-horizontal" onSubmit={login}>
                          <fieldset className="form-group floating-label-form-group">
                              <label htmlFor="user-name">Email</label>
                              <div className="row">
                                  <input type="text" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Your Email" required/>
                              </div>
                          </fieldset>
                          <fieldset className="form-group floating-label-form-group mb-1">
                              <label htmlFor="user-password">Password</label>
                              <div className="row">
                                  <input type={togglePassword ? "text" : "password"} className="form-control"value={password} onChange={(e)=>setPassword(e.target.value)}
                                  placeholder="Enter Password" required/>
                                  <span className="feather icon-eye passwordToggle" onClick={togglePasswordChange}></span>

                              </div>
                          </fieldset>
                          <div className="form-group row">

                              <div className="col-sm-12 col-12 float-sm-left"><a
                                      href="#" className="card-link color-main text-decoration-underline">Forgot Password?</a></div>
                          </div>
                          <div className="d-flex justify-content-center align-items-center">
                          {loading === true ? (
                                    <button className="btn btn-main" type="button" disabled>
                                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                            Please wait...
                                            </button>
                                        ) :(
                                            <button type="submit" className="btn btn-main pl-4 pr-4">
                                  Continue</button>
                                        )

                                        }
                          </div>
                      </form>
                  </div>


              </div>

          </div>
          <div className="card-body d-flex justify-content-center align-items-center mt-0">
              <Link to="/register" className="btn btn-outline-main color-main "> <strong>Create Business Account</strong></Link>
          </div>
      </div>
  </div>
</section>
      </div>
    </div>
  </div>
);
}
export default Login;
