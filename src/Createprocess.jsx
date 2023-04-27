import React, { useState } from 'react';
import HomePageHeader from './Header';
import './Createprocess.css';

function CreateProcess() {
  const [processName, setProcessName] = useState('');
  const [processDescription, setProcessDescription] = useState('');
  const [processes, setProcesses] = useState([]);
  const [processNameError, setProcessNameError] = useState('');
  const [processDescriptionError, setProcessDescriptionError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (processName.trim() === '') {
      setProcessNameError('Process name is required');
      return;
    }

    if (processDescription.trim() === '') {
      setProcessDescriptionError('Process description is required');
      return;
    }

    const newProcess = { name: processName, description: processDescription };
    setProcesses([...processes, newProcess]);
    setProcessName('');
    setProcessDescription('');
    setProcessNameError('');
    setProcessDescriptionError('');
  };

  const handleProcessNameChange = (event) => {
    setProcessName(event.target.value);
    setProcessNameError('');
  };

  const handleProcessDescriptionChange = (event) => {
    setProcessDescription(event.target.value);
    setProcessDescriptionError('');
  };

  return (
    <div>
      <HomePageHeader/>
      <form onSubmit={handleSubmit}>
        <label>
          <h3>Process Name</h3>
          <input type="text" value={processName} onChange={handleProcessNameChange} />
        </label>
        <br />
        <div style={{ color: 'red' }}>{processNameError}</div>
        <label>
          <h3>Description</h3>
          <input type="text" value={processDescription} onChange={handleProcessDescriptionChange} />
        </label>
        <br />
        <div style={{ color: 'red' }}>{processDescriptionError}</div>
        <button type="submit">Submit</button>
      </form>
      <br />
      <table className="table table-info">
        <thead>
          <tr>
            <th>Process Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody className="table table-success table-striped">
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
