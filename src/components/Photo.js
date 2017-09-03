import React from 'react';

import '../assets/css/Photo.css'

export default (props) => (
  <div className="photoWrapper">
    <img src={ props.photo.thumb } alt="" />
    <a href={ props.photo.full } target="_blank" className="download" download>Télécharger</a>
  </div>
)
