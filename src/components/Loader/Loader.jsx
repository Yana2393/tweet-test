import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import css from './Loader.module.css'

function Loader (){
    return (
      <div className={css.loader}>
        <ThreeDots width="200" color="darkslateblue" />
      </div>
    );
}

export default Loader;