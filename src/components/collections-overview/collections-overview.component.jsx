import React,{useContext} from 'react';

import {ContextShop} from '../../providers/shop/shop.provider';

import CollectionPreview from '../collection-preview/collection-preview.component';


import './collections-overview.styles.scss';

const CollectionsOverview = ({ collections }) => {
  const { collectionsPreview} = useContext(ContextShop);
  console.log("collections preview es : ",collectionsPreview);

return(
  <div className='collections-overview'>
    {collectionsPreview().map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);
}


export default CollectionsOverview;
