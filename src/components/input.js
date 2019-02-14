import React from 'react'
import styles from '../styles/input.module.css'


const Input = (props) => (
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
            <div className={styles.searchForm}>
                <label className={styles.username}>Username</label>
                <input className={styles.userinput} placeholder="Pick a username"/>
                <button className={styles.submit}>Search on GitHub</button>
                <p className={styles.text}>By clicking “Search on GitHub”, you agree to our terms of service and privacy statement. We’ll occasionally send you account related emails.</p>
            </div>
        </div>    
    </div>
)

export default Input;
