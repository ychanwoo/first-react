import { useState, useRef } from 'react'
import './App.css';
import EmailInput from './component/EmailInput';
import Input from './component/input';

function Signup() {
  const [id, setId] = useState('');
  const [domain, setDomain] = useState('naver.com');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});
  
  const idRef = useRef(null); 
  const passwordRef = useRef(null);
  const nicknameRef = useRef(null);
  const phoneRef = useRef(null);
  const counterRef = useRef(0);

  const onChangeEmail = (e) =>{
    setId(e.target.value);
  };

  const onChangeDomain = (e) =>{
    setDomain(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  }

  const onChangePhone = (e) => {
    setPhone(e.target.value);
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
        <EmailInput id={id} errors={errors} domain={domain} idRef={idRef} onChangeEmail={onChangeEmail} onChangeDomain={onChangeDomain} />
        <Input id="password" type="password" text="비밀번호" ref={passwordRef} onChange={onChangePassword} value={password} error={errors.passwordError} />
        <Input id="nickname" text="닉네임" ref={nicknameRef} onChange={onChangeNickname} value={nickname} error={errors.nicknameError} />
        <Input id="phone" type="tel" text="전화번호" ref={phoneRef} onChange={onChangePhone} value={phone} error={errors.phoneError} />
        <button onClick={onLogin}>회원가입</button>
      </div>
      <div>로그인</div>
    </>
  )
}

export default Signup