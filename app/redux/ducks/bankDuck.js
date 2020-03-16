import { AsyncStorage } from 'react-native'; // * For futere from community package
import { getBanksList } from '../../services/bankServices';

// INITIAL STATE
const bankState = {
  array: [],
  fetching: false,
  status: null,
  message: '',
  local: false,
}


// CONSTANTS
const PREFIX = 'BANK/';
const FETCHING = `${PREFIX}FETCHING`;
const FETCHING_ERROR = `${PREFIX}FETCHING_ERROR`;
const RESET_STATE = `${PREFIX}RESET_STATE`;
const POPULATE_BANKS = `${PREFIX}POPULATE_BANKS`;
const LOCAL_VERIFICATION = `${PREFIX}LOCAL_VALIDATION`;


// ACTIONS CREATORS
function fetchingAction() {
  return { type: FETCHING };
}

function fetchingErrorAction(error) {
  return { type: FETCHING_ERROR, payload: error };
}

function resetStateAction() {
  return { type: RESET_STATE };
}

function populateBanksAction(payload, local = false) {
  return { type: POPULATE_BANKS, payload, local }
}

function localVerificationAction(payload) {
  return { type: LOCAL_VERIFICATION, payload };
}


// THUNKS
export const populateBanks = () => async dispatch => {
  dispatch(fetchingAction());
  
  const localData = await AsyncStorage.getItem('banks');
  
  if (localData) {
    dispatch(populateBanksAction(JSON.parse(localData), true));
    dispatch(resetStateAction());
    return localData;
  }

  // Requesting only if local data doesn't exist
  return getBanksList()
    .then(data => {
      if (!Array.isArray(data)) data = []; // to ensure that it will always be an array
      if (data && Array.isArray(data)) AsyncStorage.setItem('banks', JSON.stringify(data));

      dispatch(populateBanksAction(data));
      dispatch(resetStateAction());
      return data;
    })
    .catch(error => dispatch(fetchingErrorAction(error)));
}

// These are not really thunks. But, for convection we put it here
export const localVerification = () => async dispatch => {
  const localData = AsyncStorage.getItem('banks');
  dispatch(localVerificationAction(localData ? true : false));
}


// REDUCER
export default function reducer(state = bankState, action) {
  switch (action.type) {
    case FETCHING:
      return { ...state, fetching: true, message: 'Recuperando lista' }

    case FETCHING_ERROR:
      return {
        ...state,
        status: 'error',
        message: 'Ups! Lamentamos las molestias. Por favor, intenta mas tarde',
        fetching: false,
      };

    case RESET_STATE:
      return { ...state, fetching: false, status: null, message: '' };

    case POPULATE_BANKS:
      return { ...state, array: action.payload, local: action.local };

    case LOCAL_VERIFICATION:
      return { ...state, local: action.payload };
  
    default:
      return state;
  }
}
