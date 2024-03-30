
const getWishlistId = ()=>{

    const wishlist = localStorage.getItem('wishId');

    if(wishlist){
    return JSON.parse(wishlist)
    }
    return [];
};

const saveWishId = (wishId) =>{

    const wishIdVariable = getWishlistId();

    const exists = wishIdVariable.find(wID => wID == wishId);
    if(!exists){
    wishIdVariable.push(wishId)
    }
    localStorage.setItem('wishId',JSON.stringify(wishIdVariable));
};

export {saveWishId,getWishlistId}