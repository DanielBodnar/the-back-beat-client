import { createStore } from 'redux';

const initialState = {
  authorized: false,
  currentUsername: '',
  showUserAuthForm: false,
  userAuthType: '',
  userInfo: {
    city: '',
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    username: '',
  },
  gigs: [
    {title: 'United Methodist', date: '9/23', time: '7:00pm', details: 'Playing a Sunday night service at First United Methodist Church of Lewisville.'},
    {title: 'Andy\'s', date: '9/25', time:'9:00pm', details: 'Gig with Ashley Gatta and The Free People. Might go on later.'},
    {title: 'House of Blues', date:'9/30', time: '10:00pm', details: 'Opening for Mutemath. Load in is at 8:00pm, soundcheck at 9:00pm.'}
  ],
  rehearsals: [
    {title: 'United Methodist', date: '9/19', time: '2:00pm', location: 'Cody\'s house'},
    {title: 'Andy\'s', date: '9/22', time:'7:00pm', location: 'Ashley\'s house'},
    {title: 'House of Blues', date:'9/28', time: '8:00pm', location: 'Silver Studios in Dallas'}
  ],
  userBands: [
    {name: 'Ashley Gatta and The Free People', url: '/ashleygattandthefreepeople'},
    {name: 'Karyna Micaela', url: '/karynamicaela'},
    {name: 'Zach Balch', url: '/zachbalch'},
    {name: 'Mouse Rat', url: '/mouserat'},
    {name: 'Stevie Wonder', url: '/steviewonder'}
  ]
}

const reducer = (state = initialState, action) => {
  console.log('reducer running', action);
  switch (action.type) {
    case 'HANDLE_FORM_INPUT_CHANGE':
      let updateObject = {};
      const inputName = action.input;
      updateObject[inputName] = action.value;
      let newUserInfo = Object.assign({}, state.userInfo, updateObject);
      return Object.assign({}, state, { userInfo: newUserInfo });
    case 'LOGOUT':
      return Object.assign({}, state, { authorized: false, currentUsername: '' });
    case 'TOGGLE_USER_AUTH_FORM':
      return Object.assign({}, state, { showUserAuthForm: !state.showUserAuthForm, userAuthType: action.userAuthType });
    case 'TOGGLE_USER_AUTH_TYPE':
      let newAuthType = state.userAuthType === 'Login' ? 'Sign Up' : 'Login';
      return Object.assign({}, state, { userAuthType: newAuthType });
    case 'USER_AUTH_FORM_SUBMIT':
      const userInfo = {
        city: '',
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        username: ''
      }
      return Object.assign({}, state, { authorized: true, currentUsername: action.username, showUserAuthForm: false, userAuthType: '', userInfo });
    default:
      return state;
  }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
