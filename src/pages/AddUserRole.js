import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';
import { useTitle } from '../components/hooks/useTitle'
import { useSelector, useDispatch } from 'react-redux';
import {getModules} from '../store/actions/modules';
import {addUserRole,addUserRoleComplete} from '../store/actions/organizationProfile';
import { useHistory} from 'react-router-dom';
import {notify} from '../components/Toast';
import LoadingButton from '../components/LoadingButton';
import { useForm } from 'react-hook-form';
import TopNav from '../components/TopNav';
import SideBar from '../components/SideBar';
import Loader from '../components/Loader';

const AddUserRole = () => {
  useTitle('Inventroo | Add Roles');
  const dispatch = useDispatch();
  const history = useHistory();
  const { success, error, loading,modules } = useSelector((state) => state.modules);
  const addUserRoleState = useSelector((state) => state.addUserRole);
  const {success:successaddUserRole,loading:loadingaddUserRole,error:erroraddUserRole} = addUserRoleState;
  const { token} = useSelector((state) => state.auth);
  const {register,formState: { errors },handleSubmit} = useForm();

 if(!token){
        notify("error","Authentication Required!!");
        history.push('/login');
    }
  if(successaddUserRole){
    notify("success","User Role Added Successfully");
    dispatch(addUserRoleComplete());
    history.push('/account/setup/user-role');
  }

  const addRole = (data)=>{

    let formattedModules = data.modules.map(Number);
    const params = {
      name:data.roleName,
      modules:formattedModules,
      description:data.description
    }
    console.log(params);
    dispatch(addUserRole(params,token));
    console.log(data);
    console.log(formattedModules);
  }


  useEffect(()=>{
      dispatch(getModules(token));
  },[dispatch]);


    return (
      <>
      <TopNav/>
      <SideBar/>

      {loading && <p>Loading...</p>}
      <div className="app-content content">
      <div className="content-wrapper">
    <div className="col-md-12 mt-1">
            <h1>New Role</h1>
    <form onSubmit={handleSubmit(addRole)}>
      <p className="text-danger">{error && error}</p>
  <div className="form-group row">
    <label  className="col-sm-2 col-form-label">Role Name</label>
    <div className="col-sm-6">
      <input type="text" className="form-control" name="roleName"
         {...register("roleName", { required: "Role Name is required" })}
      />
      <span className="text-danger text-center">{errors.roleName?.message}</span>
    </div>
  </div>
  <div className="form-group row">
    <label className="col-sm-2 col-form-label">Description</label>
    <div className="col-sm-6">
      <textarea cols={5} className="form-control" rows={8}
       {...register("description", { required: "Description is required" })}
      name="description"></textarea>


      <span className="text-danger text-center">{errors.description?.message}</span>

    </div>
  </div>

  <div className="card">
  <div className="card-header text-white bg-main" style={{ background:"#4c27b3" }}>
    <h4>Modules</h4>
  </div>
  <div className="card-body">
  <div className="row m-1">
    <div className="col-md-12">
    {modules && modules.map(module=>(
      <div className="form-check form-check-inline col-md-2 m-1" key={module.id}>
  <input className="form-check-input" value={module.id} name="modules[]" type="checkbox"
   {...register("modules")}
  />
  <label className="form-check-label" >{module.name}</label>
</div>

    ))}
  </div>
</div>
  </div>
</div>

  <div className="form-group row justify-content-end m-2">
  
      <button type="submit" className="btn btn-main">ADD ROLE</button>
 
  </div>

</form>
        </div>
        </div>
        </div>
        </>
     );
}

export default AddUserRole;
