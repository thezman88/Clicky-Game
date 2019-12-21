import React from "react"


export default function Thumbnail(props){
    const styles = {
        width: '200px'
    };
    return (
        <img 
        src={props.src} 
        onClick={props.onClick}
        class="img-thumbnail"
        style={styles}

        />

    )
}