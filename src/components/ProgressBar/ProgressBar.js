import React from 'react';
import { Progress } from 'reactstrap';



const ProgressBar = (props) => {
    return (
      <div>
        <div className="text-center">1 of 5</div>
        <Progress value="1" max="5" />
         
      </div>
    );
  };
  
  export default ProgressBar;
  