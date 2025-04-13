import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  // const [url, setUrl] = useState('/');

  return (
    <div>
      <h1>카운터: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>

      {() => {
        if(window.location.pathname === '/'){
          return <MainPage />;
        }else{
          return <SearchPage/>
        }
      }}
    </div>
  );
}

export default Counter;
