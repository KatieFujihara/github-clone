import React from 'react'
import ReactDOM from 'react-dom'
import styles from './src/styles/input.module.css'
import * as api from './api'

  class Form extends React.Component {
    constructor(props) {
      super(props)
    this.state = { userName : ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit = (event) => {
      event.preventDefault();  
      api.call(this.state.userName)
      .then((response) => {
      let user = this.props.onSubmit(response.data);
      this.setState({
        userName : user
      })
    })
  }
  handleChange(event) {
    let user = (event.target.value)
    this.setState({
      userName: user
    })
  }
    render() {
      return (   
        <div className={styles.row}>
          <div className={styles.col1}>
            <div className={styles.info}>
              <h1>Built for <br/>developers</h1>
              <p>GitHub is a development platform inspired by the </p>
              <p>way you work. From <a href='#'>open source</a> to <a href='#'>business</a>, you </p>
              <p>can host and review code, manage projects, and</p> 
              <p>build software alongside 31 million developers.</p>
            </div>
            <div className={styles.info2}>
              <p>GitHub is a development platform inspired by the way you work. From <a href='#'>open source</a> to <a href='#'>business</a>, you
                can host and review code, manage projects, and 
                build software alongside 31 million developers.</p>
            </div>
          </div>
          <div className={styles.col2}>
           <form onSubmit={this.handleSubmit} className={styles.searchForm}>
              <label className={styles.username}>Username</label>
              <input value={this.state.userName || ''} onChange={this.handleChange} className={styles.userinput} placeholder="Pick a username"/>
              <input type="submit" className={styles.submit}/>
              <p className={styles.text}>By clicking “Search on GitHub”, you agree to our terms of service and privacy statement. We’ll occasionally send you account related emails.</p>
          </form>
        </div>    
      </div>
      )
    }
  }

  const Card = (props) => {
    return (
      <div>
          <h1>{props.login}hello</h1>
          <div style={{ margin: '1em' }} >
              <img alt="avatar" style={{ width: '70px' }} src={props.avatar_url} />
          </div>
          <div style={{ fontWeight: 'bold' }}><h1>{props.login}</h1></div>
        </div>
    )
  }
  
 const CardList = (props) => {
  const cards = props.cards;
   return (
      <div>
        <ul>
        {cards.map(card => <Card {...card} />)}
        </ul>
      </div>
      );
  }


   class App extends React.Component {
    state = {
      cards: [],
    };
    addNewCard = (cardInfo) => {
      this.setState(prevState => ({
        cards: prevState.cards.concat(cardInfo)
      }))
    }
      render (){
        return (
          <div>
              <Form onSubmit={this.addNewCard} />
              <CardList cards={this.state.cards}/>
          </div> 
      );
  } 
}

export default App;