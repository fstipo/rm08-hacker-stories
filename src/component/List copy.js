import React from "react"

const List = ({ list }) => {

    const Item = ({ ObjectID, url, title, author, points, num_comments }) => <li key={ObjectID} item={list}>
        <span>
            <a href={url}>{title}</a></span>
        <span>{author}</span>
        <span>{num_comments}</span>
        <span>{points}</span>
    </li>

    return (
        <ul>
            {list.map((item) => <Item key={item.ObjectID} author={item.author} url={item.url} title={item.title} points={item.points} num_comments={item.num_comments}
            />)}
        </ul >
    )
}

export default List