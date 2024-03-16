import React, { useState } from 'react';
import {Row, Col, Form} from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import styles from './styles/PopupForm.module.css';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { Key } from '@mui/icons-material';

const PopupForm = ({ onClose }) => {
  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Form variables

  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [size, setSize] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Kategorie auswählen');
  const [regal, setRegal] = useState('Regal auswählen');

  const handleClick = (e) => {
    e.preventDefault();
    const itemData = { name, price, size, category, regal};
    console.log(itemData);

    for (let i = 0; i < Number(quantity); i++){
        fetch("localhost:8080/server/item/save",{
          method: "POST",
          headers:{"Content-Type": "application/json"},
          body: JSON.stringify(itemData)
        }).then(() => {
          console.log("Item added successfully")
        });
    }

  }


  return (

    
    <>
      <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>

      <script src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js" crossorigin></script>

      <script src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js" crossorigin></script>

      <script>var Alert = ReactBootstrap.Alert;</script>
      <div className={styles.backgroundDiv}
        onClick={handleOutsideClick}
      >
        <div className={styles.formDiv}>
          <div className={styles.closingButtonArea}> <IconButton onClick={onClose} aria-label="close"> <CloseIcon /> </IconButton> </div>
          <h2>Neue Ware erfassen</h2>
          <form>
            <Row>
              <div className='col d-grid gap-3'>
                <div className='row '>
                  <span className={styles.inputSpan}>
                    <input type="text" id="name" name="name" 
                    placeholder='Name' value={name} 
                    onChange={(e) => setName(e.target.value)}
                    />
                  </span>
                </div>
                <div className='row '>

                  <span className={styles.inputSpan}>
                    <input type="number" id="quantity" name="quantity" 
                    placeholder='Quantität' value={quantity} 
                    onChange={(e) => setQuantity(e.target.value)}
                    />
                  </span>
                </div>
                <div className='row '>
                  <span className={styles.inputSpan}>
                    <input type="number" id="size" name="size" 
                    placeholder='Größe' value={size} 
                    onChange={(e) => setSize(e.target.value)}
                    />
                  </span>
                </div>


              </div>
              <div className='col d-grid gap-3'>
                <div className='row '>
                    <span className={styles.inputSpan}>
                      <input type="number" id="price" name="price" 
                      placeholder='Preis' value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      />
                    </span>
                </div> 
                <div className='row btn-row'>
                  <Form.Select aria-label="Default select example" 
                  onChange={(e)=>{setCategory(e.target.value)}}
                  >
                    <option>Kategorie auswählen</option>
                    <option value="Lebensmittel">Lebensmittel</option>
                    <option value="Elektronik">Elektronik</option>
                    <option value="KategorieErstellen">Kategorie erstellen</option>
                  </Form.Select>
                </div>
                <div className='row btn-row'>
                  <Form.Select aria-label="Default select example"
                  onChange={(e)=>{setRegal(e.target.value)}}
                  >
                    <option>Regal auswählen</option>
                    <option value="Regal 1">Regal 1</option>
                    <option value="Regal 2">Regal 2</option>
                    <option value="Regal 3">Regal 3</option>
                  </Form.Select>
                </div>  
              </div>
            </Row>
            <footer className={styles.formFooter}>
              <Button type="submit" onClick={handleClick}>Ware hinzufügen</Button>
            </footer>

          </form> 
        </div>
      </div>
    </>  
  );
};

export default PopupForm;
