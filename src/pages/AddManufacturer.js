import { useForm } from 'react-hook-form';
import {ErrorMessage} from '../components/Message';
import { useHistory} from 'react-router-dom';
import {notify} from '../components/Toast';
import { useSelector, useDispatch } from 'react-redux';
import {addManufacturer,addManufacturerComplete} from '../store/actions/manufacturer';

const AddManufacturer = ()=>{
    const dispatch = useDispatch();
  const history = useHistory();

    const { success, error, loading} = useSelector((state) => state.addManufacturer);
    const {register,formState: { errors },handleSubmit} = useForm();
    const { token} = useSelector((state) => state.auth);

    if(success){
        
        dispatch(addManufacturerComplete());
        history.push('/dashboard/manufacturer/all');
        notify("success","Manufacturer Added Successfully");
      }

    const submit = (data)=>{
        console.log(data);
        dispatch(addManufacturer(data,token));
    }

    return(
        <div className="content-body mt-5">
            <h4 className="font-weight-bold">Add Manufacturer</h4>
            <div className="row mt-5">
                <div className="col-md-10">
            <form onSubmit={handleSubmit(submit)}>
                {error && <ErrorMessage message={error}/>}
                <div className="form-group row">
    <label htmlFor="name" className="col-sm-3 col-form-label">
        Manufacturer Name</label>
    <div className="col-sm-9">
      <input type="text" className="form-control" name="name"
      {...register("name", { required: "Manufacturer Name is required" })}
       />
        <span className="text-danger text-center">{errors.name?.message}</span>
    </div>
  </div>

  <div className="form-group row">
    <label className="col-sm-3 col-form-label">
        Contact Person's Name</label>
    <div className="col-sm-9">
      <input type="text" className="form-control" name="contact_person"
       {...register("contact_person", { required: "Contact Person's Name is required" })}
       />
        <span className="text-danger text-center">{errors.contact_person?.message}</span>
    </div>
  </div>
  <div className="form-group row">
    <label className="col-sm-3 col-form-label">
        Phone</label>
    <div className="col-sm-9">
      <input type="phone" className="form-control" name="contact_phone" 
       {...register("contact_phone", { required: "Manufacturer Name is required" })}
      />
       <span className="text-danger text-center">{errors.contact_phone?.message}</span>
    </div>
  </div>

                <button type="submit" className="btn btn-main mr-1 float-right">
				<i className="fa fa-check-square-o"></i> Submit
				</button>
                </form>
                </div>
         </div>

        </div>
    )
}

export default AddManufacturer;