import { useState } from 'react';
import './App.css';
import Form from './Components/Form';

const teamList = [
  { userName: 'Fido', email: 'dog@robodog.com', role: 'Robo Dog' },
  { userName: 'Brock', email: 'brocky@tank.com', role: 'Main Tank' },
  { userName: 'Splyce', email: 'heals@maxhp.com', role: 'Mid Healer' }
]

const initialFormValues ={
  userName: '',
  email: '',
  role: '',
}

function App() {
  const [team, setTeam] = useState(teamList);
  const [values, setValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    setValues({...values, [inputName]: inputValue})
  }

  const submitForm = () => {
    const newMember = {
      userName: values.userName.trim(),
      email: values.email.trim(),
      role: values.role.trim()
    }
    setTeam([newMember, ...team])
  }

  return (
    <div className="App">
      <h1>Squad Members</h1>
      <Form 
        submit={submitForm}
        change={updateForm}
        values={values}
       />
      {team.map((user,idx) => (
        <div key={idx} className="member-box">
            <h3>Tag - {user.userName}</h3>
            <h4>Role - {user.role}</h4>
            <p>Contact - {user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default App;

// values={values}
        // change={change}
