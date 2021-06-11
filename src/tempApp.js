import './App.css';
import {
  XYPlot,
  HorizontalBarSeries,
  DiscreteColorLegend,
  XAxis,
  YAxis,
  ChartLabel,
} from 'react-vis';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <ChartLabel
        text='X Axis'
        className='alt-x-label'
        includeMargin={false}
        xPercent={0.025}
        yPercent={1.01}
      />
      <DiscreteColorLegend
        items={[
          {
            title: 'Disease risk without embryo screening',
            color: '#12939A',
            strokeStyle: 'dashed',
          },
          {
            title: 'Disease risk with embryo screening',
            color: '#79C7E2',
            strokeStyle: 'dashed',
          },
        ]}
        strokeStyle='dashed'
        orientation='horizontal'
      />
      <XYPlot width={1000} height={1000} xDomain={[0, 20]} yDomain={[0, 8]}>
        <HorizontalBarSeries
          data={[
            {
              x: 10,
              y: 0,
              label: 'test label',
            },
            {
              x: 9.813934856022279,
              y: 1,
            },
            {
              x: 8.408274121716424,
              y: 2,
            },
            {
              x: 7.3643788890882025,
              y: 3,
            },
            {
              x: 6.06788661684176,
              y: 4,
            },
            {
              x: 5.912211557321018,
              y: 5,
            },
            {
              x: 6.005257313453105,
              y: 6,
            },
            {
              x: 4.690650433894838,
              y: 7,
            },
            {
              x: 5.608967281901614,
              y: 8,
            },
          ]}
          style={{}}
        />
        <HorizontalBarSeries
          data={[
            {
              x: 10,
              y: 0,
            },
            {
              x: 10.524713120291766,
              y: 1,
            },
            {
              x: 10.361847754963726,
              y: 2,
            },
            {
              x: 10.172857928858253,
              y: 3,
            },
            {
              x: 9.994709052169911,
              y: 4,
            },
            {
              x: 9.208779124997513,
              y: 5,
            },
            {
              x: 10.067263032991853,
              y: 6,
            },
            {
              x: 11.41415260353679,
              y: 7,
            },
            {
              x: 13.126355710912852,
              y: 8,
            },
          ]}
          style={{}}
        />
        <XAxis title='Lifetime Probability of Developing Disease' />
        <YAxis />
      </XYPlot>
    </React.Fragment>
  );
}

export default App;
