export const SET_YEAR = "SET_YEAR";
export const GET_PHOTOS_REQUEST = "GET_PHOTO_REQUEST";
export const GET_PHOTOS_SUCCESS = "GET_PHOTO_SUCCESS";
export const GET_PHOTOS_ERROR = "GET_PHOTOS_ERROR";

export function setYearAction(year) {
  return {
    type: SET_YEAR,
    year: year
  };
}

export function getFotosRequest(year) {
  return {
    type: GET_PHOTOS_REQUEST,
    year: year
  };
}

export function getFotosSuccess(response) {
  return {
    type: GET_PHOTOS_SUCCESS,
    photos: response.photos
  };
}

export function getFotosError() {
  return {
    type: GET_PHOTOS_ERROR
  };
}

export function getPhotos(year) {
  return function(dispatch) {
    dispatch(setYearAction(year));
    dispatch(getFotosRequest(year));

    var response = {
      photos: [1, 2, 3, 4, 5],
      otherProps: "Bla-bla-bla"
    };

    var isError = Math.random() < 0.5;
    console.log("isError " + isError);

    if (isError) {
      setTimeout(() => dispatch(getFotosSuccess(response)), 2000);
    } else {
      setTimeout(() => {
        var error = new Error("data fetching error");
        console.error(error);
        dispatch(getFotosError());
      }, 2000);
    }
  };
}
