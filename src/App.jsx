import { useState, useRef } from 'react'
import './App.css'

function App() {
  const [id, setId] = useState('');
  const idRef = useRef(null); //초기값 -> {current:null} 
  const passwordRef = useRef(null);
  const counterRef = useRef(0);
  const [domain, setDomain] = useState('naver.com') ;
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const domains = ['naver.com', 'gmail.com', 'hanmail.com', 'kakao.com'];

  console.log('App', id);

  const onChangeEmail = (e) =>{
    setId(e.target.value);
  };

  const onChangeDomain = (e) =>{
    setDomain(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const fullDomain = `${id}@${domain}`;

  const onLogin = () => { //batch 처리
    counterRef.current += 1;

    if(!id?.trim()){
      setErrors(() => ({ idError: '아이디를 입력해주세요.'}));
      idRef.current?.focus();
      return;
    }
    if(!password?.trim()){
      setErrors({ passwordError: '비밀번호를 입력해주세요.'});
      passwordRef.current?.focus();
      return;
    }
    setErrors({}); //에러메시지 없애기 위한 빈 객체 생성
    console.log(fullDomain, password); // 서버로 보내서 로그인
  };

  return (
    <>
      <div style={{textAlign:'left'}} className='login-form'>
        <div>
          <label htmlFor="id" style={{display: 'inline-block', width:'80px'}}>아이디</label>
          <input ref={(node) => {idRef.current = node}} type="text" id="id" value={id} onChange={onChangeEmail}/>
          {domain === '' ? null : <span>@</span>} {/*domain이 빈 문자열이면 span태그 아니면 아무것도 보여주지말라*/}
          <select value = {domain} onChange={onChangeDomain}>
            {domains.map((d) => {
              return <option key = {d} value={d}>{d}</option>
            })}
            <option value="">직접입력</option>
          </select>
          {errors.idError && <div style={{color: 'red'}}>{errors.idError}</div>}
         </div>
        <div>
          <label htmlFor="password" style={{display: 'inline-block', width:'80px'}}>비밀번호</label>
          <input ref={passwordRef} type="password" id="password" value = {password} onChange={onChangePassword}/>
          {errors.passwordError && <div style={{color: 'red'}}>{errors.passwordError}</div>}
        </div>
        <button onClick={onLogin}>로그인</button>
      </div>
      <div>회원가입</div>
    </>
  )
}

export default App
