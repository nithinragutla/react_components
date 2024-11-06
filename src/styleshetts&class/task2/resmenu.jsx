import { Component } from 'react';
import Table from 'react-bootstrap/Table';

class Menu extends Component {
    render(){
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>VEG</th>
          <th>NON VEG</th>
          <th>DRINKS</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Butter chicken</td>
          <td>dal curry</td>
          <td>mozomozo drink</td>
        </tr>
        <tr>
          <td>2</td>
          <td>chicken tikka</td>
          <td>tomato allu fry</td>
          <td>cool tunder</td>
        </tr>
        <tr>
          <td>3</td>
          <td>PRAWNS</td>
          <td>mushroom curry</td>
          <td>Maaza</td>
        </tr>
        <tr>
          <td>4</td>
          <td>muttun fry</td>
          <td>sambaar</td>
          <td>coca cola</td>
        </tr>
      </tbody>
    </Table>
    
  );
}
}

export default Menu;