import React from "react"

const List = ({ list }) => {
    console.log("List renders");
    return (
        <ul>
            {list.map(item => <li key={item.ObjectID}>
                <span>
                    <a href={item.url}>{item.title}</a></span>
                <span>{item.author}</span>
                <span>{item.num_comments}</span>
                <span>{item.num_points}</span>
            </li>)
            }
        </ul >
    )
}

export default List