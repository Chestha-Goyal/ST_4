import React, { useState } from 'react'
import Specailization from './Specailization';
import './Form.css';
import { Link, useNavigate } from 'react-router-dom';



export default function Form() {
  const [name, setname] = useState('');
  const [specailization, setspecailization] = useState('');
  const [work, setwork] = useState('');

  let history = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    let a = name, b = specailization, c = work;
    Specailization.push({ a, b, c });
    history('/added');


  }

  return (
    <div className='background'>
      <h1>PLACEMENT DATA</h1>
      <form className='container'>
        <label>NAME</label><br></br>
        <input type="text" placeholder='Enter your Nane' onChange={(e) => setname(e.target.value)} required></input><br></br>
        <label>SPECIALIZATION</label><br></br>
        <input type="text"   placeholder='Enter your Age' onChange={(e) => setspecailization(e.target.value)} required></input><br></br>
        <label >MAJOR PROJECT</label><br></br>
        <input type="number" placeholder='Enter number of Projects' onChange={(e) => setwork(e.target.value)} required></input><br></br>
        <Link to='/added'>
          <input className='btn' type="submit" onClick={handleSubmit}></input>
        </Link>

      </form>

    </div>
  )
}
