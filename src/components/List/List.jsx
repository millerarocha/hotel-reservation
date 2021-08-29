import React from 'react'

const List = ({
    data=[],
    className
}) => {
    return (
        <div>
            {data.map((item)=>
                <p className={className} >En {item}</p>
            )}    
        </div>
    )
}

export default List
