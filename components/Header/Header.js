import styles from './Header.module.scss';
import Image from 'next/image';

const Header = () => {
    return (
        <header className={styles.header}>
            <h1>OutPlan</h1>
            <div className={styles.profilepic}>
                <span className="material-icons">keyboard_arrow_down</span>
                    <img className={styles.profileimg} src="./alfredo_hotchlock.png" />
            </div>
        </header>
    )
}

export default Header;