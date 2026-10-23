import { Activity, Gauge, Server } from 'lucide-react';

const dashboardUrl =
  'http://localhost:3000/d/adjq7k2/devops-monitoring-dashboard?orgId=1&from=now-6h&to=now&timezone=browser&kiosk';

function Monitoring() {
  return (
    <section className="page-section learning-page">
      <div className="container">
        <p className="section-label">LIVE OBSERVABILITY</p>

        <h1 className="section-heading">
          System Monitoring Dashboard
        </h1>

        <p className="section-description">
          Monitor the DevOps Learning Hub application using
          real-time Prometheus metrics and Grafana visualizations.
        </p>

        <div className="monitoring-cards">
          <article className="card monitoring-card">
            <Server size={28} />
            <h2>Application Health</h2>
            <p>Monitor application availability and service health.</p>
          </article>

          <article className="card monitoring-card">
            <Activity size={28} />
            <h2>HTTP Request Rate</h2>
            <p>Track requests handled by the Nginx web server.</p>
          </article>

          <article className="card monitoring-card">
            <Gauge size={28} />
            <h2>Active Connections</h2>
            <p>Observe active connections to the web server.</p>
          </article>
        </div>

        <div className="card monitoring-placeholder">
          <h2>Live Grafana Dashboard</h2>
          <p>
            Live monitoring data from your Grafana dashboard.
          </p>

          <div className="grafana-frame">
            <iframe
              src={dashboardUrl}
              title="DevOps Monitoring Grafana Dashboard"
              width="100%"
              height="700"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Monitoring;