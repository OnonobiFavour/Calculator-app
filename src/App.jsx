import React from 'react'
import './App.css';
import {useState} from 'react'

function App () {
    const [results, setResult] = useState('')

    const handleClick = (e) =>{
        e.preventDefault()
        setResult(results.concat(e.target.value))
    }

    const cleardisplay = () =>{
        setResult('');
    }

    const calculate = () =>{
        setResult(eval(results).toString());
    }

    const fillBtn = () => {
        const btn = []
        // e.preventDefault();
        
        let i = 0;
        for(i = 0; i < 10; i++){
            btn.push(<input type='button' value={i} key={i} onClick={(e) => handleClick(e)}/>)
        }
        return btn;
    }

    return(
        <>
            <div className='calc'>
            <input type='text' placeholder='0' id='answer' value={results}/>
                <div className="wrapper">
                    {fillBtn()}
                    <input type='button' value='.' onClick={(e) => handleClick(e)}/>
                    <input type='button' value='%' />
                    <input type='button' id='btn' value='+' onClick = {handleClick}/>
                    <input type='button' id='btn' value='-' onClick = {handleClick}/>
                    <input type='button' id='btn' value='*' onClick = {handleClick}/>
                    <input type='button' id='btn' value='/' onClick = {handleClick}/>
                    <input type='button' id='btn' value='CE' className='btn-span' onClick = {cleardisplay}/>
                    <input type='button' id='btn-1' value='=' className='btn-span--2' onClick = {calculate}/>
                </div>
            </div>
            
        </>
    )
}

export default App;