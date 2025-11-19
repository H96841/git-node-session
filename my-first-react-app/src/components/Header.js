// import React from 'react'
function Header(props){
  return (
    <header>
      <h1>{props.title}</h1>
      <nav>
        <a href="#">בית</a><br></br>
        <a href="#">אודות</a><br></br>
        <a href="#">צור קשר</a>
      </nav>
    </header>
  );
}
export default Header