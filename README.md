# 🚀 DevOps Learning Hub (CIE-01)

A beginner-friendly web platform designed to help students learn and understand essential DevOps tools through structured learning resources and practical demonstrations.

## 📌 About the Project

**DevOps Learning Hub** is an educational web application that introduces users to the tools and practices used in modern software development and deployment.

The project covers important DevOps technologies, including Git and GitHub, Jenkins, Docker, Kubernetes, Prometheus, and Grafana. It provides a centralized platform where students can explore these tools, understand their roles, and learn how they work together in a real-world DevOps workflow.

The frontend is built using React and Vite, providing a fast and interactive user interface.

## 🎯 Purpose

The main objectives of this project are to:

- Provide a centralized platform for learning essential DevOps tools.
- Explain the purpose and functionality of each technology.
- Demonstrate the software development and deployment lifecycle.
- Understand how automation, containerization, orchestration, and monitoring work together.
- Help students gain practical knowledge of real-world DevOps workflows.

## 🛠️ Technologies Used

| **Technology** | **Purpose** |
| -------------- | ----------- |
| React | Building the user interface |
| Vite | Development server and build tool |
| JavaScript | Application logic |
| HTML & CSS | Structure and styling |
| Git & GitHub | Version control and collaboration |
| Jenkins | Continuous Integration and Continuous Delivery (CI/CD) |
| Docker | Application containerization |
| Kubernetes | Container orchestration and deployment |
| Prometheus | Metrics collection and monitoring |
| Grafana | Metrics visualization and dashboards |

*Note: The React frontend is the main application. Integration with DevOps tools is implemented and demonstrated as part of the project workflow.*

## ✨ Key Features

- **Centralized Learning:** Explore essential DevOps technologies in one place.
- **Tool-Based Sections:** Learn about Git, Jenkins, Docker, Kubernetes, Prometheus, and Grafana.
- **Modern Interface:** A responsive and user-friendly web interface.
- **CI/CD Learning:** Understand how application builds and deployment can be automated.
- **Containerization:** Learn how Docker packages applications and their dependencies.
- **Orchestration:** Explore how Kubernetes manages containerized applications.
- **Monitoring and Visualization:** Understand how Prometheus and Grafana help monitor application performance.

## ⚙️ Prerequisites

Before running the project, make sure you have installed:

- [Node.js](https://nodejs.org/) — preferably an LTS version.
- npm — included with Node.js.
- [Git](https://git-scm.com/) — required to clone the repository.
- [Docker](https://www.docker.com/products/docker-desktop/) — required if running via Docker.
- [kubectl](https://kubernetes.io/docs/tasks/tools/) — required to manage Kubernetes resources.
- [Minikube](https://minikube.sigs.k8s.io/docs/start/) — used to run a local Kubernetes cluster.

Jenkins, Kubernetes, Prometheus, and Grafana are not required just to run the React frontend or Docker container. They are needed when setting up or demonstrating the corresponding DevOps integrations.

## 🚀 Getting Started

Follow these steps to run the project on your local machine.

### 1. Clone the repository

```bash
git clone https://github.com/omraj2006/devops-learning-hub.git
```

### 2. Navigate to the project directory

```bash
cd devops-learning-hub
```

### 3. Install dependencies

```bash
npm install
```

If the repository contains a `package-lock.json` file, you can alternatively use `npm ci` for a clean, lockfile-based installation.

### 4. Start the development server

```bash
npm run dev
```

### 5. Open the application

Vite will display a local URL in the terminal, usually:

```text
http://localhost:5173/
```

Open this URL in your browser to explore the DevOps Learning Hub.

### 6. Build for production

To create an optimized production build, run:

```bash
npm run build
```

The generated files will be available in the `dist/` directory.

To preview the production build locally, run:

```bash
npm run preview
```

## 🐳 Running with Docker

You can also run the application inside a Docker container using the provided `Dockerfile`.

### 1. Install Docker

Make sure you have Docker installed on your machine:

- Download and install [Docker Desktop](https://www.docker.com/products/docker-desktop/) (Windows / macOS) or [Docker Engine](https://docs.docker.com/engine/install/) (Linux).
- Ensure the Docker daemon is running.

### 2. Build the Docker image

In the project root directory, run:

```bash
docker build -t devops-learning-hub:1.0 .
```

This uses the multi-stage `Dockerfile` to build the Vite production bundle with Node.js and package it into a lightweight Nginx web server.

### 3. Run the Docker container

Start a container from the image:

```bash
docker run -d -p 8080:80 --name devops-learning-hub devops-learning-hub:1.0
```

> **Note:** Port `8080` on your host machine is mapped to port `80` (Nginx) inside the container. You can change `8080` to any available port.

### 4. Open the application

Open your browser and navigate to:

```text
http://localhost:8080/
```

### 5. Stop and remove the container

To stop the running container:

```bash
docker stop devops-learning-hub
```

To remove the container:

```bash
docker rm devops-learning-hub
```

## ☸️ Kubernetes Deployment

The DevOps Learning Hub frontend can be deployed to a local Kubernetes cluster using Minikube.

The Kubernetes configuration includes a Deployment, a NodePort Service, replica scaling, self-healing, and troubleshooting demonstrations.

### Kubernetes Architecture

The deployment follows this structure:

```text
                 DevOps Learning Hub
                         |
                    Docker Image
                 devops-learning-hub:1.0
                         |
                      Minikube
                         |
                    Deployment
                         |
                     ReplicaSet
                         |
               +---------+---------+
               |         |         |
             Pod 1     Pod 2     Pod 3
               |         |         |
               +---------+---------+
                         |
                  Kubernetes Service
                      NodePort
                         |
                    Web Browser
```

The application is packaged into a Docker image and deployed to Kubernetes. The Deployment manages the desired number of Pods, while the Service provides network access to the application.

### 1. Kubernetes Prerequisites

Install and configure:

- Docker Desktop
- Minikube
- kubectl

Ensure Docker Desktop is running before starting Minikube.

### 2. Start the Minikube Cluster

Start a local Kubernetes cluster using Docker as the driver:

```bash
minikube start --driver=docker
```

Verify that the cluster is running:

```bash
minikube status
```

Check the available nodes:

```bash
kubectl get nodes
```

The Minikube node should have a `Ready` status.

### 3. Load the Docker Image into Minikube

The Kubernetes cluster needs access to the application image.

Build the image from the project root if it does not already exist:

```bash
docker build -t devops-learning-hub:1.0 .
```

Load the image into Minikube:

```bash
minikube image load devops-learning-hub:1.0
```

Verify that the image is available:

```bash
minikube image ls
```

The Deployment uses `imagePullPolicy: Never` because the image is loaded directly into the local Minikube environment.

### 4. Kubernetes Deployment Configuration

The `deployment.yaml` file defines the Kubernetes Deployment.

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: devops-learning-hub
spec:
  replicas: 1
  selector:
    matchLabels:
      app: devops-learning-hub
  template:
    metadata:
      labels:
        app: devops-learning-hub
    spec:
      containers:
        - name: devops-learning-hub
          image: devops-learning-hub:1.0
          imagePullPolicy: Never
          ports:
            - containerPort: 80
```

**Configuration explanation:**

- `kind: Deployment` creates a Kubernetes Deployment.
- `replicas: 1` specifies the initial desired number of Pods.
- `selector` identifies the Pods managed by the Deployment.
- `template` defines the Pod configuration.
- `image` specifies the Docker image used by the container.
- `imagePullPolicy: Never` instructs Kubernetes to use the locally available image instead of pulling it from a registry.
- `containerPort: 80` specifies the port on which Nginx serves the frontend inside the container.

Apply the Deployment:

```bash
kubectl apply -f deployment.yaml
```

Verify the Deployment and Pods:

```bash
kubectl get deployments
kubectl get pods
```

Check the Deployment details:

```bash
kubectl describe deployment devops-learning-hub
```

### 5. Kubernetes Service Configuration

The `service.yaml` file defines a NodePort Service to expose the application.

```yaml
apiVersion: v1
kind: Service
metadata:
  name: devops-learning-hub-service
spec:
  type: NodePort
  selector:
    app: devops-learning-hub
  ports:
    - protocol: TCP
      port: 80
      targetPort: 80
```

**Configuration explanation:**

- `type: NodePort` exposes the Service through a port on the Kubernetes node.
- `selector` directs traffic to Pods labelled `app: devops-learning-hub`.
- `port: 80` defines the Service port.
- `targetPort: 80` forwards traffic to port 80 in the application container.

Apply the Service:

```bash
kubectl apply -f service.yaml
```

Verify the Service:

```bash
kubectl get services
```

Access the application through Minikube:

```bash
minikube service devops-learning-hub-service
```

This command provides a URL for accessing the application. Depending on the local environment and Minikube driver, the terminal running the command may need to remain open while accessing the application.

### 6. Scaling the Application

Kubernetes allows the number of application replicas to be increased or decreased.

Scale the Deployment to three replicas:

```bash
kubectl scale deployment devops-learning-hub --replicas=3
```

Verify the replicas:

```bash
kubectl get deployments
kubectl get pods
```

The Deployment should show three available replicas when all Pods are running successfully.

> **Note:** The scaling command changes the live Deployment. The current `deployment.yaml` specifies one replica, so applying that file again can return the desired replica count to one. Update `spec.replicas` in the YAML if you want the configuration file to specify three replicas.

### 7. Demonstrating Kubernetes Self-Healing

A Kubernetes Deployment maintains the desired number of application replicas through its ReplicaSet.

List the application Pods:

```bash
kubectl get pods
```

To demonstrate self-healing, select one of the application Pod names and delete that Pod:

```bash
kubectl delete pod <pod-name>
```

Replace `<pod-name>` with an actual application Pod name.

Check the Pods again:

```bash
kubectl get pods
```

Kubernetes detects that the number of available Pods has fallen below the desired replica count and creates a replacement.

This demonstrates Kubernetes self-healing and its ability to maintain the desired state.

### 8. Kubernetes Troubleshooting

A separate test Pod can be used to demonstrate how Kubernetes identifies container failures without intentionally disrupting the main application.

The `troubleshooting-pod.yaml` file contains:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: troubleshooting-demo
spec:
  containers:
    - name: test-container
      image: busybox:1.36
      command: ["sh", "-c", "echo 'Simulated failure'; exit 1"]
```

The command prints a message and exits with code `1`, deliberately causing the container to fail.

Create the test Pod:

```bash
kubectl apply -f troubleshooting-pod.yaml
```

Check its status:

```bash
kubectl get pods
```

Inspect the Pod and its events:

```bash
kubectl describe pod troubleshooting-demo
```

Check the container logs:

```bash
kubectl logs troubleshooting-demo
```

The logs show:

```text
Simulated failure
```

The Pod description can reveal information such as:

- Container termination reason.
- Exit code.
- Restart count.
- Readiness status.
- Warning events, including `BackOff` when Kubernetes delays repeated restart attempts.

You can also inspect cluster events:

```bash
kubectl get events --sort-by=.metadata.creationTimestamp
```

**Troubleshooting outcome:** The container failure is traced to the deliberately configured command `exit 1`. This exercise demonstrates how to use Pod details, logs, and events to investigate container failures.

> **Note:** The troubleshooting Pod is intended only for demonstration. It is separate from the application Deployment and does not represent a failure in the DevOps Learning Hub frontend.

### 9. Useful Kubernetes Commands

| Command | Purpose |
| ------- | ------- |
| `kubectl cluster-info` | Displays Kubernetes cluster information |
| `kubectl get nodes` | Lists Kubernetes nodes |
| `kubectl get deployments` | Lists Deployments |
| `kubectl get pods` | Lists Pods and their statuses |
| `kubectl get services` | Lists Services |
| `kubectl describe deployment devops-learning-hub` | Displays Deployment details |
| `kubectl describe pod <pod-name>` | Inspects a Pod and its events |
| `kubectl logs <pod-name>` | Displays container logs |
| `kubectl get events --sort-by=.metadata.creationTimestamp` | Lists cluster events in chronological order |
| `kubectl scale deployment devops-learning-hub --replicas=3` | Scales the Deployment to three replicas |
| `kubectl rollout status deployment/devops-learning-hub` | Checks rollout progress |
| `minikube stop` | Stops the local Minikube cluster |

### 10. Stop the Kubernetes Cluster

When you finish your demonstration, stop the local cluster with:

```bash
minikube stop
```

To start it again later:

```bash
minikube start --driver=docker
```

The Kubernetes configuration files remain in the project directory.

## ⚙️ Jenkins CI Pipeline

Jenkins is used to automate the Continuous Integration (CI) process for the DevOps Learning Hub application. The pipeline fetches the source code from GitHub, installs dependencies, checks code quality, and creates a production build.

### Prerequisites

- Jenkins installed and running.
- Git configured in Jenkins.
- Node.js and npm available to the Jenkins build environment.
- The project source code hosted on GitHub.

### Pipeline Stages

1. **Checkout:** Fetches the latest source code from the GitHub repository.
2. **Install Dependencies:** Installs the required npm packages.
3. **Lint:** Checks the source code for linting errors.
4. **Build:** Generates an optimized production build in the `dist/` directory.

### Jenkins Setup

1. Open the Jenkins dashboard.
2. Click **New Item** and create a **Pipeline** job.
3. Under Pipeline, select **Pipeline script from SCM**.
4. Select Git as the source control management system.
5. Enter the repository URL:

   ```text
   https://github.com/omraj2006/devops-learning-hub.git
   ```

6. Set the branch specifier to `*/main` and the script path to `Jenkinsfile`.
7. Save the configuration and click **Build Now**.
8. Open **Console Output** to monitor the build stages and check the result.

### Jenkinsfile

The `Jenkinsfile` is stored in the root directory of the repository. It defines the pipeline stages and allows other team members to configure Jenkins using the same build instructions.

A successful pipeline confirms that dependencies are installed, lint checks pass, and the application builds successfully.

## 📊 Monitoring with Prometheus and Grafana

The project includes a monitoring setup using Prometheus, an Nginx Prometheus Exporter, and Grafana to collect and visualize web server metrics.

### Monitoring Architecture

```text
DevOps Learning Hub
        |
   Nginx Web Server
   (Port 8080)
        |
   /stub_status
        |
 Nginx Prometheus Exporter
     (Port 9113)
        |
    Prometheus
     (Port 9090)
        |
     Grafana
     (Port 3000)
```

### Technologies and Purpose

| Technology | Purpose |
|---|---|
| Nginx stub status | Exposes basic Nginx connection statistics |
| Nginx Prometheus Exporter | Converts Nginx status information into Prometheus metrics |
| Prometheus | Scrapes and stores monitoring metrics |
| Grafana | Visualizes metrics through dashboards |
| Docker Compose | Runs the monitoring services together |

### 1. Start the Web Application

From the project root, build and start the application container:

```bash
docker build -t devops-learning-hub:1.0 .
docker run -d --name devops-learning-hub -p 8080:80 devops-learning-hub:1.0
```

Open the application at `http://localhost:8080`.

The Nginx status endpoint is available at `http://localhost:8080/stub_status`.

### 2. Start the Monitoring Stack

Navigate to the monitoring directory:

```bash
cd monitoring
```

Start the services:

```bash
docker compose up -d
```

The monitoring configuration is stored in:

- `monitoring/docker-compose.yml`
- `monitoring/prometheus/prometheus.yml`

The Docker Compose configuration starts Prometheus, Grafana, and the Nginx Prometheus Exporter.

**Important:** The exporter configuration expects the web application to be accessible at `http://host.docker.internal:8080/stub_status`. Start the application container on port 8080 before starting monitoring.

### 3. Access the Monitoring Tools

| Service | URL |
|---|---|
| Prometheus | `http://localhost:9090` |
| Prometheus Targets | `http://localhost:9090/targets` |
| Nginx Exporter Metrics | `http://localhost:9113/metrics` |
| Grafana | `http://localhost:3000` |

In Prometheus, open **Status → Targets** or visit `/targets` to check that the Prometheus and Nginx scraping targets are `UP`.

### 4. Grafana Dashboards

The project includes exported dashboard JSON files:

- `monitoring/grafana/cpu-usage-dashboard.json`
- `monitoring/grafana/devops-monitoring-dashboard.json`

Import these files into Grafana to recreate the dashboards. In Grafana, use the dashboard import feature and select the appropriate JSON file. Select the Prometheus data source when prompted.

The DevOps Monitoring Dashboard includes panels for:

- Active Nginx connections using `nginx_connections_active`.
- Nginx HTTP request rate using `rate(nginx_http_requests_total[5m])`.

The CPU Usage dashboard uses `rate(process_cpu_seconds_total[5m])`, which measures CPU time consumed by the monitored Prometheus process rather than total host CPU usage.

### 5. Stop the Monitoring Services

From the `monitoring` directory, run:

```bash
docker compose down
```

This stops and removes the monitoring containers while retaining named-volume data by default. To stop the web application separately, run:

```bash
docker stop devops-learning-hub
```

### Monitoring Learning Outcomes

This setup demonstrates how to expose Nginx status information, export metrics, scrape metrics with Prometheus, verify monitoring targets, and visualize metrics in Grafana.


## 🔄 DevOps Workflow

The project aims to demonstrate how different DevOps tools work together in a typical software delivery pipeline:

1. **Git & GitHub:** Manage source code and collaborate on changes.
2. **Jenkins:** Automate the build and testing process.
3. **Docker:** Package the application into a container image.
4. **Kubernetes:** Deploy and manage the containerized application.
5. **Prometheus:** Collect relevant monitoring metrics.
6. **Grafana:** Visualize metrics through dashboards.

This workflow illustrates how automation, deployment, and monitoring contribute to a more reliable software delivery pipeline.

## 👥 Team Project

This project is developed collaboratively as part of a college DevOps learning initiative. Team members work on different tools and integrate their contributions into a common workflow.

## 📚 Learning Outcomes

Through this project, students gain an understanding of:

- Version control and collaborative development.
- CI/CD pipelines and build automation.
- Docker images, containers, and registries.
- Kubernetes Deployments, Services, scaling, and self-healing.
- Troubleshooting container failures using Kubernetes logs, descriptions, and events.
- Metrics collection, monitoring, and dashboard creation.
- Integration and troubleshooting across a DevOps pipeline.

## 🤝 Contributing

Contributions and improvements are welcome.

1. Fork the repository or create a new branch.
2. Make your changes.
3. Test your changes locally.
4. Commit and push your updates.
5. Open a pull request for review.

## 📄 License

This project is intended for educational purposes. Add a license to the repository if you wish to define permissions for reuse and distribution.