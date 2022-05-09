import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function AboutUs() {
  let navigate = useNavigate();

  let handleMove = () => {
    let id = 900;
    // navigate('/my-app/title/' + id);
    navigate(`/my-app/${id}`);
  };
  return (
    <div>
      <h1> this is AboutUs page</h1>
      <button onClick={handleMove}>Move To title</button>
    </div>
  );
}
