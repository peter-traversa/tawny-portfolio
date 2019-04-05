import React from 'react';
import { Link } from 'gatsby';
import Pictures from '../components/Pictures';

import Layout from '../components/layout';
import pic01 from '../images/television/Boardwalk2.jpg';
import pic02 from '../images/television/Boardwalk7.jpg';
import pic03 from '../images/television/EXPLORER Moment of Death 026.jpg';
import pic04 from '../images/television/EXPLORER Moment of Death 053.jpg';
import pic05 from '../images/television/EXPLORER Moment of Death 056.jpg';
import pic06 from '../images/television/Gluten Free 1.jpg';
import pic07 from '../images/television/Gluten Free 4.jpg';
import pic08 from '../images/television/Gluten Free 6.jpg';
import pic09 from '../images/television/JackandTriumph.jpg';
import pic10 from '../images/television/PanAm1.jpg';
import pic11 from '../images/television/Screenshot_20180411-135514.jpg';
import pic12 from '../images/television/Screenshot_20190221-181728_Drive.jpg';
import pic13 from '../images/television/Screenshot_20190222-150708_YouTube.jpg';
import pic14 from '../images/television/Subway the Series 3.png';
import pic15 from '../images/television/SubwaySeries1.jpg';
import pic16 from '../images/television/The Daily Show- Tiger Mom Sketch 4.jpg';

const images = [pic01, pic02, pic03, pic04, pic05, pic06, pic07, pic08, pic09, pic10, pic11, pic12, pic13, pic14, pic15, pic16,];

const SecondPage = () => (
  <Layout>
    <Link to="/">Go back to the homepage</Link>
    <h1>Television</h1><br></br>
    <Pictures images={images} />
  </Layout>
)

export default SecondPage
