import React, { useState } from 'react';
import HomePageHeader from './Header';
import './Createprocess.css';

function CreateProcess() {
  const [processName, setProcessName] = useState('');
  const [processDescription, setProcessDescription] = useState('');
  const [processes, setProcesses] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProcess = { name: processName, description: processDescription };
    setProcesses([...processes, newProcess]);
    setProcessName('');
    setProcessDescription('');
  };

  return (
    <div>
      <HomePageHeader/>
      <form onSubmit={handleSubmit}>
        <label>
          <h3>Process Name</h3>
          <input type="text" value={processName} onChange={(event) => setProcessName(event.target.value)} />
        </label>
        <br />
        <label>
         <h3>Description</h3> 
          <input type="text" value={processDescription} onChange={(event) => setProcessDescription(event.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
      <table  className="table table-primary">
        <thead>
          <tr>
            <th>Process Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody className='table table-striped'>
          {processes.map((process, index) => (
            <tr key={index}>
              <td>{process.name}</td>
              <td>{process.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CreateProcess;
