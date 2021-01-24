import React, { useState } from "react";

import { CreateAnimation } from "@ionic/react";
import './Splash.css';
import { useHistory } from "react-router";

const Splash = () => {
    const history = useHistory()
    const [playAni,setPlayAni] = useState(false)

    function click(){
        setPlayAni(true)
        setTimeout(() => {
            history.push('/main')
        },1000)
        
    }

  return (
    <div>
      <CreateAnimation
         
         duration={1500}
         
         fromTo={[
           { property: 'transform', fromValue: 'translateX(0px)', toValue: 'translateX(100px)' },
           { property: 'opacity', fromValue: '1', toValue: '0.2' }
         ]}
         easing="ease-out"
         play={playAni}
      >
        <div onClick={() => {click()}} >

        <img src="assets/img/ica-slidebox-img-1.png" alt="" className="slide-image" />
            <h2 className="slide-title">
              Welcome to <b>ionic-project</b>
            </h2>
            <p>
              The <b>ionic-project</b> is a practical preview of the ionic framework in action, and a demonstration of proper code use.
              <b>touch</b> the screen to continue.
            </p>
        </div>
      </CreateAnimation>
    </div>
  );
};

export default Splash;

