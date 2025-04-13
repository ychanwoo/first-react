// import { useState, useRef } from 'react'

export default function Email({id, errors, domain, idRef, onChangeEmail, onChangeDomain}){ //props라고 부름
  const domains = ['naver.com', 'gmail.com', 'hanmail.com', 'kakao.com'];

  return (
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
  );
}