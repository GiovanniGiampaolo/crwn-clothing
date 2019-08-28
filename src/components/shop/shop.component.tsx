import React from 'react'
import {SHOP_DATA} from './shop.contants'
import PreviewCollection from '../preview-collection/previev-collection.component'

// @ts-ignore
class ShopPage extends React.Component {

    constructor(props: any) {
        super(props)
        this.state = {collections: SHOP_DATA}
    }

    render() {

        // @ts-ignore
        const {collections} = this.state

        return (
            <div className="shop-page">
                {
                    // @ts-ignore
                    collections.map(({id, ...otherCollectionProps}) => (
                        <PreviewCollection key={id} {...otherCollectionProps}/>
                    ))
                }
            </div>
        )
    }

}


// @ts-ignore
export default ShopPage
