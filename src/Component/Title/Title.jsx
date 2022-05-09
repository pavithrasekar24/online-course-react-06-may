import React from 'react';
import { useParams } from 'react-router-dom';
export default function Title() {
  let param = useParams();
  console.log(param);
  return (
    <div>
      <h1>Title component {param.id}</h1>
    </div>
  );
}

// useNavigate navigate url , state:{} -data
// useLocation -fetch state object (history object)
// useParam url/id -> param.id
// subrouting -outlet
// task---
// step2 //login -> []   {id username, pwd , role} -10json -validate - some()//

// step1
// dropdown -> admin/agent remove
// admin header + content
// agent sidebar +content
//logout
