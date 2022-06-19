import React from 'react'
import './App.css';

export default function Survey() {
  return (
    <div>
      <h1>Survey Name</h1>
      <table>
        <tr>
            <th>Survey id</th>
            <th>Survey Name</th>

        </tr>
        <tr>
            <td>1</td>
            <td>Survey 1</td>
            <td><button>Add question</button></td>
        </tr>


      </table>

    </div>
  )
}
