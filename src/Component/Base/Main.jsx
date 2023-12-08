import React, { useEffect } from 'react';
import style from './Main.module.css';

const Main = (props) => {
  useEffect(() => {
    // When the component mounts or when 'value' changes
    updateContent();
  }, [props.value]);

  const handleClick = () => {
    // Do something when Main is clicked
    if (props.onClick) {
      props.onClick();
    }
  };

  const updateContent = () => {
    // let body = document.getElementById('main');

    let body = document.getElementById(`main-${props.value}`);
    let p = body.querySelectorAll('p');
   p.forEach(x=>{
    x.innerHTML="";
   })
    switch (props.value) {
       case '1':
        p[4].innerHTML='&#x25CF';
        break;
       case '2':
        p[0].innerHTML='&#x25CF';
        p[8].innerHTML='&#x25CF';
        break;
       case '3':
        p[0].innerHTML='&#x25CF';
        p[4].innerHTML='&#x25CF';
        p[8].innerHTML='&#x25CF';
        break;
       case '4':
        p[0].innerHTML='&#x25CF';
        p[2].innerHTML='&#x25CF';
        p[6].innerHTML='&#x25CF';
        p[8].innerHTML='&#x25CF';
        break;
       case '5':
        p[0].innerHTML='&#x25CF';
        p[2].innerHTML='&#x25CF';
        p[4].innerHTML='&#x25CF';
        p[6].innerHTML='&#x25CF';
        p[8].innerHTML='&#x25CF';
        break;
       case '6':
        p[0].innerHTML='&#x25CF';
        p[2].innerHTML='&#x25CF';
        p[3].innerHTML='&#x25CF';
        p[5].innerHTML='&#x25CF';
        p[6].innerHTML='&#x25CF';
        p[8].innerHTML='&#x25CF';
        break;
      
        
        

      default:
      
    }
  };

  return (
    <div id={`main-${props.value}`} onClick={handleClick} className={style.main}>
      <div><p></p></div>
      <div><p></p></div>
      <div><p></p></div>
      <div><p></p></div>
      <div><p></p></div>
      <div><p></p></div>
      <div><p></p></div>
      <div><p></p></div>
      <div><p></p></div>
    </div>
  );
};

export default Main;
