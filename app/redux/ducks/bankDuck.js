import { getBanksList } from '../../services/bankServices';

// INITIAL STATE
const bankState = {
  array: [],
  fetching: false,
  status: null,
  message: '',
}


// CONSTANTS
const PREFIX = 'BANK/';
const FETCHING = `${PREFIX}FETCHING`;
const FETCHING_ERROR = `${PREFIX}FETCHING_ERROR`;
const RESET_STATE = `${PREFIX}RESET_STATE`;
const POPULATE_BANKS = `${PREFIX}POPULATE_BANKS`;


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

function populateBanksAction(payload) {
  return { type: POPULATE_BANKS, payload }
}


// THUNKS
export const populateBanks = () => dispatch => {
  dispatch(fetchingAction());
  return getBanksList()
    .then(data => {
      dispatch(populateBanksAction(data));
      dispatch(resetStateAction());
    })
    .catch(error => console.log(error));
}


// REDUCER
export default function reducer(state = bankState, action) {
  switch (action.type) {
    case FETCHING:
      return { ...state, fetching: true, message: 'Recuperando lista' }

    case FETCHING_ERROR:
      return { ...state, status: 'error', message: 'Ups! Lamentamos las molestias. Por favor, intenta mas tarde' };

    case RESET_STATE:
      return { ...state, fetching: false, status: null, message: '' };

    case POPULATE_BANKS:
      return { ...state, array: action.payload };
  
    default:
      return state;
  }
}
