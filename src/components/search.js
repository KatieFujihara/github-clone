import React from 'react'
import styles from '../styles/input.module.css'
import axios from 'axios'

function Search(props) {

<div className={styles.searchForm}>
<label className={styles.username}>Username</label>
<input className={styles.userinput} placeholder="Pick a username"/>
<button className={styles.submit}>Search on GitHub</button>
<p className={styles.text}>By clicking “Search on GitHub”, you agree to our terms of service and privacy statement. We’ll occasionally send you account related emails.</p>
</div>
}
export default Search;
