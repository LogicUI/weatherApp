/**
 * validate if the country returned from the api call contains characters from the user input
 * @param response the response from the api
 * @param search the search term querried 
 */

 const validateCountry = (response,search) => {
     return response.data.location.country.toLowerCase().includes(search.toLowerCase());
 }

 export default validateCountry;