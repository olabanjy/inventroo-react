import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';
import { useTitle } from '../components/hooks/useTitle'
import { useSelector, useDispatch } from 'react-redux';
import {inviteUser,inviteUserComplete} from '../store/actions/organizationProfile';
import {getModules} from '../store/actions/modules';
import {getUsers} from '../store/actions/users';
import { useHistory} from 'react-router-dom';
import {notify} from '../components/Toast';
import LoadingButton from '../components/LoadingButton';
import { useForm } from 'react-hook-form';
import SideBar from '../components/SideBar';
import TopNav from '../components/TopNav';
import Loader from '../components/Loader';

const UserRoles = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const { success, error, loading,roles } = useSelector((state) => state.modules);
    const inviteUserState = useSelector((state) => state.inviteUser);
    const {success:successInviteUser,loading:loadingInviteUser,error:errorInviteUser} = inviteUserState;

    const usersState = useSelector((state) => state.users);
    const {users,success:successUsers,loading:loadingUsers,error:errorUsers} = usersState;
    const { token} = useSelector((state) => state.auth);

    const {register,formState: { errors },handleSubmit} = useForm();

    if(!token){
        notify("error","Authentication Required!!");
        history.push('/login');
    }

    function handleCloseModal(){
        document.getElementById("inviteuser").classList.remove("show", "d-block");
        document.querySelectorAll(".modal-backdrop")
            .forEach(el => el.classList.remove("modal-backdrop"));
    }

    const addUser = (data)=>{
        const params = {
            name:data.name,
            email:data.email,
            roleID:data.role,
            phone:data.phone
        }
    dispatch(inviteUser(params,token));
}

useEffect(()=>{
    dispatch(getModules(token));
    dispatch(getUsers(token));
},[dispatch]);

if(successInviteUser){
    handleCloseModal();
    notify("success","User Role Added Successfully");
    dispatch(inviteUserComplete());
  }
  useTitle('Inventroo | User Roles');

    return (
        <>
        <TopNav/>
        <SideBar/>
        {loading && <p className="mt-2">Loading...</p>}

        <div className="app-content content mt-1">
      <div className="content-wrapper">
        <div className="col-xl-12 col-lg-12">
            <p>{error && error}</p>
            <div className="d-flex flex-sm-row justify-content-between user-role">
                <div className="">
                <ul className="nav nav-tabs nav-underline no-hover-bg" role="tablist">
							<li className="nav-item">
								<a className="nav-link active" id="base-alluser" data-toggle="tab" aria-controls="alluser" href="#alluser" role="tab" aria-selected="true">All Users</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" id="base-roles" data-toggle="tab" aria-controls="roles" href="#roles" role="tab" aria-selected="false">Roles</a>
							</li>

				</ul>
                </div>
            </div>

            <div className="tab-content">

			<div className="tab-pane fade show active" id="alluser" role="tabpanel" aria-labelledby="base-alluser">
                <div className="float-right">
                            <button className="btn btn-success m-1" data-toggle="modal" data-target="#inviteuser">Invite User</button>
                            <button className="btn btn-light m-1">More</button>
                </div>
                    <table className="table">

                            <th scope="col">USER NAME</th>
                            <th scope="col">EMAIL</th>
                            <th scope="col">PHONE</th>
                            <th scope="col"><i className="feather icon-settings"></i></th>
                            <tbody>

                            {loadingUsers? (<Loader/>):(
                                    <>
                                    {users && users.map(user=>(
                                        <tr>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.phone}</td>
                                            <td>
                                            <button type="button" className="btn btn-icon btn-warning mr-1 mt-1"><i className="fa fa-edit"></i></button>

                                            <button type="button" className="btn btn-icon btn-danger mt-1"><i className="fa fa-remove"></i></button>
                                </td>
                                        </tr>
                                    ))}
                                    </>
                            ) }

</tbody>
                    </table>

			</div>
			<div className="tab-pane fade" id="roles" role="tabpanel" aria-labelledby="base-roles">
                <Link to="/account/setup/user-role/new">
                <button className="btn btn-success float-right mt-1 mb-1">New Role</button>

                </Link>
                    <table className="table table-striped table-responsive">

                            <th>ROLE NAMES</th>
                            <th>DESCRIPTION</th>
                            <th>DATE CREATED</th>
                            <th>DATE MODIFIED</th>
                            <th>ACTIONS</th>


                        <tbody>
                        {roles && roles.map(role=>(
                                <tr key={role.roleID}>
                                <td>{role.name}</td>
                                <td>{role.description}</td>
                                <td>{role.date_created}</td>
                                <td>{role.date_modified}</td>
                                <td>

                                            <button type="button" className="btn btn-icon btn-warning mr-1 mt-1"><i className="fa fa-edit"></i></button>

                                            <button type="button" className="btn btn-icon btn-danger mt-1"><i className="fa fa-remove"></i></button>




                                </td>
                            </tr>
                            ))}
                        </tbody>

                    </table>
				</div>

			</div>


                <div className="modal fade text-left" id="inviteuser" tabIndex="-1" role="dialog" aria-labelledby="InviteUser" aria-hidden="true">
									  <div className="modal-dialog" role="document">
										<div className="modal-content">
										  <div className="modal-header bg-light">
											<h3 className="modal-title" id="InviteUser"> Invite User</h3>
											<button type="button" className="close" data-dismiss="modal" aria-label="Close">
											  <span aria-hidden="true">&times;</span>
											</button>
										  </div>
										  <form onSubmit={handleSubmit(addUser)}>
											<div className="modal-body">
                                            <fieldset className="form-group floating-label-form-group">
													<label htmlFor="name">Email Address:</label>
													<input type="email" className="form-control"
                                                    placeholder="Email Address" name="email"
                                                    {...register("email", { required: "Email is required" })}
                                                    />
                                                     <span className="text-danger text-center">{errors.email?.message}</span>

												</fieldset>

												<fieldset className="form-group floating-label-form-group">
													<label htmlFor="name">Name</label>
													<input type="text" className="form-control"
                                                    placeholder="Name" name="name"
                                                    {...register("name", { required: "Name is required" })}
                                                    />
                                                     <span className="text-danger text-center">{errors.name?.message}</span>

												</fieldset>
                                                <fieldset className="form-group floating-label-form-group">
													<label htmlFor="phone">Phone</label>
													<input type="text" className="form-control"
                                                    placeholder="Phone" name="phone"
                                                    {...register("phone", { required: "Phone number is required" })}
                                                    />
                                                     <span className="text-danger text-center">{errors.phone?.message}</span>

												</fieldset>

                                                <fieldset className="form-group floating-label-form-group">
													<label htmlFor="role">Role Name</label>
                                                    <select className="custom-select" name="role" {...register("role", { required: "Please select a Role" })} >
                                                        <option value="">Choose a user role</option>
                                                    {roles && roles.map(role=>(
                                                        <option value={role.roleID}>{role.name}</option>
                                                    ))}

                                                    </select>



                                                     <span className="text-danger text-center">{errors.role?.message}</span>

												</fieldset>
											</div>
											<div className="modal-footer">

                                            <button type="submit" className="btn btn-main pr-1 pl-1">Send</button>


                                            <button type="reset" className="btn btn-outline-main" data-dismiss="modal">Cancel</button>

											</div>
										  </form>
										</div>
									  </div>
                                      </div>


					</div>
                    </div>
                    </div>
                    </>

     );
}

export default UserRoles;
