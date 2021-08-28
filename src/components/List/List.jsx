import React from 'react'

const List = ({
    data=[],
    className
}) => {
    return (
        <div>
            {data.map((item)=>
                <p className={className}>En cualquier {item}</p>
            )}    
        </div>
    )
}

export default List
