/**
 * displays an error when the geolocation fails to pick up the user location
 * @param {integer} err error code from the geolocation app
 */
export const checkErrorCode = (err) => {
  const errMessage = {};
  switch (err.code) {
    case 1: // PERMISSION_DENIED
      errMessage["err"] =
        'Unable to access your location due to permissions please ensure you agree with the permissions to use this app';
      break;
    case 2: // POSITION_UNAVAILABLE
      errMessage["err"] =
        'The app is unable to pick up your location please ensure you are within an area with strong network coverage';
      break;
    case 3: // TIMEOUT
      errMessage["err"] =
        'The app is unable to pick up your location due to a page timeout please ensure you have a reliable internet access';
      break;
    default: // UNKNOWN
      errMessage["err"] =
        'The app is unable to pick your location due to a unknown error';
      break;
  }
  return errMessage;
};
