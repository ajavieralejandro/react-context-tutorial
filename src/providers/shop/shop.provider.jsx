import React, { createContext,useState,useEffect } from 'react';
import SHOP_DATA from './shop.data';

export const ContextShop = createContext(
    {
        collections : {},
        collectionsPreview: () => {},
        selectCollection: urlParam => {}

    }
);

const ShopProvider = ({children}) => {
    const [collections, setcollections] = useState(SHOP_DATA);
    const collectionsPreview  = () => Object.keys(collections).map(key => collections[key]);
    const selectCollection = urlParam => collections[urlParam];
    return(  
    <ContextShop.Provider
        value={{
            collections,
            collectionsPreview,
            selectCollection
        }}
    >
        {children}
    </ContextShop.Provider>
    );

}

export default ShopProvider;