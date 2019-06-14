/**
 * changes the first letter to be uppercase ,
 *  used for ensuring the first letter of the search query countryname is uppercase
 */
export default (word) => {
  return  word.charAt(0).toUpperCase() + word.slice(1);
} 