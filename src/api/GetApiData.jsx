export const GetMovieData = async () => {
    
    try {

        
        const response = await fetch(`http://localhost:5000/api/movies?search=titanic&page=1`);
        const data = await response.json();
        return data;
        
     } 
    catch (error) {
        console.log(error);
     }

}