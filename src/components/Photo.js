import React from 'react';

import '../assets/css/Photo.css'

export default (props) => (
  <div className="photoWrapper">
    <img src={ props.photo } alt="" />
    <a href={ props.photo } target="_blank" className="download" download>Télécharger</a>
  </div>
)
