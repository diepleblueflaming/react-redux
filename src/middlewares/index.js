import measureMiddleware from '../middlewares/measureMiddleware';
import debounceMiddleware from '../middlewares/debounceMiddleware';
import nullMiddleware from '../middlewares/nullMiddleware.';
import userFlowMiddleware from '../middlewares/userFlowMiddleware.';

import {ENV} from "../constants/constants";

const middlewares = [userFlowMiddleware, nullMiddleware('OH_NO'), debounceMiddleware];

if(process.env.NODE_ENV.toUpperCase() === ENV.DEVELOPMENT) {
  middlewares.push(measureMiddleware);
}

export default middlewares;

