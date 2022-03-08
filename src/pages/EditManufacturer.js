import React,{useEffect,useState} from 'react';
import { useForm } from 'react-hook-form';
import {ErrorMessage} from '../components/Message';
import { useHistory,useParams} from 'react-router-dom';
import {notify} from '../components/Toast';
import { useSelector, useDispatch } from 'react-redux';
import {updateManufacturer,updateManufacturerComplete,getManufacturerDetail} from '../store/actions/manufacturer';

const EditManufacturer = ()=>{
    const {register,reset,formState: { errors },handleSubmit} = useForm();
    const [name,setName] = useState("");
    const [contactPerson,setContactPerson] = useState("");
    const [contactPhone,setContactPhone] = useState("");
    const [validateError,setValidateError] = useState("");

    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();
    const id = params.manufacturerId;
    const { manufacturer, error, loading} = useSelector((state) => state.manufacturerDetail);
    const updateState = useSelector((state) => state.updateManufacturer);
    const { success:updateSuccess, error:updateError, loading:updateLoading} = updateState;
    const { token} = useSelector((state) => state.auth);

    

    const submit = (e)=>{
       e.preventDefault();
       if(!name || !contactPerson || !contactPhone){
           setValidateError('All Fields are Required');
       }else{
           const params = {
               name,
               contact_person:contactPerson,
               contact_phone:contactPhone,
               manufacturerID:id
           }
           console.log(params);
        dispatch(updateManufacturer(params,token));
       }
        
    }


    if(updateSuccess){
        history.push('/dashboard/manufacturer/all');
        notify("success","Manufacturer Updated Successfully");
        dispatch(updateManufacturerComplete());
      }

    useEffect(()=>{
        if(!manufacturer){
            dispatch(getManufacturerDetail(id,token));
        }else{
            setName(manufacturer.name);
            setContactPerson(manufacturer.contact_person);
            setContactPhone(manufacturer.contact_phone);
            
        }
    },[manufacturer,id])


    return(
        <>
        {loading? (
            <p>Loading...</p>
        ):error?(
            <ErrorMessage message={error}/>
        ):(
            <div className="content-body">
            <h4 className="font-weight-bold">Edit Manufacturer</h4>
            <div className="row mt-5">
                <div className="col-md-10">
            <form onSubmit={submit}>
               
                {validateError && <ErrorMessage message={validateError}/>}
                <div className="form-group row">
    <label htmlFor="name" className="col-sm-3 col-form-label">
        Manufacturer Name</label>
    <div className="col-sm-9">
      <input type="text" className="form-control" name="name"
      value={name}
    //   {...register("name", { required: "Manufacturer Name is required" })}
    //   defaultValue={manufacturer.name}
    onChange={(e)=>setName(e.target.value)}
       />
        {/* <span className="text-danger text-center">{errors.name?.message}</span> */}
    </div>
  </div>

  <div className="form-group row">
    <label className="col-sm-3 col-form-label">
        Contact Person's Name</label>
    <div className="col-sm-9">
      <input type="text" className="form-control" name="contact_person"
      value={contactPerson}
      onChange={(e)=>setContactPerson(e.target.value)}
    //    {...register("contact_person", { required: "Contact Person's Name is required" })}
    //    defaultValue={manufacturer.contact_person}
       />
        {/* <span className="text-danger text-center">{errors.contact_person?.message}</span> */}
    </div>
  </div>
  <div className="form-group row">
    <label className="col-sm-3 col-form-label">
        Phone</label>
    <div className="col-sm-9">
      <input type="phone" className="form-control" name="contact_phone" 
      value={contactPhone}
      onChange={(e)=>setContactPhone(e.target.value)}
    //    {...register("contact_phone", { required: "Manufacturer Name is required" })}
    //    defaultValue={manufacturer.contact_phone}
      />
       {/* <span className="text-danger text-center">{errors.contact_phone?.message}</span> */}
    </div>
  </div>
                {updateLoading? (
                    <button type="submit" className="btn btn-main mr-1 float-right">
				<i className="fa fa-check-square-o"></i> Updating...
				</button>
                ):(
                    <button type="submit" className="btn btn-main mr-1 float-right">
				<i className="fa fa-check-square-o"></i> Update
				</button>
                )}
                
                </form>
                </div>
         </div>

        </div>
        )}
        </>
    )
}

export default EditManufacturer;