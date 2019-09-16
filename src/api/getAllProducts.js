import axios from 'axios';

const getAllProducts = () => {
    return new Promise( (resolve, reject) => {
        try{

            fetch('/services/catalog/v4/category/shop/new/all-new/index.json')
            .then(function(response) {
                return response.json();
            })
            .then(function(myJson) {
                resolve(myJson);
            });
        }catch(e){
            reject(e);
        }
    });
}

export default getAllProducts;