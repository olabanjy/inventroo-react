import { useForm } from 'react-hook-form';
import {ErrorMessage} from '../components/Message';
import { useHistory} from 'react-router-dom';
import {notify} from '../components/Toast';
import { useSelector, useDispatch } from 'react-redux';
//import {addManufacturer,addManufacturerComplete} from '../store/actions/manufacturer';

const AddInventoryAdjustment = ()=>{
    const dispatch = useDispatch();
    const history = useHistory();

    //const { success, error, loading} = useSelector((state) => state.addPriceList);
    const {register,formState: { errors },handleSubmit} = useForm();
    const { token} = useSelector((state) => state.auth);

    // if(success){
        
    //     dispatch(addManufacturerComplete());
    //     history.push('/dashboard/price-list/all');
    //     notify("success","Price List Added Successfully");
    //   }

    const submit = (data)=>{
        console.log(data);
        //dispatch(addPriceList(data));
    }

    return(
        <div className="content-body">
            <h4 className="font-weight-bold">New Adjustment</h4>
            <div className="row mt-3">
                <div className="col-md-8">
            <form onSubmit={handleSubmit(submit)}>
                {/* {error && <ErrorMessage message={error}/>} */}

<div className="form-group row">
    <label htmlFor="name" className="col-sm-3 col-form-label text-danger">
        Mode of Adjustment</label>
    <div className="col-sm-9">
    <div class="form-check">
  <input class="form-check-input" type="radio" name="adjustmentMode" />
  <label class="form-check-label">
    Quantity Adjustment
  </label>
</div>
<div class="form-check mt-1">
  <input class="form-check-input" type="radio" name="adjustmentMode" />
  <label class="form-check-label" htmlFor="adjustmentMode">
    Value Adjustment
  </label>
</div>
    </div>
  </div>
    
  <div className="form-group row">
    <label className="col-sm-3 col-form-label">
        Reference Number</label>
        
    <div className="col-sm-9">
    <select class="custom-select" name="reference" {...register("reference")} >
    <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
     
    </select>
        
    </div>
  </div>
  
  <div className="form-group row">
    <label htmlFor="name" className="col-sm-3 col-form-label text-danger">
        Date *</label>
    <div className="col-sm-9">
      <input type="date" className="form-control" name="date"
      {...register("date", { required: "Name is required" })}
       />
        <span className="text-danger text-center">{errors.date?.message}</span>
    </div>
  </div>


  <div className="form-group row">
    <label htmlFor="name" className="col-sm-3 col-form-label text-danger">
        Account</label>
    <div className="col-sm-9">
      <input type="text" className="form-control" name="account"
      {...register("account", { required: "Account is required" })}
       />
        <span className="text-danger text-center">{errors.account?.message}</span>
    </div>
  </div>

  <div className="form-group row">
    <label htmlFor="reason" className="col-sm-3 col-form-label text-danger">
        Reason *</label>
    <div className="col-sm-9">
    <select class="custom-select" name="reason" {...register("reason", { required: "Reason is required" })}>
    <option>Select a reason</option>
    <option value="1">Stock on fire</option>
      <option value="2">Stolen goods</option>
      <option value="3">Damaged goods</option>
      <option value="4">Stock Writen off</option>
      <option value="5">stocktaking results</option>
      <option value="6">Inventory Revaluation</option>
     
     
    </select>
        <span className="text-danger text-center">{errors.reason?.message}</span>
    </div>
  </div>

  <div className="form-group row">
    <label className="col-sm-3 col-form-label">
        Description</label>
    <div className="col-sm-9">
      <textarea className="form-control" name="description"
       {...register("decription")} rows={5} cols={4}
       ></textarea>
        
    </div>
  </div>
  <div className="d-flex">
      <button className="btn btn-main m-1">Save as Draft</button>
      <button className="btn btn-outline-main m-1" type="submit">Convert to Adjusted</button>
    <button className="btn btn-outline-main m-1">Cancel</button>
    </div>
                </form>
                </div>
         </div>

        </div>
    )
}

export default AddInventoryAdjustment;