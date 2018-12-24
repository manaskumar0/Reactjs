import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Practise from './Practise/Practise';
import Radium, { StyleRoot } from 'radium';
class App extends Component {

  state = {
      position: [{
        id: 1,
        name:'MidField',
        statistic:'Game Maker'
      },
      {
        id: 2,
        name:'Attacker',
        statistic:'Goal Scorrer'
      },
    ],
    show: false
  }
  switchPositionHandler = (pos) =>{
    //alert('Hello The Position is Going to Change');
    //this.state.position[0].name = 'Attacker';
    this.setState({position: [{
      name: pos,
      statistic:'Goal Scorrer'
    },
    {
      name: pos,
      statistic:'Game Maker'
    }]})
  }

  deletePositionHandler = (index) => {
      //const position = this.state.position; because use of original value
      //const position = this.state.position.slice(); java script
      const position = [...this.state.position]; //ecma 6
      position.splice(index, 1);
      this.setState({position: position});
  }



  // nameChangeHandler = (event) => {
  //   this.setState({position: [{
  //     name: event.target.value,
  //     statistic:'Goal Scorrer'
  //   },
  //   {
  //     name: event.target.value,
  //     statistic:'Game Maker'
  //   }
  //   ]})
  // }

  nameChangeHandler = (event, id) => {

    const positionindex = this.state.position.findIndex(p =>{
        return p.id === id;
    });

    //const position = this.state.position[positionindex]; not use because of mutable object

    //const position = Object.assign({}, this.state.position[positionindex]); this will also work same as below
    const position = {
      ...this.state.position[positionindex]
    };

    position.name = event.target.value;

    const aposition = [...this.state.position];

    position[positionindex] = aposition;

      this.setState({position: position})
    }
  togglePositionHandler = () => {
    const sshow = this.state.show;
    this.setState({
      show: !sshow
    });
  }

  render() {

    const style = {
        backgroundColor: 'green',
        color: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer',
        ':hover': {
          backgroundColor: 'lightgreen',
          color: 'black'
        }

    };
    let show = null;
    if(this.state.show)
    {

      show = (
        <div> 
            {this.state.position.map((p, index)=> {
                return <Practise 
                click={() => this.deletePositionHandler(index)}
                position={p.name}
                statistic={p.statistic}
                key={p.id}
                changed={(event) => this.nameChangeHandler(event, p.id)}/>
            })}
            {/* <Practise name="Kevin Debryne" 
            position={this.state.position[0].name}
            statistic={this.state.position[0].statistic}
            changed={this.nameChangeHandler}>Degree: MBA</Practise>

            <Practise name={this.props.name} 
            position={this.state.position[1].name}
            statistic={this.state.position[1].statistic}
            click={this.switchPositionHandler.bind(this, 'Left Winger')}
          changed={this.nameChangeHandler}>Degree: MCA</Practise> */}
        </div>
      );
      style.backgroundColor='red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    //let classes = ['red', 'bold'].join(' '); //"red bold"

    const classes = [];
    if(this.state.position.length <= 1)
        classes.push('red');
    if(this.state.position.length <=0)
        classes.push('bold');
    

    
    return (
      <StyleRoot>
      <div className="App">
      <p className={classes.join(' ')}>Hello How are You?</p>
        <button key="123" style={style} onClick={this.switchPositionHandler.bind(this, 'Attacker')}>Change the Position</button>
        
        <button
        key="1233"
        style={style}
        onClick={() => this.switchPositionHandler('Winger')}>Set the Position</button>

        <button
        key="1234"
        style={style}
        onClick={this.togglePositionHandler}>Show the Div</button>
            
            {show}
          </div>
          </StyleRoot>
    );
  }
}

export default Radium(App);
