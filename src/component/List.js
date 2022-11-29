import React from 'react'

const Item=({url,title,author,num_comments:comments,points})=><li>
    <span className='me-2'><a href={url}>{title}</a></span>
    <span className='me-2'>{author}</span>
    <span className='me-2'>{comments}</span>
    <span>{points}</span>
</li>

const List = ({list}) => {
  return (
    <ul>
        {list.map(item=><Item key={item.objectID} {...item}/>)}
    </ul>
  )
}

export default List