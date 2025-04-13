import { useState, useRef } from 'react'
import './App.css';
import EmailInput from './component/EmailInput';
import Input from './component/input';
import useInput from './hooks/useInput';
import useEmailInput from './hooks/useEmailInput';

function Signup() {
  const [nickname, nicknameRef, onChangeNickname] = useInput('');
  const [phone, phoneRef, onChangePhone] = useInput('');
  const [password, passwordRef, onChangePassword] = useInput('');
  const [id, domain, idRef, onChangeEmail, onChangeDomain] = useEmailInput('');
  const counterRef = useRef(0);
  const [errors, setErrors] = useState({});

  const fullDomain = `${id}@${domain}`;

  const onSignup = () => { //batch 처리
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

  const onLogin = () => {
    history.pushState(null, "", "/login");
    dispatchEvent(new PopStateEvent("popstate"));
  }

  return (
    <>
      <div style={{textAlign:'left'}} className='login-form'>
        <EmailInput id={id} errors={errors} domain={domain} idRef={idRef} onChangeEmail={onChangeEmail} onChangeDomain={onChangeDomain} />
        <Input id="password" type="password" text="비밀번호" ref={passwordRef} onChange={onChangePassword} value={password} error={errors.passwordError} />
        <Input id="nickname" text="닉네임" ref={nicknameRef} onChange={onChangeNickname} value={nickname} error={errors.nicknameError} />
        <Input id="phone" type="tel" text="전화번호" ref={phoneRef} onChange={onChangePhone} value={phone} error={errors.phoneError} />
        <button onClick={onSignup}>회원가입</button>
      </div>
      <button onClick={onLogin}>로그인</button>
    </>
  )
}

export default Signup