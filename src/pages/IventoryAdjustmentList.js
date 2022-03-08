
import {Link} from 'react-router-dom';
const InventoryAdjustmentList = ()=>{
    return(

<div className="content-body">
<div className="row d-flex justify-content-between ml-2 mr-5 ">
<div className="">
  <h3 className="font-weight-bold">
  Inventory Adjustment
  </h3>

</div>
<Link to={'/dashboard/inventory-adjustment/new'}>
<button className="btn btn-success">
        <i className="feather icon-plus"></i>
        New
        </button>
</Link>
    
    </div>

    <div className="filter">
        <div className="row">
   <div className="col-md-1">
   <p>Filter By:</p>
   </div>
   <div className="col-md-3 mr-1 d-flex align-items-center">
   <div className="input-group mb-3">
  <div className="input-group-prepend">
    <label className="input-group-text">Type</label>
  </div>
  <select className="custom-select" id="inputGroupSelect01">
    <option selected>All</option>
    <option value="1">By Quality</option>
    <option value="2">By Value</option>
  </select>
</div>
   </div>
       
        <div className=" col-md-3 d-flex">
        <div className="input-group mb-3">
  <div className="input-group-prepend">
    <label className="input-group-text">Period</label>
  </div>
  <select className="custom-select">
    <option selected>All</option>
    <option value="1">Today</option>
    <option value="2">This Week</option>
    <option value="3">This Month</option>
    <option value="3">This Quarter</option>
    <option value="3">This Year</option>
  </select>
</div>
        </div>
        
        </div>
    </div>
    

    <div className="mx-auto">
    <table className="table table-striped table-responsive-sm">
  <thead className="btn-main p-1">
    <tr>
      <th>Name</th>
      <th >SKU</th>
      <th >STOCK ON HAND</th>
      <th >REORDER POINT</th>
    </tr>
  </thead>
  <tbody>
      <tr>
          <td>Milk</td>
          <td>7656</td>
          <td>908976</td>
          <td>21</td>
    </tr>
    <tr>
          <td>Milk</td>
          <td>7656</td>
          <td>908976</td>
          <td>21</td>
    </tr>
    <tr>
          <td>Milk</td>
          <td>7656</td>
          <td>908976</td>
          <td>21</td>
    </tr>
    <tr>
          <td>Milk</td>
          <td>7656</td>
          <td>908976</td>
          <td>21</td>
    </tr>
    <tr>
          <td>Milk</td>
          <td>7656</td>
          <td>908976</td>
          <td>21</td>
    </tr>
    <tr>
          <td>Milk</td>
          <td>7656</td>
          <td>908976</td>
          <td>21</td>
    </tr>
    <tr>
          <td>Milk</td>
          <td>7656</td>
          <td>908976</td>
          <td>21</td>
    </tr>
    <tr>
          <td>Milk</td>
          <td>7656</td>
          <td>908976</td>
          <td>21</td>
    </tr>
    <tr>
          <td>Milk</td>
          <td>7656</td>
          <td>908976</td>
          <td>21</td>
    </tr>
  </tbody>
  </table>
    </div>
            

</div>

  
    )
}
export default InventoryAdjustmentList;
