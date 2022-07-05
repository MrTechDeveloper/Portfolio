import { combineReducers } from "redux";
import AuthReducer from "./auth";
import ApplicationReducer from "./application";
// import CatReducers from "./catReducers";
// import SubCatReducers from "./subCatReducers";
// import SearchServicesReducers from "./searchServicesReducers";
// import SpProfileReducers from "./spProfileReducers";
// import loadingSubscriptions from "./loadingSubscriptions";
// import FinderSetupReducers from "./finderSetupReducers";
// import AddToCartReducers from "./addTocartReducers";
// import CurrentLocationReducers from "./currentLocationReducers";
// import JobsReducers from './jobsReducers';
// import PurmotionReducer from './purmotionReducer';
// import TransactionReducers from './transactionReducers';
// import TopRatedSpsReducers from './topRatedSpsReducers';
// import NotificationReducer from './notificationReducer';
// import MessagesReducers from './messagesReducers';
// import SystemConfigReducer from './systemConfigReducer';
// import SocialLinksReducer from './socialLinksReducer';
// import AppsyncClintReducer from './appsyncClintReducer';

export default combineReducers({
  auth: AuthReducer,
  application: ApplicationReducer,
  // CAT_DATA: CatReducers,
  // SEARCH_SERVICES_DATA: SearchServicesReducers,
  // SUB_CAT_DATA: SubCatReducers,
  // SP_PROFILE_DATA: SpProfileReducers,
  // LOADING_DATA: loadingSubscriptions,
  // FINDER_DATA: FinderSetupReducers,
  // ADD_TO_CART_DATA: AddToCartReducers,
  // CURRENT_LOCATION: CurrentLocationReducers,
  // JOB_DATA: JobsReducers,
  // PURMOTION_DATA: PurmotionReducer,
  // TRANSACTION_DATA: TransactionReducers,
  // TOP_RATED_SP_DATA: TopRatedSpsReducers,
  // NOTIFICATION_DATA: NotificationReducer,
  // MESSAGE_DATA: MessagesReducers,
  // SYSTEMCONFIG_DATA: SystemConfigReducer,
  // SOACIALLINKS_DATA: SocialLinksReducer,
  // APPSYNC_CLIENT: AppsyncClintReducer
});
