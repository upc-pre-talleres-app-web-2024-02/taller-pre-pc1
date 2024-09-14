
import axios from 'axios';


const http = axios.create({ baseURL: 'https://api.chucknorris.io' });


export class ChuckNorrisService {

    //Retorna todas las categorías de chistes disponibles
     getAllCategories() {
         return http.get('/jokes/categories');
     }

     //Retorna un chis por categoría
     getJokesByCategory(category) {
         return http.get(`/jokes/random?category=${category}`);
     }

}