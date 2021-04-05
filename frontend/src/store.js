import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
  userListReducer,
  userUpdateReducer,
  userDeleteReducer,
} from './reducers/userReducers.js';
import {
  productListReducer,
  productTopRatedReducer,
  productDetailsReducer,
  productCreateReducer,
  productUpdateReducer,
  productDeleteReducer,
  productReviewCreateReducer,
} from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers.js';
import {
  orderDetailsReducer,
  orderCreateReducer,
  orderListReducer,
  orderListMyReducer,
  orderPayReducer,
  orderDeliverReducer,
} from './reducers/orderReducers';

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;
const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];
const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : {};
const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
  },
  userLogin: { userInfo: userInfoFromStorage },
};
const middlewares = [thunk];
const reducer = combineReducers({
  productList: productListReducer,
  productTopRated: productTopRatedReducer,
  productDetails: productDetailsReducer,
  productCreate: productCreateReducer,
  productUpdate: productUpdateReducer,
  productDelete: productDeleteReducer,
  productReviewCreate: productReviewCreateReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,
  orderDetails: orderDetailsReducer,
  orderCreate: orderCreateReducer,
  orderList: orderListReducer,
  orderListMy: orderListMyReducer,
  orderPay: orderPayReducer,
  orderDeliver: orderDeliverReducer,
});

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
