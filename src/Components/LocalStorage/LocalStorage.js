

const getBookId = () =>{
    const bookId = localStorage.getItem('id');
    if(bookId){
        return (JSON.parse(bookId))
    }
    return [];
};

const saveBookIdInLocal = (id) =>{
const localBookIdVariable = getBookId();
const exists = localBookIdVariable.find(bookId => bookId == id);
if(!exists){
    localBookIdVariable.push(id);
localStorage.setItem('id',JSON.stringify(localBookIdVariable))
}
};

export {saveBookIdInLocal,getBookId}