import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './Validation/ValidationComponent'
import CharComponent from './Char/CharComponent';

class App extends Component {

state = {
    textLength : 0,
    textInput : ''
}
/*
Bonjour M;
Suite à un empêchement j’étais incapable de faire la préinscription durant le bon delai, pour cela monsieur, j’ai pris l’autorisation de solliciter votre haute bienveillance de re-ouvrir une session pour que je puisse faire la préinscription.
En attendant une réponse favorable de votre part, veuillez accepter monsieur mes salutations les plus respectueuses.

*/

changeInputTextHandler = (event) =>{
    this.setState({
        textLength : event.target.value.length,
        textInput  :  event.target.value
    });
}

deleteLetterHandler = (index) =>{
   /* const char = this.state.textInput.split('')[index];
    console.log(char);*/

    const letters = [...this.state.textInput.split('')];
    letters.splice(index,1);

    const newTextInput = letters.join('')

    this.setState({
        textInput : newTextInput,
        textLength : newTextInput.length
    })
}

  render() {

      let letters = (
          <div>
            {
                this.state.textInput.split('').map((char , index) =>{
                    return <CharComponent letter={char} click={this.deleteLetterHandler.bind(this,index)}/>
                })
            }
          </div>
      );



    return (
      <div className="App">

        <input onChange={this.changeInputTextHandler} value={this.state.textInput}></input>
        <p>Text length : {this.state.textLength}</p>
        <ValidationComponent textLegth={this.state.textLength}/>
        {letters}
        <br/>
        <br/>
        <ol>
          <li>*Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>*Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>*Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>*Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>*Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>*When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
      </div>
    );
  }
}

export default App;
