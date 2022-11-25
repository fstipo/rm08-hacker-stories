import React from "react"


// const List = (props) => {
const List = ({ stories }) => {
    return (
        <ul>
            {/* {props.stories.map(item => <li key={item.ObjectID}> */}
            {stories.map(item => <li key={item.ObjectID}>
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