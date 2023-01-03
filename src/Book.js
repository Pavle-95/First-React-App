import React from 'react'

const Book = ({imgLink, title, author}) => {
  // Attrubute, eventHendler
  // onClick, onMouseOver

  const clickHendler = (e) => {
    alert('hello world');
    console.log(e.target);
  }

  const complexExample = (author) => {
    console.log(author);
  }



  return <article className='book' onMouseOver={() => {
   console.log(title); 
  }}>
     <img src={imgLink} alt="" />
     <h1>{title}</h1>
     <h4>{author}</h4> 
     <button type='button' onClick={clickHendler}>Read More</button>
     <button type='button' onClick={() => complexExample(author)}>More complex function</button>
  </article>
}

export default Book