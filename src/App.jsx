import './App.css';
import { Link } from 'react-router-dom';

function App() {
  const onClickA = (e) => {
    e.preventDefault();
    history.pushState(null, "", e.target.href);
    dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <div>
      <a onClick={onClickA} href="/signup">회원가입</a> {" "}
      <a onClick={onClickA} href="/login">로그인</a>
    </div>
  );
}

export default App;
