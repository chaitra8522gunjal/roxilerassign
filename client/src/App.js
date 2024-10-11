import './App.css';
import React, { useState } from 'react';
import { Layout, Menu, Select } from 'antd';
import Transactions from './components/Transactions';
import Stats from './components/Stats';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';


const { Header, Content, Footer } = Layout;


const navItems = [
  {
    key: 1,
    label: ( <NavLink to="/"><button className='button'>Transactions</button></NavLink> )
  },
  {
    key: 2,
    label: ( <NavLink to="/stats"><button className='button'>Stats</button></NavLink> )
  }
];
const options = [
  "All Months",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];


const App = () => {
  let [month, setMonth] = useState(3);

  const handleMonthChange = (value) => {
    setMonth(parseInt(value));
  };

  return (
    <BrowserRouter>
      <Layout>
        <Header
          style={{
            display: "flex",
            height: '80px',
            alignItems: "center",
            borderBottom :'1px solid silver',
            borderTop: '1px solid black',
            backgroundColor: '#141451',
            color: 'black'
          }}
        >
          {/* <h1 style={{ color: "white" }}>Dashboard</h1> */}
          <Menu
            
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            items={navItems}
            style={{
              flex: 1,
              padding: "0 60px",
              marginLeft:'500px',
              fontSize: '20px',
              color: 'black',            
              backgroundColor: '#141451',
              height: '60px'
            }}
          />
          <Select
            size="large"
            defaultValue={options[month]}
            onChange={handleMonthChange}
            style={{
              width: 200,
              marginTop: '130px',
              
            }}
            options={options.map((text, i) => {
              return {
                value: i,
                label: text
              };
            })}
          />
        </Header>
        <Content
          style={{
            padding: "0px 48px",
            backgroundColor: "#98c1d9",
            minHeight: 600,
            color: 'black'
          }}
        >
          <Routes>
            <Route path="/" element={
              <Transactions month={month} monthText={options[month]} />
            } />
            <Route path="/stats" element={
              <Stats month={month} monthText={options[month]} />
            } />
          </Routes>

        </Content>
        <Footer
          style={{
            textAlign: "center",
            backgroundColor:"#141451",
            color:"white"
          }}
        >
          Created by <strong>Chaitralee Gunjal</strong>
        </Footer>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
