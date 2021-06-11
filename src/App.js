import './App.css';
import BarChart from './components/BarChart';
import ExampleBarChart from './components/ExampleBarChart';

function App() {
  const exampleData = [
    {
      country: 'AD',
      'hot dog': 38,
      'hot dogColor': 'hsl(319, 70%, 50%)',
      burger: 198,
      burgerColor: 'hsl(353, 70%, 50%)',
      sandwich: 198,
      sandwichColor: 'hsl(242, 70%, 50%)',
      kebab: 193,
      kebabColor: 'hsl(24, 70%, 50%)',
      fries: 28,
      friesColor: 'hsl(137, 70%, 50%)',
      donut: 152,
      donutColor: 'hsl(94, 70%, 50%)',
    },
    {
      country: 'AE',
      'hot dog': 150,
      'hot dogColor': 'hsl(273, 70%, 50%)',
      burger: 171,
      burgerColor: 'hsl(163, 70%, 50%)',
      sandwich: 100,
      sandwichColor: 'hsl(88, 70%, 50%)',
      kebab: 93,
      kebabColor: 'hsl(68, 70%, 50%)',
      fries: 175,
      friesColor: 'hsl(356, 70%, 50%)',
      donut: 113,
      donutColor: 'hsl(205, 70%, 50%)',
    },
    {
      country: 'AF',
      'hot dog': 137,
      'hot dogColor': 'hsl(81, 70%, 50%)',
      burger: 143,
      burgerColor: 'hsl(84, 70%, 50%)',
      sandwich: 109,
      sandwichColor: 'hsl(341, 70%, 50%)',
      kebab: 9,
      kebabColor: 'hsl(161, 70%, 50%)',
      fries: 189,
      friesColor: 'hsl(304, 70%, 50%)',
      donut: 184,
      donutColor: 'hsl(288, 70%, 50%)',
    },
    {
      country: 'AG',
      'hot dog': 109,
      'hot dogColor': 'hsl(88, 70%, 50%)',
      burger: 118,
      burgerColor: 'hsl(198, 70%, 50%)',
      sandwich: 15,
      sandwichColor: 'hsl(42, 70%, 50%)',
      kebab: 199,
      kebabColor: 'hsl(185, 70%, 50%)',
      fries: 194,
      friesColor: 'hsl(173, 70%, 50%)',
      donut: 53,
      donutColor: 'hsl(330, 70%, 50%)',
    },
    {
      country: 'AI',
      'hot dog': 106,
      'hot dogColor': 'hsl(313, 70%, 50%)',
      burger: 15,
      burgerColor: 'hsl(72, 70%, 50%)',
      sandwich: 179,
      sandwichColor: 'hsl(75, 70%, 50%)',
      kebab: 135,
      kebabColor: 'hsl(321, 70%, 50%)',
      fries: 164,
      friesColor: 'hsl(17, 70%, 50%)',
      donut: 0,
      donutColor: 'hsl(92, 70%, 50%)',
    },
    {
      country: 'AL',
      'hot dog': 14,
      'hot dogColor': 'hsl(151, 70%, 50%)',
      burger: 96,
      burgerColor: 'hsl(336, 70%, 50%)',
      sandwich: 37,
      sandwichColor: 'hsl(77, 70%, 50%)',
      kebab: 134,
      kebabColor: 'hsl(260, 70%, 50%)',
      fries: 87,
      friesColor: 'hsl(13, 70%, 50%)',
      donut: 163,
      donutColor: 'hsl(224, 70%, 50%)',
    },
    {
      country: 'AM',
      'hot dog': 174,
      'hot dogColor': 'hsl(266, 70%, 50%)',
      burger: 164,
      burgerColor: 'hsl(182, 70%, 50%)',
      sandwich: 161,
      sandwichColor: 'hsl(28, 70%, 50%)',
      kebab: 128,
      kebabColor: 'hsl(42, 70%, 50%)',
      fries: 136,
      friesColor: 'hsl(91, 70%, 50%)',
      donut: 53,
      donutColor: 'hsl(264, 70%, 50%)',
    },
  ];
  const data = [
    {
      country: 'AD',
      'No Intervention': 127,
      'No InterventionColor': 'hsl(329, 70%, 50%)',
      'Pre-implantation embryo screening': 150,
      'Pre-implantation embryo screeningColor': 'hsl(357, 70%, 50%)',
    },
  ];
  return (
    <div className='App'>
      <div style={{ width: '100%', height: 800 }}>
        <BarChart
          data={data}
          groupMode='grouped'
          layout='horizontal'
          enableGridY={false}
          enableGridX={true}
        />
        <ExampleBarChart
          data={exampleData}
          groupMode='grouped'
          layout='horizontal'
          enableGridY={false}
          enableGridX={true}
        />
      </div>
    </div>
  );
}

export default App;
