import React from 'react'

const List = ({
    data=[],
    className
}) => {
    return (
        <div>
            {data.map((item)=>
                <p key={item} className={className} >{item}</p>
            )}    
        </div>
    )
}

export default List
