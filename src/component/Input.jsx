//Input.jsx는 중복이 아닌 비슷한 구조이기에 분리함
// import { useState, useRef } from "react";

export default function Input({id, text, ref, onChange, value, error, type='text'}){
  return (
    <div>
      <label htmlFor={id} style={{display: 'inline-block', width:'80px'}}>{text}</label>
      <input ref={ref} type={type} id={id} value={value} onChange={onChange}/>
      {error && <div style={{color: 'red'}}>{error}</div>}
    </div>
  );
}