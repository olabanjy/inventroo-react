const ButtonProcessing = ({message})=>{
    return(
        <button className="btn btn-main mr-1" type="button" disabled>
  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                {message}
</button>
    )
}

export default ButtonProcessing;