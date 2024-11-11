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
                        <li><Link href="#">UI design</Link></li>
                        <li><Link href="#">UX design</Link></li>
                        <li><Link href="#">Wireframing</Link></li>
                        <li><Link href="#">Diagramming</Link></li>
                        <li><Link href="#">Brainstorming</Link></li>
                        <li><Link href="#">Online whiteboard</Link></li>
                        <li><Link href="#">Team collaboration</Link></li>
                    </ul>
                </div>
                <div>
                    <h4>Explore</h4>
                    <ul>
                        <li><Link href="#">Design</Link></li>
                        <li><Link href="#">Prototyping</Link></li>
                        <li><Link href="#">Development features</Link></li>
                        <li><Link href="#">Design systems</Link></li>
                        <li><Link href="#">Collaboration features</Link></li>
                        <li><Link href="#">Design process</Link></li>
                        <li><Link href="#">FigJam</Link></li>
                    </ul>
                </div>
                <div>
                    <h4>Resources</h4>
                    <ul>
                        <li><Link href="#">Blog</Link></li>
                        <li><Link href="#">Best practices</Link></li>
                        <li><Link href="#">Colors</Link></li>
                        <li><Link href="#">Color wheel</Link></li>
                        <li><Link href="#">Support</Link></li>
                        <li><Link href="#">Developers</Link></li>
                        <li><Link href="#">Resource library</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
