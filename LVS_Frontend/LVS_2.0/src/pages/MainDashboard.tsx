import styles from './styles/MainDashboard.module.css';
import {Line} from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';
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
import DashboardHeader from '../assets/components/DashboardHeader';
import { Container, Row, Col } from 'react-bootstrap';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  ArcElement
)




function MainDashboard(){
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [{ 
      label: 'Eingänge',
      data: [3,6,9,10,2,5],
      backgroundColor: 'blue',
      borderColor: 'blue',
      pointBorderColor: 'blue',
      tension:0.4
    },
    { 
      label: 'Ausgänge',
      data: [2,8,2,4,3,5],
      backgroundColor: 'red',
      borderColor: 'red',
      pointBorderColor: 'red',
      tension:0.4
    }
  ]
  };
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

  const auslastungData={
    labels:['Auslastung', 'Leer'],
    datasets: [{
      label: 'Auslastung',
      data: [700, 300],
      backgroundColor:['red','grey'],
      borderColor:['red','grey']
    }]
  };

  const auslastungOptions={

  }
  /*
  const textCenter = {
    id:'textCenter',
    beforeDatasetsDraw(chart, args, pluginOptions){
      const{ctx, data} = chart;
      ctx.save();
      ctx.font ='bolder 30px sans-serif'
      ctx.fillStyle = 'red';
      ctx.fillText('text', chart.getDataSetMeta(0).data[0].x, chart.getDataSetMeta(0).data[0].y)
    }
    
  }
  */
  const main = {
    kpis: [
    {name: 'Gelagerte Ware', value: '100'},
    {name: 'Eingänge', value: '50'},
    {name: 'Ausgänge', value: '30'},
    {name: 'Warenwert', value: '1240.50'}
    ]
  }

  const warenGruppenData = {
    labels: ['Lebensmittel', 'Elektronik', 'Haushaltsmittel'],
    datasets:[
      {
        data: [3,6,2],
        backgroundColor:['green', 'aqua', 'yellow']
      }
    ]
  };

  const warenGruppenOptions = {};

  const warenGruppenValueData = {
    labels: ['Lebensmittel', 'Elektronik', 'Haushaltsmittel'],
    datasets:[
      {
        data: [3,6,2],
        backgroundColor:['green', 'aqua', 'yellow']
      }
    ]
  }
  const warenGruppenValueOptions = {};

  return(
    <>
      <DashboardHeader title="Dashboard" kpiData={main}/>
      
      <div className={styles.diagramDiv}>

        <div className={styles.ein_ausgaenge}>
          <span>
            <h2>Ein- und Ausgänge</h2>
          </span>
          <Container fluid className={styles.lineChartContainer}>
            <div className={styles.lineChart}>
              <Line data = {data} options ={options}></Line>
            </div>  
          </Container>
        </div>
      </div>
      
      <section className={styles.warenDaten}>
        <h1>Warendaten</h1>
        <Container fluid>
          <Row className={styles.warenGruppenRow}>
            <Col className='text-center'>
              <h2> Warenkategorien </h2>
              <div className={styles.piechartDiv}>
                <Pie data={warenGruppenData} options={warenGruppenOptions}></Pie>
              </div>
            </Col>

            <Col className='text-center'>
              <h2> Wertmäßiger Anteil </h2>
              <div className={styles.piechartDiv}>
                <Pie data={warenGruppenData} options={warenGruppenOptions}></Pie>
              </div>
            </Col>

            <Col className='text-center'>
              <h2>Lagerauslastung</h2>
              <div className={styles.piechartDiv}>
                <Doughnut 
                  data = {auslastungData} 
                  options = {auslastungOptions}
                >

                </Doughnut>
          
              </div>
            </Col>
          </Row>
        </Container>

      </section>

      
    
    </>
  )
}

export default MainDashboard