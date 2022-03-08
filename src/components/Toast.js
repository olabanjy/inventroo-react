import {toast } from 'react-toastify';
export const notify = (type,message)=>{
    const customId = "custom-id-yes";

    switch(type){
        case "success":
            toast.success(message,{ toastId: customId});
            break;
        case "error":
            toast.error(message,{ toastId: customId});
            break;
        default:
                return toast(message);
    }
}