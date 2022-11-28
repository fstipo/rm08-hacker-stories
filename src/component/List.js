import React from 'react'

const Item=({url,title,author,num_comments,points})=> <li>
    <span><a href={url}>{title}</a></span>
    <span>{author}</span>
    <span>{num_comments}</span>
    <span className='me-2'>{points}</span>
</li>

const List = ({list}) => {
  return (
    <ul>
        {list.map(item=><Item key={item.objectID} {...item}/>)}
    </ul>
  )
}

export default List