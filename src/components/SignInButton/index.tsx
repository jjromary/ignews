import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'


import styles from './styles.module.scss'

export function SignInButton(){

    const  isUserLoggedIn = true;

    return isUserLoggedIn ? (
        <button type="button" className={styles.signinbutton}>
            <FaGithub  color="#04d361"/>
            JJROMARY
            <FiX color='#737380' className={styles.colseIcon}/>
        </button>
    ) : (
        <button type="button" className={styles.signinbutton}>
            <FaGithub  color="#eba417"/>
            Sign In with Github
        </button>
    )
}