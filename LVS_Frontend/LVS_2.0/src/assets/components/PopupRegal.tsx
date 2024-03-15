import React, { useState } from 'react';
import {Row, Col} from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import styles from './styles/PopupForm.module.css';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { Pie } from 'react-chartjs-2';

const PopupRegal = ({ onClose }, props) => {

  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const [category, setCategory] = useState("Alle"); 

  const categoryData = {
    labels: ['Lebensmittel', 'Elektronik', 'Haushaltsmittel'],
    datasets:[
      {
        data: [3,6,9],
        backgroundColor:['green', 'aqua', 'yellow']
      }
    ]
  };
  const categoryOptions = {}

  return (
    <>
      <div className={styles.backgroundDiv}
        onClick={handleOutsideClick}
      >
        <div className={styles.formDiv} id='regalForm'>
          <div className={styles.closingButtonArea}> <IconButton onClick={onClose} aria-label="close"> <CloseIcon /> </IconButton> </div>
          <h2>{props.regalName}</h2>
          <Row>
            <div className='col d-flex align-items-center'>
                <div className={styles.regalKPIWrapper}>
                    <span className={styles.regalKPI}> <h4>Regalnummer</h4> <h4>1</h4></span>
                    <span className={styles.regalKPI}> <h4>Max. Kapazität</h4> <h4>1000</h4></span>
                    <span className={styles.regalKPI}> <h4>Genutzte Kapazität</h4> <h4>500</h4></span>
                    <span className={styles.regalKPI}> <h4>Auslastung</h4> <h4>50%</h4></span>
                    <span className={styles.regalKPI}> <h4>Warenwert</h4> <h4>1000€</h4></span>
                </div>

            </div>
            <Col>
                <div className={styles.categoriesImport}>
                    <Pie data={categoryData} options={categoryOptions}></Pie>
                </div>
            </Col>
          </Row>
          
        </div>
          

        </div>
   
    </>  
  );
};

export default PopupRegal;
