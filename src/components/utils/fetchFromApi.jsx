async function  fetchFromApi(region){
    let query = region === "All" ? "all" : `region/${region}`;
    let response = await fetch(`https://restcountries.com/v3.1/${query}`);
    let data =  response.json();
    return data;
}
export default fetchFromApi