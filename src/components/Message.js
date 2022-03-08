export const ErrorMessage = ({message})=>{
    return(
        <div className="alert alert-warning alert-dismissible fade show mt-1" role="alert">
  <strong>Error!</strong> {message.toString()}
  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
    )
}
