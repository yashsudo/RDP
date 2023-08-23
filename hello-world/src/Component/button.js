function Button ({buttonText}) {

      function handleClick(){
        alert('Button was clicked !');
      }

      return(
          <button onClick = {handleClick}>
            {buttonText}
          </button>
      )
}

export default Button;