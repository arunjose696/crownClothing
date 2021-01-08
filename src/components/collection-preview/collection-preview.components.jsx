import React from "react"
import "./collection-preview.components.scss"
import CollectionItem from "../collection-item/collection-item.component"
const CollectionPreview = ({title,routeName,items}) =>{
    
    return(<div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
        {
        items
        .filter((item,index)=> index<4)
        .map(({id,...otheCollectionProps}) =>(
            <CollectionItem key={id} {...otheCollectionProps}></CollectionItem>
        
        ))      
        }
        </div>
    </div>)


}

export default CollectionPreview;


