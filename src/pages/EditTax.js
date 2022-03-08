import React,{useEffect,useState} from 'react';
import { useForm } from 'react-hook-form';
import {ErrorMessage} from '../components/Message';
import { useHistory,useParams} from 'react-router-dom';
import {notify} from '../components/Toast';
import { useSelector, useDispatch } from 'react-redux';
import {updateTax,updateTaxComplete,getTaxDetail} from '../store/actions/tax';

const EditTax= ()=>{

    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();
    const id = params.taxId;
    const taxDetail = useSelector((state) => state.taxDetail);
    const { tax, error, loading} = taxDetail;
    const updateState = useSelector((state) => state.updateTax);
    const { success:updateSuccess, error:updateError, loading:updateLoading} = updateState;
    const { token} = useSelector((state) => state.auth);

    const [name,setName] = useState("");
    const [percentage,setPercentage] = useState("");
    const [validateError,setValidateError] = useState("");


    if(updateSuccess){
        history.push('/dashboard/tax/all');
        notify("success","Tax Updated Successfully");
        dispatch(updateTaxComplete());
      }

    useEffect(()=>{
        if(!tax){
            dispatch(getTaxDetail(id));
        }else{
            setName(tax.name);
            setPercentage(tax.percentage);
        }
    },[tax,id])


const submit = (e)=>{
       e.preventDefault();
       if(!name || !percentage ){
           setValidateError('All Fields are Required');
       }else{
        setValidateError('');
           const params = {
               name,
               percentage,
               taxID:Number(id)
           }
           console.log({params});
        dispatch(updateTax(params));
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
            <h4 className="font-weight-bold">Edit Tax</h4>
            <div className="row mt-5">
                <div className="col-md-10">
            <form onSubmit={submit}>

                {validateError && <ErrorMessage message={validateError}/>}
                {updateError && <ErrorMessage message={updateError}/>}
                <div className="form-group row">
    <label htmlFor="name" className="col-sm-3 col-form-label">
        Tax Name</label>
    <div className="col-sm-9">
      <input type="text" className="form-control" name="name"
      value={name}
    onChange={(e)=>setName(e.target.value)}
       />

    </div>
  </div>

  <div className="form-group row">
    <label className="col-sm-3 col-form-label">
    Percentage</label>
    <div className="col-sm-9">
      <input type="text" className="form-control" name="percentage"
      value={percentage}
    onChange={(e)=>setPercentage(e.target.value)}
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

export default EditTax;
