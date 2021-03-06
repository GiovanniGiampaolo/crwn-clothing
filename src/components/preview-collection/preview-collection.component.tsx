import React from 'react'
import './preview-collection.styles.scss'
import CollectionItem from '../collection-item/collection-item.component'

// @ts-ignore
const PreviewCollection = ({title, items}) => {

    return (<div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {
                // @ts-ignore
                items.slice(0, 4).map(({id, ...itemProps}) => (
                    <CollectionItem key={id} {...itemProps}/>
                ))}
        </div>
    </div>)


}

export default PreviewCollection
