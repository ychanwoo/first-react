import { useState, useRef } from 'react' 
export default function useEmailInput(){
  const [id, setId] = useState('');
  const [domain, setDomain] = useState('naver.com');
  const idRef = useRef(null); 

  const onChangeEmail = (e) =>{
    setId(e.target.value);
  };

  const onChangeDomain = (e) =>{
    setDomain(e.target.value);
  };

  return [id, domain, idRef, onChangeEmail, onChangeDomain];
}