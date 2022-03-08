const LoadingButton = () => {
    return ( 
        <button className="btn btn-main mr-1" type="button" disabled>
            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                 Processing...
        </button>
     );
}
 
export default LoadingButton;