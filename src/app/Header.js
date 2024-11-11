import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            {/* Logo */}
            <div className={styles.logo}>
                <span>🌐</span> {/* Replace with an actual logo image if needed */}
            </div>

            {/* Navigation Links */}
            <nav>
                <ul className={styles.navList}>
                    <li><Link href="#start-studying">Start Studying</Link></li>
                    <li><Link href="#about-us">About Us</Link></li>
                    <li><Link href="#modules">Modules</Link></li>
                    <li><Link href="#courses">Courses</Link></li>   
                </ul>
            </nav>

            {/* Buttons */}
            <div className={styles.buttons}>
                <button className={`${styles.button} ${styles.signIn}`}>Sign in</button>
                <button className={`${styles.button} ${styles.register}`}>Register</button>
            </div>
        </header>
    );
}
