import React, { useState } from 'react';
import './Home.css'
import Event from './Event';



function Home() {
  const [registrationnumber, setRegistrationnumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [error1, setError1] = useState('');
  const [wishes,setWishes] = useState('');
  const [eventname,setEventname] = useState('');
  


  const handleSubmit = (e) => {
    e.preventDefault();
    if(!registrationnumber){
        setError("please enter your registration number");
        return;
    }
    if(!password || password.length<6){
        setError1("please enter a valid password!");
        return;
    }
    if(!eventname){
        setError("please enroll into a event");
        return;
    }
    setError();
    setError1();
    setWishes("SUCCESSFULLY REGISTERED FOR " + {eventname})
    console.log(registrationnumber, password);
    
  };

  return (
    <div>
      <h1>
       <span className='youth'>YOUTH</span> 
       <span className='vibe'>VIBE</span>
      </h1>
      <form onSubmit={handleSubmit} className='form'>
        {wishes && <div classname='wishes'>{wishes}</div>}
        <label>
          RegNo:
          <input
            type="text"
            value={registrationnumber}
            onChange={(e) => setRegistrationnumber(e.target.value)}
          />
        </label>
        {error && <div className='err'>{error}</div>}
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label htmlFor='Event Name'>Event Name:</label>
            <select name='eventname' id='eventname' value={eventname} onChange={(e) => setEventname(e.target.value)}>
                <option value='DJ-NIGHT'>DJ NIGHT</option>
                <option value='BIKE SHOW'>BIKE SHOW</option>
                <option value='OUTDOOR GAMES'>OUTDOOR GAMES</option>
                <option value='FASHION SHOW'>FASHION SHOW</option>
            </select>
        {error1 && <div className='err1'>{error1}</div>}
        
        <input type="submit" value="Submit" />
        
      </form>
      <Event/>
    </div>
  );
}

export default Home;
