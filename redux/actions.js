import PhotoGalleryApi from "../services";

export const setTitle = (text) => ({ type: "SET_TITLE", text })
export const setDesc = (text) => ({ type: "SET_DESC", text })
export const getInfo = (info) => ({ type: "GET_INFO", info });
export const getImages = (images) => ({ type: "GET_IMAGES", images });
export const setImages = (images) => ({ type: "SET_IMAGE", images });
export const setInfo = (info) => ({ type: "SET_INFO", info });
export const deleteAllImages = () => ({ type: "DELETE_ALL" });
export const deleteById = (id) => ({ type: "DELETE_BY_ID", id });
export const openImage = (id) => ({ type: "OPEN_IMAGE", id });
export const closeImage = () => ({ type: "CLOSE_IMAGE" });
export const setIsLoading = (isLoading) => ({
  type: "SET_IS_LOADING",
  isLoading,
});

export const getInfoThunk = () => (dispatch) => {
  return PhotoGalleryApi.getInfo().then((res) => {
    dispatch(getInfo(res));
  });
};

export const getImagesThunk = () => (dispatch) => {
  return PhotoGalleryApi.getImages()
    .then((res) => {
      dispatch(getImages(res));
    })
    .then(() => dispatch(setIsLoading(false)));
};

export const setImageThunk = (image) => (dispatch) => {
  const data = {
    image,
  };
  return PhotoGalleryApi.setNewImage(data).then((res) => {
    dispatch(setImages(res));
  });
};

export const setInfoThunk = (info) => (dispatch) => {
  return PhotoGalleryApi.setInfo(info).then((res) => {
    dispatch(setInfo(res));
  });
};

export const deleteAllThunk = (data) => (dispatch) => {
  return PhotoGalleryApi.deleteAllImages(data).then(() =>
    dispatch(deleteAllImages()),
  );
};

export const deleteByIdThunk = (id) => (dispatch) => {
  return PhotoGalleryApi.deleteImageById(id).then(() =>
    dispatch(deleteById(id)),
  );
};
