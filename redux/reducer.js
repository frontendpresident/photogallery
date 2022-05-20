import { openImage } from "./actions"

const initialState = {
  title: "",
  description: "",
  images: [],
  openImage: undefined,
  isOpenImage: false
}

const PhotoGalleryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_INFO":
      return {
        ...state,
        title: action.info.title,
        description: action.info.description
      }
    case "GET_IMAGES":
      return {
        ...state,
        images: action.images
      }
    case "SET_IMAGE":
      return {
        ...state,
        images: [...state.images, action.images]
      }
    case "SET_INFO":
      return {
        ...state,
        title: action.info.title,
        description: action.info.description
      }
    case "SET_TITLE":
      return {
        ...state,
        title: action.text
      }
    case "SET_DESC":
      return {
        ...state,
        description: action.text
      }
    case "DELETE_ALL":
      return {
        ...state,
        images: []
      }
    case "DELETE_BY_ID":
      const newImagesArr =
        state.images.filter(photo => photo.id !== action.id)
      return {
        ...state,
        images: newImagesArr
      }
    case "OPEN_IMAGE":
      const image = state.images.find(item => item.id === action.id)
      return {
        ...state,
        isOpenImage: !state.isOpenImage,
        openImage: image
      }
      case "CLOSE_IMAGE":
        return {
          ...state,
          isOpenImage: false,
          openImage: undefined
        }
    default:
      return state;
  }
}

export default PhotoGalleryReducer;