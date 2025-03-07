//cart-action
import { uiActions } from "../ui-slice";

const sendCartData=(cart: { items: any; totalQuantity: any; })=>{
    return async(dispatch: (arg0: { payload: any; type: "ui/showNotification"; }) => void)=>{
        dispatch(uiActions.showNotification({
            status:'pending',
            title:'sending...',
            message:'sending card data',
        }))
        const sendRequest=async()=>{
            const response= await fetch('https://a2128117-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json', 
            { method: 'PUT', body: JSON.stringify({
                items:cart.items||[],
                totalQuantity:cart.totalQuantity
            })})
            if(!response.ok){
            throw new Error('sending cart data fails.') 
            }
        }
        try{
            await sendRequest()
            dispatch(uiActions.showNotification({
            status:'success',
            title:'Success!',
            message:'send cart data successfuly!',
            }))
        }catch(error){
            dispatch(uiActions.showNotification({
                status:'error',
                title:'Error!',
                message:'send cart data failed!',
              }))
        }
    }
}
export {sendCartData}