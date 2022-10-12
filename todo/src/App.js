import './App.css';
import { useState, useRef } from 'react';
import React from 'react';
// import Input from './Input';

function App() {

  const focusRef = useRef();

  const focus = (target) => {
    console.log(target)
    if (focusRef.current === target){
      focusRef.current.focus()
    }
  }

  const handleKeyDown = e => {
    const form = e.target.form;
    const index = [...form].indexOf(e.target);
    if (e.keyCode === 13){ // if enter is pressed
      setinputList(inputList.concat({task:''}));
      focus(form.elements[index+1])
      e.preventDefault();
      // https://thewebdev.info/2021/10/02/how-to-focus-on-the-next-field-when-pressing-enter-in-react/
      console.log(inputList);
    }else if(e.keycode === 8 && e.target.value === ''){ // if delete is pressed and textbox is empty
      //pop prev elements
      setinputList(inputList.pop());
      e.preventDefault();
    }else{ // update each keypress into task
      inputList[index].task = e.target.value; //Uncaught TypeError: inputList[index] is undefined
    }
  }

  const deleteTask = e => {
    //implement
  }

  const [inputList, setinputList] = useState([{task:''},{task:''}]);



  // useEffect(() =>{
  //   addElement();
  //   console.log(inputList);
  // }, [enter])

  return (
    <div className="App">
      <div className='title'>
        <h1>Hi, Welcome to the To Do App</h1>
      </div>
      <form className='form' action='' method='GET'>
          {
            inputList.map((input, index) => {
              // if (input[index+1] == null){
              //   return 
              // }
              return (
                <div>
                  <input type='text' ref={focusRef} id={index} className='tasks' key={index} placeholder='Task Here' onKeyDown={handleKeyDown}/>
                  <button onClick={deleteTask}>delete</button>

                </div>
              )
            })
          }
      </form>
    </div>
  );
}

export default App;
