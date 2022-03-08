import React,{useEffect,useState} from 'react';
import { useForm } from 'react-hook-form';
import {ErrorMessage} from '../components/Message';
import { useHistory,useParams} from 'react-router-dom';
import {notify} from '../components/Toast';
import { useSelector, useDispatch } from 'react-redux';
import {updateBrand,updateBrandComplete,getBrandDetail} from '../store/actions/brand';

const EditBrand = ()=>{
    const {register,reset,formState: { errors },handleSubmit} = useForm();
    const [name,setName] = useState("");
    const [manufacturer,setManufacturer] = useState("");
    const [validateError,setValidateError] = useState("");

    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();
    const id = params.brandId;
    const brandDetail = useSelector((state) => state.brandDetail);
    const { brand, error, loading} = brandDetail;
    const { manufacturers} = useSelector((state) => state.manufacturers);
    const updateState = useSelector((state) => state.updateBrand);
    const { success:updateSuccess, error:updateError, loading:updateLoading} = updateState;
    const { token} = useSelector((state) => state.auth);

    if(updateSuccess){
        history.push('/dashboard/brand/all');
        notify("success","Brand Updated Successfully");
        dispatch(updateBrandComplete());
    }

    useEffect(()=>{
        if(!brand || brand.id!=id){
            dispatch(getBrandDetail(id,token));
        }else{
            setName(brand.name);
            setManufacturer(brand.id);
        }
    },[brand])

const submit = (e)=>{
       e.preventDefault();
       if(!name || !manufacturer ){
           setValidateError('All Fields are Required');
       }else{
        setValidateError('');
           const params = {
               name,
               brandID:Number(id)
           }
        
        dispatch(updateBrand(params,token));
       }

    }

    return(
        <>
        {loading? (
            <p>Loading...</p>
        ):error?(
            <ErrorMessage message={error}/>
        ):(
            <div className="content-body">
            <h4 className="font-weight-bold">Edit Brand</h4>
            <div className="row mt-5">
                <div className="col-md-10">
            <form onSubmit={submit}>

                {validateError && <ErrorMessage message={validateError}/>}
                {updateError && <ErrorMessage message={updateError}/>}
                <div className="form-group row">
    <label htmlFor="name" className="col-sm-3 col-form-label">
        Brand Name</label>
    <div className="col-sm-9">
      <input type="text" className="form-control" name="name"
      value={name}
    onChange={(e)=>setName(e.target.value)}
       />

    </div>
  </div>

  <div className="form-group row">
    <label className="col-sm-3 col-form-label">
    Manufacturer</label>
    <div className="col-sm-9">
        <select className="custom-select" name="manufacturer" value={manufacturer}
            onChange={(e)=>setManufacturer(e.target.value)}
                >
            <option value="">Choose Manufacturer</option>
                {manufacturers && manufacturers.map(manufacturer=>(
                    <option value={manufacturer.id}>{manufacturer.name}</option>
            ))}

        </select>
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

export default EditBrand;
