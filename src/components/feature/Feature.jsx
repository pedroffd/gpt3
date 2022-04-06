import React from 'react';

const Feature = ({ title,text }) => {
  return <div className='gpt3__features-container__feature'> 
  <div className='gpt3__features-container__feature-title'>
    <div>
      <h1>{title} </h1>
    </div>
  </div>
  <div className='gpt3__features-container_feature_text'>
{text}
  </div>

</div>;
};

export default Feature;
