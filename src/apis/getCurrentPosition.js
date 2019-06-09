/**
 * gets the coordinates of the user coordinates latt and long values for the geolocation data
 * 
 */
export  default function  getCurrentPosition() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}
