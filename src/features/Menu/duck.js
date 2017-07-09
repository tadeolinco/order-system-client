import * as api from '../../api';

export const fetchMenus = () => async (dispatch, getState) => {
  dispatch({ type: 'FETCH_MENUS_REQUEST' });
  try {
    const response = await api.getMenus();
    const menus = await response.json();
    dispatch({ type: 'FETCH_MENUS_SUCCESS', menus });
  } catch (err) {
    dispatch({ type: 'FETCH_MENUS_ERROR', errorCode: err.statusText });
  }
};

const initialState = {
  isFetchingMenus: false,
  fetchMenusErrorCode: 0,
  menus: []
};

const reducer = (state = { ...initialState }, action = {}) => {
  switch (action.type) {
    case 'FETCH_MENUS_REQUEST':
      return {
        ...state,
        isFetchingMenus: true
      };

    case 'FETCH_MENUS_SUCCESS':
      return {
        ...state,
        isFetchingMenus: false,
        menus: action.menus
      };

    case 'FETCH_MENUS_FAILURE':
      return {
        ...state,
        isFetchingMenus: false,
        fetchMenusErrorCode: action.errorCode
      };

    default:
      return state;
  }
};

export default reducer;
