export const GetMovieData = async () => {
    try {

        // const response = await fetch("https://www.omdbapi.com/?s=batman&apikey=3eb0022e");
        const response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${import.meta.env.VITE_APIMOVIE_KEY}&s=titanic&page=1`);
        const data = await response.json();
        return data;
        
     } 
    catch (error) {
        console.log(error);
     }

}