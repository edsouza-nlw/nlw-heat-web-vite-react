import {useContext} from "react";

import {VscGithubInverted, VscSignOut} from "react-icons/vsc";

import styles from './styles.module.scss'
import {AuthContext} from "../../contexts/auth";

export function SendMessageForm() {
  const {user} = useContext(AuthContext)

  return (
    <div className={styles.sendMessageFormWrapper}>
      <button className='signOutButton'>
        <VscSignOut size='32'/>
      </button>

      <header className={styles.userInformation}>
        <div className={styles.userImage} key={user?.id}>
          <img src={user?.avatar_url} alt={user?.name}/>
        </div>
        <strong className={styles.userName}>{user?.name}</strong>
        <span className={styles.userGithub}>
          <VscGithubInverted size='16'/>
          {user?.login}
        </span>
      </header>

      <form className={styles.sendMessageForm}>
        <label></label>
      </form>
    </div>
  )
}
