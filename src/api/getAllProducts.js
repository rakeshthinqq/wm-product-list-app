import axios from 'axios';

const getAllProducts = () => {
    return new Promise( (resolve, reject) => {
        try{

            fetch('/services/catalog/v4/category/shop/new/all-new/index.json')
            .then((response) =>{
                if(response) {
                    return response.json();
                } else {
                    throw 'No response from API'
                }
            })
            .then((myJson) =>{
                resolve(myJson);
            });
        }catch(e){
            reject(e);
        }
    });
}

export default getAllProducts;