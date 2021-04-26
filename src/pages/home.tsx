import React from 'react';
import './home.scss';
import headerBg from '../images/header.png';
import {Chart1} from '../components/chart-1';
import {Chart2} from '../components/chart-2';


export const Home = () => {
  const year = new Date().getFullYear();

  return (
    <div className="home">
      <header style={{backgroundImage: `url(${headerBg})`}}/>
      <main>
        <section className="section1">
          <Chart1/>
          <Chart2/>

        </section>
        <section className="section2">
        </section>
        <section className="section3">1</section>
        <section className="section4">1</section>
        <section className="section5">1</section>

      </main>
      <footer>&copy; 小康康 2020-{year}</footer>
    </div>
  );
};
