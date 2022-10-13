import { useState } from 'react';
import "./Page3.css";



const Page3 = ({data}) => {
  return (
    <>
        <p className="employee">Employees 11 to 15</p>
        <br />  
      {data.map((item)=>{
        const {id, name, email, image, age}=item;
        return(
        <div key={id} className="card">
          
          <div>
            <img src={image} alt="resim" />
          </div>
          <div className="words">
            <p><b>{name}</b></p>
            <p>{email}</p>
            <p>{age} years</p>
          </div>
        </div>
      )})

      }
      
    </>
  );
};

export default Page3;
