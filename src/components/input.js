// import React from 'react'
// import styles from '../styles/input.module.css'
// import axios from 'axios'

//   class Form extends React.Component {
//     state = {
//       userName: ''
//     }
  
//     handleSubmit = event => {
//       event.preventDefault()
    
//       axios
//         .get(`https://api.github.com/users?q=${this.state.userName}page=3&per_page=10`)
//         .then(resp => {
//           let users = this.props.onSubmit(resp.data)
//           this.setState({ users: users })
//         })
//     }
  
//     render() {
//       return (
//         <div>   
//             <form onSubmit={this.handleSubmit}>
//              <div className={styles.searchForm}>
//                 <label className={styles.username}>Username</label>
//                 <input value={this.state.userName} onChange={event => this.setState({ userName: event.target.value})}  className={styles.userinput} placeholder="Pick a username"/>
//                 <input type="submit" value="Search on GitHub" className={styles.submit}/>
//                 <p className={styles.text}>By clicking “Search on GitHub”, you agree to our terms of service and privacy statement. We’ll occasionally send you account related emails.</p>
//              </div>
//             </form>
//         </div>
//       )
//     }
//   }
//   function CardItem(props) {
//     return (
//       <div>
//           <li><h1>{props.login}</h1></li>
//           <div style={{ margin: '1em' }} >
//               <img alt="avatar" style={{ width: '70px' }} src={props.avatar_url} />
//           </div>
//           <div style={{ fontWeight: 'bold' }}><h1>{props.login}</h1></div>
//         </div>
//     )
//   }
  
//   function CardList(props) {
//     const cards = props.cards;
//     const cardItems = cards.map((card) =>
//       <CardItem key={card.id} />
//     );
//     return (
//       <ul>
//         {cardItems}
//       </ul>
//     );
//   }

//    class App extends React.Component {
//     state = {
//       cards: [],
//     }
  
//     addNewCard = cardInfo => {
//       this.setState(listOfCards => ({
//         cards: listOfCards.cards.concat(cardInfo)
//       }))
//     }
  
//     render() {
//       return (
//           <div className="codelines">
//               <Form onSubmit={this.addNewCard} />
//               <CardList cards={this.state.cards}/>
//         </div>      
//       )
//     }
//   }

// const Input = () => (
//     <div className={styles.row}>
//         <div className={styles.col1}>
//             <div className={styles.info}>
//                 <h1>Built for <br/>developers</h1>
//                 <p>GitHub is a development platform inspired by the </p>
//                 <p>way you work. From <a href='#'>open source</a> to <a href='#'>business</a>, you </p>
//                 <p>can host and review code, manage projects, and</p> 
//                 <p>build software alongside 31 million developers.</p>
//             </div>
//             <div className={styles.info2}>
//                 <p>GitHub is a development platform inspired by the way you work. From <a href='#'>open source</a> to <a href='#'>business</a>, you
//                 can host and review code, manage projects, and 
//                 build software alongside 31 million developers.</p>
//             </div>
//         </div>
//         <div className={styles.col2}>
//            <Form/>
//         </div>    
//     </div>
// )


// export default Input;
