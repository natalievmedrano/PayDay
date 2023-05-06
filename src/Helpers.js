// LOCAL STORAGE

export const getData = (key) =>{
    return JSON.parse(localStorage.getItem(key));
};


//delete item
export const deleteItem= ({key}) => {
    return localStorage.removeItem(key)
}