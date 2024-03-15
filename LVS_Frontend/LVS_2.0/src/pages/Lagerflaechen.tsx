import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button, Container } from 'react-bootstrap';

import styles from './styles/Lagerflaechen.module.css';
import SidebarMenu from '../assets/components/SidebarMenu';
import DashboardHeader from '../assets/components/DashboardHeader';
import { useState } from 'react';
import PopupRegal from '../assets/components/PopupRegal';

const headerData = {
    kpis: [
      {name: 'Anzahl Regale', value: '1'},
      {name: 'Kapazität gesamt', value: '500'},

    ]
  }



function Lagerflaechen(){

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
      setIsPopupOpen(true);
    }
    const closePopup = () => {
      setIsPopupOpen(false);
    }
    
    return(
        <>
            <SidebarMenu/>
            <div style={{padding: "0px 0px 0px 150px"}} className={styles.wrapper}>
                <DashboardHeader title = "Lagerflächen" kpiData = {headerData}/>
                <main className={styles.regalSection}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Header as="h5" className="text-center">Regal 1</Card.Header>
                        <Card.Body className="text-center">
                            <Card.Title>Gesamte Kapazität:</Card.Title>
                            <Card.Text> 500 </Card.Text>
                            <Card.Title>Auslastung:</Card.Title>
                            <Card.Text> 50% </Card.Text>
                            <Button variant="primary" onClick={openPopup}> Mehr </Button>
                            {isPopupOpen && < PopupRegal onClose={closePopup} regalName="Regal" />}
                        </Card.Body>
                    </Card>
                </main>
                <Container fluid style={{display: 'flex',justifyContent: 'center'}}>
                    <Button variant="primary" > Lagerfläche hinzufügen </Button>
                    
                </Container>
            </div>
        </>
        
    );

}

export default Lagerflaechen;

