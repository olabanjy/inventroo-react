import React,{useEffect,useState} from 'react';
import { useForm } from 'react-hook-form';
import {ErrorMessage} from '../components/Message';
import { useHistory,useParams} from 'react-router-dom';
import {notify} from '../components/Toast';
import { useSelector, useDispatch } from 'react-redux';
import {updateUnit,updateUnitComplete,getUnitDetail} from '../store/actions/unit';

const EditUnit = ()=>{

    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();
    const id = params.unitId;
    const unitDetail = useSelector((state) => state.unitDetail);
    const { unit, error, loading} = unitDetail;
    const updateState = useSelector((state) => state.updateUnit);
    const { success:updateSuccess, error:updateError, loading:updateLoading} = updateState;
    const { token} = useSelector((state) => state.auth);

    const [name,setName] = useState("");
    const [displayName,setDisplayName] = useState("");
    const [validateError,setValidateError] = useState("");



    if(updateSuccess){
        history.push('/dashboard/unit/all');
        notify("success","Unit Updated Successfully");
        dispatch(updateUnitComplete());
      }

    useEffect(()=>{
        if(!unit || unit.id!=id){
            dispatch(getUnitDetail(id));
        }else{
            setName(unit.name);
            setDisplayName(unit.display_name);
        }
    },[unit,id])


const submit = (e)=>{
       e.preventDefault();
       if(!name || !displayName ){
           setValidateError('All Fields are Required');
       }else{
        setValidateError('');
           const params = {
               name,
               display_name:displayName,
               unitID:Number(id)
           }
           console.log({params});
        dispatch(updateUnit(params,token));
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
            <h4 className="font-weight-bold">Edit Unit</h4>
            <div className="row mt-3">
                <div className="col-md-10">
            <form onSubmit={submit}>

                {validateError && <ErrorMessage message={validateError}/>}
                {updateError && <ErrorMessage message={updateError}/>}
                <div className="form-group row">
    <label htmlFor="name" className="col-sm-3 col-form-label">
        Unit Name</label>
    <div className="col-sm-9">
      <input type="text" className="form-control" name="name"
      value={name}
    onChange={(e)=>setName(e.target.value)}
       />

    </div>
  </div>

  <div className="form-group row">
    <label className="col-sm-3 col-form-label">
    Display Name</label>
    <div className="col-sm-9">
      <input type="text" className="form-control" name="displayName"
      value={displayName}
    onChange={(e)=>setDisplayName(e.target.value)}
       />

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

export default EditUnit;
