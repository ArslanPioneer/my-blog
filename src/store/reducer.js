import { combineReducers } from 'redux';
// import {reducer as headerReducer} from '../common/Header/store/reducer';
import {reducer as homeReducer} from '../pages/Home/store';
import {reducer as detailReducer} from '../pages/Details/store';
const reducer =combineReducers({
    //header: headerReducer,
    home: homeReducer,
    detail:detailReducer
})

export default reducer;
