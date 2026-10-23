
import { NavLink } from 'react-router-dom';
import { Terminal } from 'lucide-react';

const links = [
  { name: 'Home', path: '/' },
  { name: 'Git & GitHub', path: '/git-github' },
  { name: 'CI/CD', path: '/ci-cd' },
  { name: 'Docker', path: '/docker' },
  { name: 'Kubernetes', path: '/kubernetes' },
  { name: 'Prometheus', path: '/prometheus' },
  { name: 'Grafana', path: '/grafana' },
  { name: 'Monitoring', path: '/monitoring' },
];

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <NavLink to="/" className="brand">
          <span className="brand-icon">
            <Terminal size={22} />
          </span>
          <span>
            DevOps<span className="brand-accent">Hub</span>
          </span>
        </NavLink>

        <nav className="nav-links" aria-label="Main navigation">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active' : ''}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;

