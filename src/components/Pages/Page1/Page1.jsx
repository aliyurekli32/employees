import { useState } from 'react';
import "./Page1.css"



const Page1 = ({data}) => {
  return (
    <>
        <p className="employee">Employees 1 to 5</p>
        <br />  
      {data.map((item)=>{
        const {id, name, email, image, age}=item;
        return(
        <div key={id} className="card">
          
          <div className="imga">
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

export default Page1;
