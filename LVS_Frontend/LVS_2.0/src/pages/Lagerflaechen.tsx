import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button, Container } from 'react-bootstrap';

import styles from './styles/Lagerflaechen.module.css';


function Lagerflaechen(){
    return(
        <>
            <header>
                <h1>Lagerflaechen</h1>
            </header>
            <main className={styles.regalSection}>
                <Card style={{ width: '18rem' }}>
                    <Card.Header as="h5" className="text-center">Regal 1</Card.Header>
                    <Card.Body className="text-center">
                        <Card.Title>Gesamte Kapazität:</Card.Title>
                        <Card.Text> 500 </Card.Text>
                        <Card.Title>Auslastung:</Card.Title>
                        <Card.Text> 50% </Card.Text>
                        <Button variant="primary"> Mehr </Button>
                    </Card.Body>
                </Card>
            </main>
            <Container fluid style={{display: 'flex',justifyContent: 'center'}}>
                <Button variant="primary"> Lagerfläche hinzufügen </Button>
            </Container>
            

            
        </>
    );

}

export default Lagerflaechen;

