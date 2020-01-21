import {createContext} from 'react';

import SHOP_DATA from './shop.data';

const ContextCollection = createContext(SHOP_DATA);

export default ContextCollection;