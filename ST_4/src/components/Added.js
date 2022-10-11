import React from 'react'
import {useNavigate} from 'react-router-dom';
import Specailization from './Specailization';
import './added.css';


export default function Added() {
  let history=useNavigate();
  history('/');

  return (
    <div className='background'>
    <h1>PERSON'S DATA</h1>
    <div className='tablecard'>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Specailization</th>
            <th>Major Project</th>
          </tr>

        </thead>
        <tbody>
          {
            Specailization.map((item)=>{
              return(
                <tr >
                  <td>{item.a}</td>
                  <td>{item.b}</td>
                  <td>{item.c}</td>

                </tr>
              )
            }
            )
          }
        </tbody>
      </table>
      </div>

    </div>
  )
}

