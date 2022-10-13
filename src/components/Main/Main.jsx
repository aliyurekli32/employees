import { useState } from "react";
import Page1 from "../Pages/Page1/Page1";
import Page2 from "../Pages/Page2/Page2";
import Page3 from "../Pages/Page3/Page3";
import Page4 from "../Pages/Page4/Page4";
import "./Main.css";



const Main = ({ data }) => {
    const [count, setCount] = useState(0);
  
    const inc = () => {
      setCount(count + 1);
      if (count >= 3) setCount(0);
    };
  
    const dec = () => {
      setCount(count - 1);
      if (count < 1) setCount(3);
    };
  
    let data1 = [];
    let data2 = [];
    let data3 = [];
    let data4 = [];
    let x = [
      <Page1 data={data1} />,
      <Page2 data={data2} />,
      <Page3 data={data3} />,
      <Page4 data={data4} />,
    ];
    let a = x[0];
    {
      data.map((item, index) => {
        if (index < 5) {
          data1.push(item);
        } else if (index < 10) {
          data2.push(item);
        } else if (index < 15) {
          data3.push(item);
        } else {
          data4.push(item);
        }
      });
    }
    if (count == 0) {
      a = x[0];
    } else if (count == 1) {
      a = x[1];
    } else if (count == 2) {
      a = x[2];
    } else {
      a = x[3];
    }
  
    return (
      <>
        <div className="container">
          <h1>Employee List</h1>
          <div>{a}</div>
          <div className="buton"><button
            onClick={dec}
            class="button-29"
            role="button"
          >
            Before
          </button>
          <button
            onClick={inc}
            class="button-29"
            role="button"
          >
            Next
          </button></div>
        </div>
      </>
    );
  };

export default Main;

