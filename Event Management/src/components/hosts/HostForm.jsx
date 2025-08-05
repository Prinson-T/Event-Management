import React from 'react'

function HostForm() {
  return (
    <div>
      <div className="background-container col-12 col-md-12">
        <div className="overlay-content">
          <form className="form-container">
            <input type="text" placeholder="name" value={first.name} name="name" onChange={inputData} />
            <input type="text" placeholder="email" value={first.email} name="email" onChange={inputData} />
            <input type="password" placeholder="password" value={first.password} name="password" onChange={inputData} />
            <input type="number" placeholder="salary" value={first.salary} name="salary" onChange={inputData} />
            <button onClick={saveData}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default HostForm