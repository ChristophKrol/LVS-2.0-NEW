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
import styles from './styles/Warenausgang.module.css';
import Footer from "../Footer";
import SidebarMenu from "../assets/components/SidebarMenu";
import PopupExport from "../assets/components/PopupExport";


function Warenausgang(){

    const data = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        datasets: [{ 
          label: 'Ausgänge',
          data: [3,6,9,10,2,5],
          backgroundColor: 'red',
          borderColor: 'red',
          pointBorderColor: 'red',
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

    const categoryValueData = {
        labels: ['Lebensmittel', 'Elektronik', 'Haushaltsmittel'],
        datasets:[
          {
            data: [3,6,2],
            backgroundColor:['green', 'aqua', 'yellow']
          }
        ]
    };
    const categoryValueOptions = {}



    const dashboardData = {
      kpis: [
        {name: 'Export heute', value: '100'},
        {name: 'Export gesamt', value: '1200'},
        {name: 'Export diese Woche', value: '300'},
        {name: 'Exportierter Gesamtwert', value: '12000'},
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
        <SidebarMenu/>
        <div style={{padding: "0px 0px 0px 50px"}}>
            <DashboardHeader title = "Warenausgang" kpiData = {dashboardData}/>

            <Container>
              <Row>
                <Col className="text-center">
                  <h2>Exporte pro Woche</h2> 
                  <Container fluid className={styles.lineChart}>
                    <div className={styles.lieferungenVerlauf}> 
                        <Line data = {data} options ={options}></Line>
                    </div>
                  </Container>  
                </Col>  
              </Row>   
              <Row>
                <Col className="text-center">
                  <h2>Wertmäßiger Anteil</h2> 
                  <div className={styles.categoriesImport}>
                    <Pie data={categoryValueData} options={categoryValueOptions}></Pie>
                  </div>
                </Col>  
                <Col className="text-center">
                    <h2>Exportierte Kategorien</h2> 
                    <div className={styles.categoriesImport}>        
                        <Pie data={categoryData} options={categoryOptions}></Pie>
                    </div>
                    
                </Col>
              </Row> 
              </Container>
                

            <div className={styles.buttonDiv}>
                        <span className={styles.buttonWrapper}>
                            <DropdownButton id="dropdown-basic-button" title="Zeitraum auswählen">
                                <Dropdown.Item href="#/action-1">Woche</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Monat</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Zeitraum</Dropdown.Item>
                            </DropdownButton>
                            <Button bsClass="standardButton" variant="primary" onClick={openPopup}>Ware hinzufügen</Button>
                            {isPopupOpen && < PopupExport onClose={closePopup} />}
                        </span>

            </div>
            <Footer></Footer>
            
        </div>
      </>  
        
    );

}

export default Warenausgang
