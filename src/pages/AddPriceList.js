import { useForm } from 'react-hook-form';
import {ErrorMessage} from '../components/Message';
import { useHistory} from 'react-router-dom';
import {notify} from '../components/Toast';
import { useSelector, useDispatch } from 'react-redux';
//import {addManufacturer,addManufacturerComplete} from '../store/actions/manufacturer';

const AddPriceList = ()=>{
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
            <h4 className="font-weight-bold">New Price List</h4>
            <div className="row mt-3">
                <div className="col-md-8">
            <form onSubmit={handleSubmit(submit)}>
                {/* {error && <ErrorMessage message={error}/>} */}
    <div className="form-group row">
    <label htmlFor="name" className="col-sm-3 col-form-label text-danger">
        Name</label>
    <div className="col-sm-9">
      <input type="text" className="form-control" name="name"
      {...register("name", { required: "Name is required" })}
       />
        <span className="text-danger text-center">{errors.name?.message}</span>
    </div>
  </div>

  <div className="form-group row">
<label htmlFor="type" className="col-sm-3 col-form-label">Type</label>
<div className="col-sm-9">
    <div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" value="Goods" name="type"
  {...register("type", { required: "Type is required" })}
  />
  <label className="form-check-label">Goods</label>
    </div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" value="Services" name="type"
  {...register("type", { required: "Product Type is required" })}
  />
  <label className="form-check-label">Services</label>
</div>
<span className="text-danger text-center">{errors.type?.message}</span>
</div>
</div>

<div className="form-group row">
    <label htmlFor="name" className="col-sm-3 col-form-label">
        Item Rate</label>
    <div className="col-sm-9">
    <div class="form-check">
  <input class="form-check-input" type="radio" name="itemRate" />
  <label class="form-check-label" for="itemRate">
    Markup or Machdown the item rate by percentage
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="itemRate" />
  <label class="form-check-label" htmlFor="itemRate">
    Enter the rate individually for each them
  </label>
</div>
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
  <div className="form-group row">
    <label className="col-sm-3 col-form-label">
        Percentage</label>
    <div className="col-sm-9">
    <div className="input-group">
  <div className="input-group-prepend">
    <button className="btn outline-main dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">Markup</button>
    <div className="dropdown-menu">
      <a className="dropdown-item" href="#">50</a>
      <a className="dropdown-item" href="#">100</a>
      
    </div>
  </div>
  <input type="text" className="form-control" name="percentage" {...register("percentage", { required: "Percentage is required" })}/>
  <div className="input-group-append">
    <span className="input-group-text">$</span>
  </div>
</div>
     
       <span className="text-danger text-center">{errors.percentage?.message}</span>
    </div>
  </div>



  <div className="d-flex justify-content-end">
      <button className="btn btn-main m-1">Save and Continue</button>
        <button className="btn btn-outline-main m-1">Cancel</button>
    </div>
                </form>
                </div>
         </div>

        </div>
    )
}

export default AddPriceList;