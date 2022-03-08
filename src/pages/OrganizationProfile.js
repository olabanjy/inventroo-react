import React,{useEffect,useState} from 'react'
import { useTitle } from '../components/hooks/useTitle'
import { useSelector, useDispatch } from 'react-redux';
import {updateOrganizationProfile,updateOrganizationProfileComplete} from '../store/actions/organizationProfile';
import { useHistory} from 'react-router-dom';
import {notify} from '../components/Toast';
import LoadingButton from '../components/LoadingButton';
import { useForm } from 'react-hook-form';
import TopNav from '../components/TopNav';
import SideBar from '../components/SideBar';


const OrganizationProfile = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { success, error, loading } = useSelector((state) => state.updateorganization);
  const { token,user} = useSelector((state) => state.auth);

useTitle('Inventroo | Organization Profile');
  const {register,formState: { errors },handleSubmit} = useForm();

  if(!token){
        history.push('/login');
    }

  if(success==true){
    notify('success',"Profile Updated successful");
    dispatch(updateOrganizationProfileComplete())
      history.push("/dashboard");
    }

  const onSubmit = (data)=>{
    const params = {
      company_name:data.companyName,
      business_type:data.businessType,
      business_category:data.businessCategory,
      reg_no:data.registrationNumber,
      vat_id:data.vatId,
      business_email:data.businessEmail,
      business_phone_no:data.businessPhone,
      website_link:data.webpage,
      business_address:data.addressLine1,
      city:data.businessCity,
      state: data.businessState,
      country:data.businessCountry,
      acct_no:data.accountNumber,
      acct_name:data.accountHolder,
      acct_bank:data.bankName,
      fiscal_year_from:data.fiscaYearFrom,
      fiscal_year_to:data.fiscaYearTo,
      first_name:data.firstname,
      last_name:data.lastname,
      phone_no:data.phone,
      home_address:data.homeAddress,
      home_city:data.city,
      home_state:data.state,
      home_country:data.country
    }
    dispatch(updateOrganizationProfile(params,token));

  }

    return (
      <>
      <TopNav/>
      <SideBar/>


      <div className="app-content content">
      <div className="content-wrapper">
        <div className="mt-2">
            <div className="row">
                <div className="col-md-12">

      <div className="card-body">
        <div className="row">
         <div className="d-flex align-items-center">
        <h5 className="text-bold-600 P-2">Organization Profile</h5>
        <h5 className="ml-1">  | ID : {user && user.organization?.id}</h5>

         </div>
        </div>
      </div>

  </div>
</div>

  <div className="col-md-12 pl-0 pr-0">
    <form onSubmit={handleSubmit(onSubmit)}>
    <h5 className="mb-1 text-bold-600">Profile Details</h5>
    <div id="accordionWrap1" role="tablist" aria-multiselectable="true">
        <div className="accordion collapse-icon accordion-icon-rotate text-dark">
           <div className="border-main mb-2 round ">
            <div id="heading11" className="card-header primary" data-toggle="collapse" href="#accordion11" aria-expanded="false"
            aria-controls="accordion11">
                <a className="card-title lead text-dark" href="#">Business Information</a>
            </div>
            <div id="accordion11" role="tabpanel" data-parent="#accordionWrap1" aria-labelledby="heading11" className="collapse">
                <div className="card-content">
                    <div className="card-body">

                        <div className="form-body">
                          <p>This information is required in order to verify your Business. It will show up on your payout report, invoices and receipts</p>
                          <div className="row mb-3">
                          <div className="col-md-6 round ">
                            <fieldset className="border border-grey p-3 ">
                              <input type="radio" name="businessType" checked value="Sole Trader" {...register("businessType")}/>
                              <label htmlFor="businessType" className="ml-1">Sole Trader / Private Individual</label>
                            </fieldset>

                          </div>
                          <div className="col-md-6 round">
                            <fieldset className="border border-grey p-3 ">
                              <input type="radio"  name="businessType" value="Other Legal Type" {...register("businessType")} />
                              <label htmlFor="businessType" className="ml-1">Other Legal Types</label>
                            </fieldset>
                          </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="businessEmail">Business Email</label>
                            <input type="text"  className="form-control " placeholder="Business Email" name="Business Email"
                            {...register("businessEmail", { required: "Business Email is required" })}

                            />
                            <span className="text-danger text-center">{errors.businessEmail?.message}</span>
                          </div>
                        <div className="form-row">

                        <div className="form-group col-md-6">
                            <label htmlFor="companyName">Company Name</label>
                            <input type="text"  className="form-control " placeholder="My trading Company name" name="companyName"
                            {...register("companyName", { required: "Company Name is required" })}

                            />
                            <span className="text-danger text-center">{errors.companyName?.message}</span>
                          </div>

                          <div className="form-group col-md-6">
                            <label htmlFor="businessCategory">How would you categorize your business?</label>
                            <input type="text" className="form-control " placeholder="Business Category" name="businessCategory"
                            {...register("businessCategory", { required: " Business Category is required" })}
                            />
                            <span className="text-danger text-center">{errors.businessCategory?.message}</span>
                          </div>
                        </div>

                         <div className="form-row">
                         <div className="form-group col-md-6">
                            <label htmlFor="registrationNumber">Company Registration Number <span className="text-muted">(Optional)</span></label>
                            <input type="text"  className="form-control " placeholder="1234567" name="registrationNumber"
                           {...register("registrationNumber")}
                            />

                          </div>

                          <div className="form-group col-md-6">
                            <label htmlFor="taxId">TAX ID:<span className="text-muted">(Optional)</span></label>
                            <input type="text" className="form-control " placeholder="IE102934" name="taxId"

                            />

                          </div>

                         </div>

                          <div className="form-row">
                          <div className="form-group col-md-6">
                            <label htmlFor="businessPhone">Business Phone (Mobile or Landline)</label>
                            <input type="text" name="businessPhone" className="form-control " placeholder="Business Phone"
                            {...register("businessPhone", { required: "Business Phone is required" })}
                            />
                            <span className="text-danger text-center">{errors.businessPhone?.message}</span>

                          </div>
                          <div className="form-group col-md-6">
                            <label htmlFor="webpage" value="">Website,Facebook,Instagram,Google map Location <span className="text-muted">(Optional)</span></label>
                            <input type="text" name="webpage" className="form-control " placeholder="Webpage" />
                          </div>
                        </div>
                          </div>

                      <h5 className="font-weight-bold">Business Address</h5>

                        <div className="form-row">
                        <div className="form-group col-md-6">
                          <label htmlFor="addressLine1">Address (Line 1)</label>
                          <input type="text"  className="form-control "
                          placeholder="Street Address"
                          {...register("addressLine1", { required: "Address Line 1 is required" })}
                                />
                                <span className="text-danger text-center">{errors.addressLine1?.message}</span>

                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor="addressLine2">Address (Line 2) <span>(Optional)</span></label>
                          <input type="text" name="addressLine2" className="form-control " placeholder="Apartment,Suite,Unit,Building,Floor" />
                        </div>
                        </div>
                        <div className="form-row">
                        <div className="form-group col-md-6">
                          <label htmlFor="businessCity">City</label>
                          <input type="text"  className="form-control " placeholder="City/Town"
                          name="businessCity"
                          {...register("businessCity", { required: "Business City is required" })}
                         />
                          <span className="text-danger text-center">{errors.businessCity?.message}</span>

                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor="businessState">State</label>
                          <input type="text"  className="form-control " placeholder="State"
                          name="businessState"
                          {...register("businessState", { required: "Business State is required" })}
                         />
                          <span className="text-danger text-center">{errors.businessState?.message}</span>

                        </div>

                        </div>
                        <div className="form-group">
                          <label htmlFor="businessCountry">Country</label>
                          <input type="text"  className="form-control " placeholder="Country"
                          name="businessCountry"
                          {...register("businessCountry", { required: "Business Country is required" })}
                         />
                          <span className="text-danger text-center">{errors.businessCountry?.message}</span>

                        </div>

                        <h5 className="font-weight-bold">Business Fiscal Year</h5>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="fiscaYearFrom">From:</label>
                              <input type="date" name="fiscaYearFrom" className="form-control"
                              {...register("fiscaYearFrom", { required: "Fisca Year From is required" })}
                              />
                              <span className="text-danger text-center">{errors.fiscaYearFrom?.message}</span>

                            </div>
                          </div>
                          <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="fiscaYearTo">To: <span></span></label>
                            <input type="date" name="fiscaYearTo" className="form-control "
                            {...register("fiscaYearTo", { required: "Fisca Year To is required" })}
                           />
                            <span className="text-danger text-center">{errors.fiscaYearTo?.message}</span>

                          </div>
                        </div>
                      </div>
                      </div>


                    </div>
                </div>
            </div>

           <div className="border-main mb-2 round">
            <div id="heading12" className="card-header primary" data-toggle="collapse" href="#accordion12"
            aria-expanded="false" aria-controls="accordion12">
                <a className="card-title lead collapsed text-dark" href="#">Personal</a>
            </div>
            <div id="accordion12" role="tabpanel" data-parent="#accordionWrap1" aria-labelledby="heading12" className="collapse"
                aria-expanded="false">
                <div className="card-content">
                    <div className="card-body">

                          <div className="form-body">
                            <p>Please make sure that your personal details remain up-to-date. Because
                              this information is used to verify your identity. You will need to send
                               our Support Team a message if you need to change it.
                            </p>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label htmlFor="from">First Name</label>
                                  <input type="text" name="firstname" className="form-control custom-radius"
                                   {...register("firstname", { required: "Firstname is required" })}
                                   />
                                   <span className="text-danger text-center">{errors.firstname?.message}</span>
                                </div>
                              </div>
                              <div className="col-md-6">
                              <div className="form-group">
                                <label htmlFor="to">Last Name <span></span></label>
                                <input type="text" className="form-control" name="lastname"
                                {...register("lastname", { required: "Lastname is required" })}

                                 />
                                 <span className="text-danger text-center">{errors.lastname?.message}</span>
                              </div>
                            </div>
                          </div>

                            <div className="form-group">
                              <label htmlFor="homeAddress">Registered Home Address</label>
                              <input type="text"  className="form-control"
                               placeholder="registered Home Address" name="homeAddress"
                               {...register("homeAddress", { required: "Registered Home Address is required" })}
                               />
                               <span className="text-danger text-center">{errors.homeAddress?.message}</span>
                            </div>

                            <div className="form-row">
                            <div className="form-group col-md-6">
                              <label htmlFor="phone">Phone Number</label>
                              <input type="text"  className="form-control"
                               placeholder="Phone Number" name="phone"
                               {...register("phone", { required: "Phone Number is required" })}
                               />
                               <span className="text-danger text-center">{errors.phone?.message}</span>
                            </div>
                            <div className="form-group col-md-6">
                              <label htmlFor="city">City</label>
                              <select className="custom-select" name="city"
                              {...register("city", { required: "City is required" })}
                              >
                                <option value="">Choose City</option>
                                <option value="Makurdi">Makurdi</option>
                                <option value="Enugu">Enugu</option>
                                <option value="Asaba">Asaba</option>
                              </select>
                              <span className="text-danger text-center">{errors.city?.message}</span>

                            </div>
                            </div>


                          <div className="form-row">
                          <div className="form-group col-md-6">
                              <label htmlFor="state">State</label>
                              <select className="custom-select" name="state"
                                {...register("state", { required: "State is required" })}
                                >

                                <option value="">Choose State</option>
                                <option value="Abuja">Abuja</option>
                                <option value="Lagos">Lagos</option>
                                <option value="Ibadan">Ibadan</option>

                              </select>
                              <span className="text-danger text-center">{errors.state?.message}</span>
                            </div>

                            <div className="form-group col-md-6">
                              <label htmlFor="country">Country</label>
                              <select className="custom-select" name="country"
                               {...register("country", { required: "Country is required" })}
                              >

                                <option value="">Choose Country</option>
                                <option value="Nigeria">Nigeria</option>
                                <option value="England">England</option>
                                <option value="USA">USA</option>
                              </select>
                              <span className="text-danger text-center">{errors.country?.message}</span>
                            </div>
                          </div>




                        </div>


                    </div>
                </div>
            </div>
          </div>
          <div className="border-main mb-2 round">
            <div id="heading13" className="card-header primary" data-toggle="collapse" href="#accordion13"
            aria-expanded="false" aria-controls="accordion13">
                <a className="card-title lead collapsed text-dark" href="#">Payout and Bank details</a>
            </div>
            <div id="accordion13" role="tabpanel" data-parent="#accordionWrap1" aria-labelledby="heading13" className="collapse"
                aria-expanded="false">
                <div className="card-content">
                    <div className="card-body">
                      <p>Please enter your bank account information. You will receive a four digit
                        verification code via text messages. Once you enter the code Troo will
                        direct all payout to the account
                      </p>

                        <div className="form-body">
                          <div className="form-row">
                          <div className="form-group col-md-6">
                            <label htmlFor="accountHolder">Account Holder or Business Name</label>
                            <input type="text" name="accountHolder"  className="form-control"
                            placeholder="Account Holder or Business Name"
                            {...register("accountHolder", { required: "Account Holder is required" })}
                            />
                            <span className="text-danger text-center">{errors.accountHolder?.message}</span>
                          </div>
                          <div className="form-group col-md-6">
                            <label htmlFor="accountNumber">Account Number</label>
                            <input type="text" name="accountNumber"  className="form-control"
                            placeholder="Account Number"
                            {...register("accountNumber", { required: "Account Number is required" })}
                            />
                            <span className="text-danger text-center">{errors.accountNumber?.message}</span>
                          </div>

                          </div>

                          <div className="form-group">
                            <label htmlFor="bankName">Bank Name</label>
                            <input type="text" name="bankName"  className="form-control"
                            placeholder="Bank Name"
                            {...register("bankName", { required: "Bank Name is required" })}
                            />
                            <span className="text-danger text-center">{errors.bankName?.message}</span>
                          </div>

                          <div className="form-row">
                          <div className="form-group col-md-6">
                            <label htmlFor="bvn">Bank Verificiation Number (BVN)/IBAN</label>
                            <input type="text" name="bvn"  className="form-control" placeholder="BVN"
                            {...register("bvn", { required: "BVN is required" })}
                            />
                            <span className="text-danger text-center">{errors.bvn?.message}</span>
                          </div>
                          <div className="form-group col-md-6">
                            <label htmlFor="bankCountry">Country</label>
                           <select className="custom-select" name="bankCountry"
                           {...register("bankCountry", { required: "Bank's Country is required" })}
                           >



                             <option value="">Choose Country</option>
                             <option value="Nigeria">Nigeria</option>
                             <option value="England">England</option>
                             <option value="USA">USA</option>
                           </select>
                           <span className="text-danger text-center">{errors.bankCountry?.message}</span>
                          </div>

                          </div>



                      </div>


                    </div>
                </div>
            </div>

        </div>
      </div>
    </div>
    <div className="d-flex justify-content-end">
      {loading==true? (<LoadingButton/>):(
      <button className="btn btn-main m-1">Save and Continue</button>
       ) }

        <button className="btn btn-outline-main m-1">Cancel</button>
    </div>
    </form>
  </div>
  </div>
  </div>
  </div>
  </>
     );
}

export default OrganizationProfile;
