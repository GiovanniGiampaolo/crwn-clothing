import * as React from 'react'
import MenuItem from '../menu-item/menu-item.component.jsx'
import './directory.styles.scss'
import {SECTIONS} from './directory.constants'

class Directory extends React.Component {

    render() {
        return (
            <div className="directory-menu">
                {
                    SECTIONS.map(({title, imageUrl, id, size}) => (
                        <MenuItem  key={id} title={title} imageUrl={imageUrl} size={size}/>)
                    )
                }
            </div>
        )
    }
}

export default Directory
