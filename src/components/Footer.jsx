
import { Terminal } from 'lucide-react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Terminal size={19} />
          <span>DevOpsHub</span>
        </div>

        <p>
          Learn the tools. Understand the pipeline. Build together automatically.
        </p>

        <span className="footer-note">
          Built as a collaborative learning project for DOSS CIE 1.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
