
import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useDropzone} from 'react-dropzone';
import { useForm } from 'react-hook-form';
import {ErrorMessage} from '../components/Message';
import LoadingButton from '../components/LoadingButton';
import { useHistory} from 'react-router-dom';
import {notify} from '../components/Toast';
import { useSelector, useDispatch } from 'react-redux';
import {getManufacturers} from '../store/actions/manufacturer';
import {getBrands} from '../store/actions/brand';
import {getUnits} from '../store/actions/unit';
import {getTaxes} from '../store/actions/tax';
import {addProduct,addProductComplete} from '../store/actions/product';

const AddProductGroup = ()=>{
    const dispatch = useDispatch();
    const history = useHistory();
    const [imageError,setImageError] = useState("");

    const { success:addProductSuccess, error:addProductError, loading:addProductLoading} = useSelector((state) => state.addProduct);
    const { units} = useSelector((state) => state.units);
    const { taxes} = useSelector((state) => state.taxes);
    const { brands} = useSelector((state) => state.brands);
    const { loading,success,error,manufacturers} = useSelector((state) => state.manufacturers);
    const {register,formState: { errors },handleSubmit} = useForm();
    const { token} = useSelector((state) => state.auth);

 const {
    acceptedFiles,
    fileRejections,
    getRootProps,
    getInputProps
  } = useDropzone({
    accept: 'image/jpeg,image/png'
  });

  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

useEffect(()=>{
  dispatch(getManufacturers(token));
  dispatch(getBrands(token));
  dispatch(getUnits(token));
  dispatch(getTaxes());
},[]);

const submitProduct = (data)=>{
  const productData = new FormData();
  productData.append("product_image",acceptedFiles[0]);
  productData.append("name",data.name);
  productData.append("type",data.type);
  productData.append("dimension",data.dimension);
  productData.append("weight",data.weight);
  productData.append("unit_id",data.unit);
  productData.append("brand_id",data.brand);
  productData.append("manufacturer_id",data.manufacturer);
  productData.append("upc",data.upc);
  productData.append("mpn",data.mpn);
  productData.append("ean",data.ean);
  productData.append("isbn",data.isbn);
  productData.append("sale_price",data.salePrice);
  productData.append("sale_tax_percent",data.saleTax);
  productData.append("cost_price",data.costPrice);
  productData.append("cost_tax_percent",data.costTax);
  productData.append("opening_stock",data.openingStock);
  productData.append("opening_stock_rate_per_unit",data.openingStockRate);
  productData.append("recorder_point",data.reOrderPoint);
  productData.append("prefered_vendor",data.preferredVendor);
  productData.append("tax_id",data.saleTax);

  dispatch(addProduct(productData));

}

if(addProductSuccess){

  dispatch(addProductComplete());
  history.push('/dashboard/product/all');
  notify("success","Product Added Successfully");
}

if(loading) return <p className="mt-3">Loading...</p>

    return(
<div className="content-body mt-3">
<div className="row mx-auto">
    <h4 className="font-weight-bold">New Product</h4>
</div>

    <form onSubmit={handleSubmit(submitProduct)}>
    <div className="row">
      {addProductError && <ErrorMessage message={addProductError}/>}
    <div className="col-md-7">
    <div className="form-group row">
<label htmlFor="type" className="col-sm-3 col-form-label">Type</label>
<div className="col-sm-9">
    <div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" value="Goods" name="type"
  {...register("type", { required: "Product Type is required" })}
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
    <label htmlFor="name" className="col-sm-3 col-form-label text-danger">
        Name *</label>
    <div className="col-sm-9">
      <input type="text" className="form-control"
        {...register("name", { required: "Product Name is required" })}
       />
       <span className="text-danger text-center">{errors.name?.message}</span>
    </div>
  </div>
  <div className="form-group row">
    <label htmlFor="sku" className="col-sm-3 col-form-label ">
        SKU </label>
    <div className="col-sm-9">
      <input type="text" className="form-control" name="sku"
      {...register("sku")}
      />
    </div>
  </div>

  <div className="form-group row">
    <label className="col-sm-3 col-form-label">
    <span className="text-danger">Unit</span> <i className="feather icon-help-circle"></i></label>

    <div className="col-sm-9">
    <select className="custom-select" name="unit"
    {...register("unit", { required: "Unit is required" })}>
       <option>Select or type to add</option>
      {units && units.map(unit=>(
         <option value={unit.id}>{unit.display_name}</option>
       ))}
     </select>

     <div className="form-check">
  <input className="form-check-input custom-checkbox" type="checkbox"  />
  <label className="form-check-label">
  Returnable Product <i className="feather icon-help-circle"></i>
  </label>
  <span className="text-danger text-center">{errors.unit?.message}</span>
</div>

    </div>

  </div>
    </div>
    <div className="d-flex flex-column col-md-3 align-items-center">
    <section className="container  drop-zone-new" >
          <div {...getRootProps({className: 'dropzone'})}>
            <input {...getInputProps()}

            />
            <i className="feather icon-image icon-size"></i>
            <p>Drag Image(s) here, or click to select images</p>

          </div>

        </section>
        <aside className="text-center">
            <ul>{files.length} File Selected</ul>
            <p>{imageError && imageError}</p>
          </aside>
        </div>

    </div>

    <div className="row">
    <div className="col-md-10">

      <div className="form-group row">
    <label className="col-sm-2 col-form-label">
    Dimension (cm) </label>
    <div className="col-sm-4">
    <input type="text" className="form-control" name="dimension"
    {...register("dimension")}
     />
    </div>
    <label className="col-sm-2 col-form-label">
        Weight (kg)</label>
    <div className="col-sm-4">
    <input type="text" className="form-control" name="weight"
    {...register("weight")}
     />
    </div>
  </div>

  <div className="form-group row">
    <label className="col-sm-2 col-form-label">
    Manufacturer </label>
    <div className="col-sm-4">
    <select className="custom-select" {...register("manufacturer")} name="manufacturer">
       <option>Select Manufacturer</option>
       {manufacturers && manufacturers.map(manufacturer=>(
         <option value={manufacturer.id}>{manufacturer.name}</option>
       ))}
     </select>
    </div>
    <label className="col-sm-2 col-form-label">
        Brand</label>
    <div className="col-sm-4">
     <select className="custom-select" {...register("brand")} name="brand">
       <option>Select a Brand</option>
       {brands && brands.map(brand=>(
         <option value={brand.id}>{brand.name}</option>
       ))}
     </select>
    </div>
  </div>


  <div className="form-group row">
    <label className="col-sm-2 col-form-label">
    UPC </label>
    <div className="col-sm-4">
    <input type="text" className="form-control" name="upc"
    {...register("upc")}
    />
    </div>
    <label className="col-sm-2 col-form-label">
        MPN</label>
    <div className="col-sm-4">
    <input type="text" className="form-control" name="mpn"
    {...register("mpn")}
     />
    </div>
  </div>


  <div className="form-group row">
    <label className="col-sm-2 col-form-label">
   EAN </label>
    <div className="col-sm-4">
    <input type="text" className="form-control" name="ean"
    {...register("ean")}
     />
    </div>
    <label className="col-sm-2 col-form-label">
        ISBN </label>
    <div className="col-sm-4">
    <input type="text" className="form-control" name="isbn"
    {...register("isbn")}
     />
    </div>
  </div>

    <section className="row">
    <div className="col-md-6">
        <h5 className="font-weight-bold">Sales Information</h5>

    <div className="form-group row">
    <label className="col-sm-4 col-form-label text-danger">
   Selling Price * </label>
    <div className="col-sm-8">
    <input type="text" className="form-control" name="salePrice"
    {...register("salePrice", { required: "Sale Price is required" })}
     />
       <span className="text-danger text-center">{errors.salePrice?.message}</span>
    </div>
  </div>


  <div className="form-group row">
    <label className="col-sm-4 col-form-label text-danger">
    Account </label>
    <div className="col-sm-8">
    <select className="custom-select" name="saleAccount"   {...register("saleAccount", { required: "Sale Account is required" })}>
       <option>Select account</option>
       <option value="sales">Sales</option>
       <option value="inventory">Inventory</option>

     </select>
       <span className="text-danger text-center">{errors.saleAccount?.message}</span>
    </div>
    </div>
    <div className="form-group row">
    <label className="col-sm-4 col-form-label">
   Description </label>
    <div className="col-sm-8">
    <textarea className="form-control" name="saleDescription" rows={3}
      {...register("saleDescription")}></textarea>
    </div>
  </div>

    <div className="form-group row">
    <label className="col-sm-4 col-form-label">
    Tax </label>
    <div className="col-sm-8">
    <select className="custom-select" name="saleTax"   {...register("saleTax")}>
       <option>Select a Tax</option>
       {taxes && taxes.map(tax=>(
          <option value={tax.id}>{tax.name}</option>
       ))}
     </select>
    </div>
    </div>

    </div>
    <div className="col-md-6">
        <h5 className="font-weight-bold">Purchase Information</h5>

    <div className="form-group row">
    <label className="col-sm-4 col-form-label text-danger">
   Cost Price * </label>
    <div className="col-sm-8">
    <input type="text" className="form-control" name="costPrice"
    {...register("costPrice", { required: "Cost Price is required" })}
     />
       <span className="text-danger text-center">{errors.salePrice?.message}</span>
    </div>
  </div>


  <div className="form-group row">
    <label className="col-sm-4 col-form-label text-danger">
    Account </label>
    <div className="col-sm-8">
    <select className="custom-select" Name="costAccount"   {...register("costAccount", { required: "Cost Account is required" })}>
       <option>Select account</option>
       <option value="sales">Sales</option>
       <option value="inventory">Inventory</option>

     </select>
       <span className="text-danger text-center">{errors.costAccount?.message}</span>
    </div>
    </div>
    <div className="form-group row">
    <label className="col-sm-4 col-form-label">
   Description </label>
    <div className="col-sm-8">
    <textarea className="form-control" name="costDescription" rows={3}
      {...register("costDescription")}></textarea>
    </div>
  </div>

    <div className="form-group row">
    <label className="col-sm-4 col-form-label">
    Tax </label>
    <div className="col-sm-8">
    <select className="custom-select" name="costTax"  {...register("costTax")}>
       <option>Select a Tax</option>
       {taxes && taxes.map(tax=>(
          <option value={tax.id}>{tax.name}</option>
       ))}
     </select>
    </div>
    </div>

    </div>
    </section>
    <div className="form-check mt-2">
  <input className="form-check-input custom-checkbox" type="checkbox"  />
  <label className="form-check-label">
  Track Inventory for this items
  <p>
  <small>You cannot enable/disable inventory tracking once
      you've created transactions for this items</small>
  </p>
  </label>

</div>

<div className="form-group row">
    <label className="col-sm-2 col-form-label text-danger">
    Inventory Account </label>
    <div className="col-sm-4">
    <select className="custom-select" name="inventoryAccount"
    {...register("inventoryAccount", { required: "Inventory Account is required" })}>
       <option>Select a Account</option>
       <option value="sales">Sales</option>
       <option value="inventory">Inventory</option>

     </select>
       <span className="text-danger text-center">{errors.inventoryAccount?.message}</span>
    </div>
    </div>

    <div className="form-group row">
    <label className="col-sm-2 col-form-label">
    Opening Stock </label>
    <div className="col-sm-4">
    <input type="text" className="form-control" name="openingStock"
    {...register("openingStock")}
     />
    </div>
    <label className="col-sm-2 col-form-label">
    Opening Stock Rate Per Unit
    </label>
    <div className="col-sm-4">
    <input type="text" className="form-control" name="openingStockRate"
    {...register("openingStockRate")}
     />
    </div>
  </div>

  <div className="form-group row">
    <label className="col-sm-2 col-form-label">
    Reorder Point </label>
    <div className="col-sm-4">
    <input type="text" className="form-control" name="reOrderPoint"
    {...register("reOrderPoint")}
     />
    </div>
    <label className="col-sm-2 col-form-label">
    Preferred Vendor
    </label>
    <div className="col-sm-4">
    <select className="custom-select" name="preferredVendor"
    {...register("preferredVendor")}>
       <option>Select a Vendor</option>
       <option value="sales">Sales</option>
       <option value="inventory">Inventory</option>

     </select>
    </div>
  </div>

  <div className="float-right mb-2 mt-5">

								{addProductLoading? (
                  <LoadingButton/>
                ):(
                  <button type="submit" className="btn btn-main mr-1">
									<i className="fa fa-check-square-o"></i> Save and Continue
								</button>
                )}

                                <button type="reset" className="btn btn-warning ">
									<i className="feather icon-x"></i> Cancel
								</button>
							</div>


    </div>




    </div>


    </form>


    </div>





    )
}
export default AddProductGroup;
