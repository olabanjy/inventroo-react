import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';
import { useTitle } from '../components/hooks/useTitle'
import { useSelector, useDispatch } from 'react-redux';
import {addUserRole,addUserRoleComplete,getRolesAndModules} from '../store/actions/organizationProfile';
import { useHistory} from 'react-router-dom';
import {notify} from '../components/Toast';
import {getModules} from '../store/actions/modules';

const Warehouse = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const rolesAndModules = useSelector((state) => state.modules);
    const { success, error, loading,modules } = rolesAndModules;
    const { token} = useSelector((state) => state.auth);

   useEffect(()=>{
    dispatch(getModules()); 
    },[dispatch]);

      if(loading===true){
        return <h5>Loading...</h5>
      }

    return ( 
        <h3>Warehouse</h3>
     );
}
 
export default Warehouse;