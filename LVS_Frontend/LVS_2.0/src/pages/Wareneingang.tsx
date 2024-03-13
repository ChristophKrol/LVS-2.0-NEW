import React, { useState } from "react";
import {Line} from 'react-chartjs-2';
import { Pie } from "react-chartjs-2";
import{
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend,
    Tooltip,
    ArcElement
  } from 'chart.js';

import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Container } from "react-bootstrap";
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";
import Button from 'react-bootstrap/Button';

import DashboardHeader from "../assets/components/DashboardHeader";
import styles from './styles/Wareneingang.module.css';
import PopupForm from "../assets/components/PopupForm";


function Wareneingang(){
    const data = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        datasets: [{ 
          label: 'Eingänge',
          data: [3,6,9,10,2,5],
          backgroundColor: 'blue',
          borderColor: 'blue',
          pointBorderColor: 'blue',
          tension:0.4
        }]
    }

    const options = {
        plugins: {
          legend: true
        },
        scales:{
          y: {
            min:1,
            max:15
          }
        }
    }
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

    const dashboardData = {
      kpis: [
        {name: 'Lieferungen heute', value: '100'},
        {name: 'Lieferungen gesamt', value: '1200'},
        {name: 'Lieferungen diese Woche', value: '300'},
        {name: 'Importierter Gesamtwert', value: '12000'},
      ]
    }

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
      setIsPopupOpen(true);
    }
    const closePopup = () => {
      setIsPopupOpen(false);
    }

    return (
        <>
            <DashboardHeader title = "Wareneingang" kpiData = {dashboardData}/>

            <Container>
              <Row>
                <Col className="text-center">
                  <h2>Lieferungen pro Woche</h2> 
                  <div className={styles.lieferungenVerlauf}>
                    
                    <Line data = {data} options ={options}></Line>
                  </div>
                </Col>  
                <Col className="text-center">
                  <h2>Importierte Kategorien</h2> 
                  <div className={styles.categoriesImport}>
                    
                    <Pie data={categoryData} options={categoryOptions}></Pie>
                  </div>
                </Col>  
              </Row>    
              </Container>
                

            <div className={styles.buttonDiv}>
                        <span className={styles.buttonWrapper}>
                            <DropdownButton bsClass ="standardButton" id="dropdown-basic-button" title="Zeitraum auswählen">
                                <Dropdown.Item href="#/action-1">Woche</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Monat</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Zeitraum</Dropdown.Item>
                            </DropdownButton>
                            <Button bsClass="standardButton" variant="primary" onClick={openPopup}>Ware hinzufügen</Button>
                            {isPopupOpen && < PopupForm onClose={closePopup} />}
                        </span>

                </div>
            
        </>
        
    );
}

export default Wareneingang