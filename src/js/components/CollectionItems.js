import React from 'react';
import CollectionItem from './CollectionItem';

const CollectionItems = ({ items }) => {
    return (
        <div className="collection__items">
            {
                items.map(item => (
                    <CollectionItem {...item} />
                ))
            }
        </div>
    )
}

export default CollectionItems;