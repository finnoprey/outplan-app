import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <h1>OutPlan</h1>
            <span class="material-icons">settings</span>
        </header>
    )
}

export default Header;