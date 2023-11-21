async function  fetchCountry(code){
    let response = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
    let data =  response.json();
    return data;
}
export default fetchCountry