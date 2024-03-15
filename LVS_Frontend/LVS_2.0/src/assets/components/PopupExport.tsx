import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import styles from './styles/PopupForm.module.css';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

const PopupExport = ({ onClose }) => {
  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      <div className={styles.backgroundDiv}
        onClick={handleOutsideClick}
      >
        <div className={styles.formDiv}>
          <div className={styles.closingButtonArea}> <IconButton onClick={onClose} aria-label="close"> <CloseIcon /> </IconButton> </div>
          <h2>Ware exportieren</h2>
          <header className={styles.popupHeader}>
            <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                  Kategorie auswählen
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Lebensmittel</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Elektronik</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Möbel</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

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

          </header>
          <div className={styles.tableContainer}>

            <table className="table table-striped table-hover table-bordered" id="table-panel">
              <thead>
                <tr>
                  <th> Name </th>
                  <th> ID </th>
                  <th> Größe </th>
                  <th> Preis </th>
                  <th> Kategorie </th>
                  <th> Regal </th>
                  <th> Auswählen </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th> PS5 </th>
                  <th> 1 </th>
                  <th> 25 </th>
                  <th> 500 </th>
                  <th> Elektronik </th>
                  <th> Regal 1 </th>
                  <th> <input type="checkbox"/></th>
                </tr>
                <tr>
                  <th> Fernseher </th>
                  <th> 2 </th>
                  <th> 100 </th>
                  <th> 500 </th>
                  <th> Elektronik </th>
                  <th> Regal 2 </th>
                  <th> <input type="checkbox"/></th>
                </tr>
                <tr>
                  <th> PS5 </th>
                  <th> 1 </th>
                  <th> 25 </th>
                  <th> 500 </th>
                  <th> Elektronik </th>
                  <th> Regal 1 </th>
                  <th> <input type="checkbox"/></th>
                </tr>
                <tr>
                  <th> PS5 </th>
                  <th> 1 </th>
                  <th> 25 </th>
                  <th> 500 </th>
                  <th> Elektronik </th>
                  <th> Regal 1 </th>
                  <th> <input type="checkbox"/></th>
                </tr>
                <tr>
                  <th> PS5 </th>
                  <th> 1 </th>
                  <th> 25 </th>
                  <th> 500 </th>
                  <th> Elektronik </th>
                  <th> Regal 1 </th>
                  <th> <input type="checkbox"/></th>
                </tr>
                <tr>
                  <th> PS5 </th>
                  <th> 1 </th>
                  <th> 25 </th>
                  <th> 500 </th>
                  <th> Elektronik </th>
                  <th> Regal 1 </th>
                  <th> <input type="checkbox"/></th>
                </tr>
                <tr>
                  <th> PS5 </th>
                  <th> 1 </th>
                  <th> 25 </th>
                  <th> 500 </th>
                  <th> Elektronik </th>
                  <th> Regal 1 </th>
                  <th> <input type="checkbox"/></th>
                </tr>
                <tr>
                  <th> PS5 </th>
                  <th> 1 </th>
                  <th> 25 </th>
                  <th> 500 </th>
                  <th> Elektronik </th>
                  <th> Regal 1 </th>
                  <th> <input type="checkbox"/></th>
                </tr>
                <tr>
                  <th> Fernseher </th>
                  <th> 2 </th>
                  <th> 100 </th>
                  <th> 500 </th>
                  <th> Elektronik </th>
                  <th> Regal 2 </th>
                  <th> <input type="checkbox"/></th>
                </tr>
                <tr>
                  <th> Fernseher </th>
                  <th> 2 </th>
                  <th> 100 </th>
                  <th> 500 </th>
                  <th> Elektronik </th>
                  <th> Regal 2 </th>
                  <th> <input type="checkbox"/></th>
                </tr>
                <tr>
                  <th> Fernseher </th>
                  <th> 2 </th>
                  <th> 100 </th>
                  <th> 500 </th>
                  <th> Elektronik </th>
                  <th> Regal 2 </th>
                  <th> <input type="checkbox"/></th>
                </tr>
                <tr>
                  <th> Fernseher </th>
                  <th> 2 </th>
                  <th> 100 </th>
                  <th> 500 </th>
                  <th> Elektronik </th>
                  <th> Regal 2 </th>
                  <th> <input type="checkbox"/></th>
                </tr>

                </tbody>
            </table>

        </div>
          
          
        <footer className={styles.formFooter}>
          <Button type="submit">Waren exportieren</Button>
        </footer>

        </div>
      </div>
    </>  
  );
};

export default PopupExport;
