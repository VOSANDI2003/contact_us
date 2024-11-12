import Link from 'next/link';
import styles from './Footer.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome

export default function Footer() {
    return (
        <footer className={styles.footer}>
            
            {/* Footer Links */}
            <div className={styles.footerLinks}>
                <div>
                    <h4>Use cases</h4>
                    <ul>
                        <li><Link href="#">Canvas</Link></li>
                        <li><Link href="#"> Blackboard</Link></li>
                        <li><Link href="#"> Moodle</Link></li>
                        <li><Link href="#">Edmodo</Link></li>
                        <li><Link href="#">Google</Link></li>
                        <li><Link href="#"> Microsoft Teams for Education</Link></li>
                        <li><Link href="#"> Socrative</Link></li>
                    </ul>
                </div>
                <div>
                    <h4>Explore</h4>
                    <ul>
                        <li><Link href="#">Moodle</Link></li>
                        <li><Link href="#">Google Classroom</Link></li>
                        <li><Link href="#">Canvas by Instructure</Link></li>
                        <li><Link href="#">Blackboard Learn</Link></li>
                        <li><Link href="#">Schoology</Link></li>
                        <li><Link href="#">Edmodo</Link></li>
                        <li><Link href="#">Microsoft Teams for Education</Link></li>
                    </ul>
                </div>
                <div>
                    <h4>Resources</h4>
                    <ul>
                        <li><Link href="#">EdTick</Link></li>
                        <li><Link href="#">Canvas by Instructure</Link></li>
                        <li><Link href="#">SC Training</Link></li>
                        <li><Link href="#">LearnWorlds</Link></li>
                        <li><Link href="#">Edvance360</Link></li>
                        <li><Link href="#">Sakai</Link></li>
                        <li><Link href="#">TalentLMS</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
