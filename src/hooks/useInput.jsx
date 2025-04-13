import { useState, useRef } from 'react'

export default function useInput(initialValue){
  const [value, setValue] = useState(initialValue); //id, password, phone 등의 다양한 값들을 처리해야되기 때문에 value로 지정
  const ref = useRef(null);

  const onChange = (e) => {
    setValue(e.target.value);
  }

  return [value, ref, onChange];
};