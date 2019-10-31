import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFrown } from "@fortawesome/free-solid-svg-icons";

const NoUser = () => (
  <ul className='no-username'>
    <li>Sorry, no username match your search.</li>
    <li className = "icon"><FontAwesomeIcon icon={faFrown}/></li>
  </ul>
);

export default NoUser