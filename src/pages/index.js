import React from 'react';
import Willkommen from '../parts/Willkommen';
import Leistungsangebot from '../parts/Leistungsangebot';
import BestellungVereidigung from '../parts/BestellungVereidigung';
import Referenzen from '../parts/Referenzen';
import Separator from '../components/Separator';
import Kontakt from '../parts/Kontakt';
import Impressum from '../parts/Impressum';

const Index = () => {
  return (
    <>
      <Willkommen></Willkommen>
      <Leistungsangebot></Leistungsangebot>
      <Separator></Separator>
      <BestellungVereidigung></BestellungVereidigung>
      <Separator></Separator>
      <Referenzen></Referenzen>
      <Kontakt></Kontakt>
      <Separator></Separator>
      <Impressum></Impressum>
    </>
  );
};

export default Index;
