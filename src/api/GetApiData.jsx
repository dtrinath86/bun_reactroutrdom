export const GetMovieData = async () => {
    try {

        // const response = await fetch("https://www.omdbapi.com/?s=batman&apikey=3eb0022e");
        const response = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=3eb0022e&s=titanic&page=1");
        const data = await response.json();
        return data;
        
     } 
    catch (error) {
        console.log(error);
     }

}