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
    <div className={styles.backgroundDiv}
      onClick={handleOutsideClick}
    >
      <div className={styles.formDiv}>
        <div className={styles.closingButtonArea}> <IconButton onClick={onClose} aria-label="close"> <CloseIcon /> </IconButton> </div>
        <h2>Neue Ware erfassen</h2>
        <form>
          <Row>
            <Col>
              <Row>
              <span className={styles.inputSpan}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" />
              </span>
              </Row>
              <Row>
                <span className={styles.inputSpan}>
                  <label htmlFor="quantity">Quantität:</label>
                  <input type="number" id="quantity" name="quantity" />
                </span>
              </Row>
              <Row>
                <span className={styles.inputSpan}>
                  <label htmlFor="size">Größe:</label>
                  <input type="number" id="size" name="size" />
                </span>
              </Row>

            
            </Col>
            <Col>
              <span className={styles.inputSpan}>
                <DropdownButton id="dropdown-basic-button" title="Kategorie auswählen">
                    <Dropdown.Item href="#/action-1">Lebensmittel</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Elektronik</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Kategorie hinzufügen</Dropdown.Item>
                </DropdownButton>
              </span>
              <span className={styles.inputSpan}>
                <DropdownButton id="dropdown-basic-button" title="Regal auswählen">
                    <Dropdown.Item href="#/action-1">Regal 1</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Regal 2</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Regal 3</Dropdown.Item>
                </DropdownButton>
              </span>
              <span className={styles.inputSpan}>
                <label htmlFor="price">Preis:</label>
                <input type="number" id="price" name="price" />
              </span>
              
              
            </Col>
          </Row>
          <Button as="input" type="submit" value="Ware hinzufügen" />{' '}
        </form>
        
      </div>
    </div>
  );
};

export default PopupForm;
