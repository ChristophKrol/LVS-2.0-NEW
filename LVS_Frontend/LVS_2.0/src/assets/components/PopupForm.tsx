import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import styles from './styles/PopupForm.module.css';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

const PopupForm = ({ onClose }) => {
  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

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
                    <input type="text" id="name" name="name" placeholder='Name' />
                  </span>
                </div>
                <div className='row '>

                  <span className={styles.inputSpan}>
                    <input type="number" id="quantity" name="quantity" placeholder='Quantität' />
                  </span>
                </div>
                <div className='row '>
                  <span className={styles.inputSpan}>
                    <input type="number" id="size" name="size" placeholder='Größe' />
                  </span>
                </div>


              </div>
              <div className='col d-grid gap-3'>
                <div className='row '>
                    <span className={styles.inputSpan}>
                      <input type="number" id="price" name="price" placeholder='Preis'/>
                    </span>
                </div> 
                <div className='row btn-row'>

                  <Dropdown>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                      Kategorie auswählen
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Lebensmittel</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Elektronik</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Kategorie erstellen</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>


                </div>
                <div className='row btn-row'>
                  <Dropdown>
                      <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        Regal auswählen
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Regal 1</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Regal 2</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Regal 3</Dropdown.Item>
                      </Dropdown.Menu>
                  </Dropdown>
                </div>  
              </div>
            </Row>
            <footer className={styles.formFooter}>
              <Button type="submit">Ware hinzufügen</Button>
            </footer>

          </form> 
        </div>
      </div>
    </>  
  );
};

export default PopupForm;
