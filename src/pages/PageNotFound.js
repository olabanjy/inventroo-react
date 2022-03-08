import {Link} from 'react-router-dom';
const PageNotFound = () => {
    return ( 
        <div className="content-body">
        <section className="flexbox-container">
        <div className="col-12 d-flex align-items-center justify-content-center">
    <div className="col-lg-4 col-md-8 col-10 p-0">
        <div className="card-header bg-transparent border-0">
            <h2 className="error-code text-center mb-2">404</h2>
            <h3 className="text-uppercase text-center">Page Not Found !</h3>
        </div>
        <div className="card-content">
        
            <div className="row py-2">
                <div className="col-12 col-sm-6 col-md-6 mb-1">
                    <Link to={'/'} className="btn btn-main btn-block"><i className="feather icon-home"></i> Home</Link>
                </div>
                <div className="col-12 col-sm-6 col-md-6 mb-1">
                    <Link to={'/dashboard'} className="btn btn-light btn-block"><i className="feather icon-user"></i>  Account</Link>
                </div>
            </div>
        </div>
        
    </div>
</div>
</section>





    </div>
     );
}
 
export default PageNotFound;