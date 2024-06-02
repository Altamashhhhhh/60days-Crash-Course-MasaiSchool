import React from 'react'
import "./ticketcreate.css"
const TicketCreate = () => {
  return (
    <div>
      <div className="main-create">
        <form action="#">
          <label htmlFor="yourname">Title :  <br />
          <input type="text" placeholder='Title' /> </label> 

          <label htmlFor="description">Description <br />
          <textarea name="description" id="description" placeholder='Description' cols={5} rows={5}></textarea></label>

          <select name="Assignee" id='assignee'>
            <option value="assignee">Assignees</option>
            <option value="john doe">John Doe</option>
            <option value="jake paul">Jake Paul</option>
            <option value="sarah">Sarah</option>
            <option value="sameer">Sameer</option>
            <option value="Ritesh">Ritesh</option>
          </select>

          <select name="status" id="status">
            <option value="status">Status</option>
            <option value="pending">Pending</option>
            <option value="progress">Progress</option>
            <option value="completed">Completed</option>
          </select>

          <select name="priority" id="priority">
            <option value="priority">Priority</option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </select>


          <button id='createticket'>Create Ticket</button>
        </form>
      </div>
    </div>
  )
}

export default TicketCreate
