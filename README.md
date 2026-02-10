# ✨ First Pipeline Challenge — Girly Pops Edition ✨

The Pipe is good, The Pipe is nice.

Built with caffeine, teamwork, and a little DevOps magic. 💅

Team Girly Pops 

Jon Jönsson 🗣️

Adam Konopa ☠️

Wilma Kylvåg 🌸


## First Pipeline Challenge

![CI/CD Pipeline](https://github.com/Oshansheru/the-pipe/workflows/CI%2FCD%20Pipeline/badge.svg)

Live deployment: https://the-pipe.onrender.com


## About

This project was created as part of the First Pipeline Challenge where the goal was to build a complete CI/CD pipeline using GitHub Actions.

Instead of manually testing, building, and deploying our application, we automated the entire process.

Every push to the repository now triggers a workflow that installs dependencies, runs automated tests, builds a Docker container, scans for security vulnerabilities, and deploys the app automatically

## Architecture

Developer Push 

↓ 

GitHub Repository 

↓ 

GitHub Actions Workflow 

↓ 

Install → Test → Docker Build → Trivy Security Scan 

↓ 

Automatic Deployment 

↓ 

Live Application


## CI/CD Pipeline Flow

1. Code pushed to main branch
2. GitHub Actions runner starts automatically
3. Node.js environment is created
4.  Dependencies installed with npm
5. Tests run against /status endpoint
6. Docker image built from Dockerfile
7. Trivy scans container for vulnerabilities
8. Render auto-deploys updated version


## Docker

We use Docker to ensure the application runs consistently across environments.

Build locally:

docker build -t the-pipe .
docker run -p 3001:3001 the-pipe


## Security Scanning 

Trivy scans our container image for known vulnerabilities.

Important:

Vulnerabilities may still appear — this is normal.

The goal is to monitor and understand potential risks.


## Running Locally


Install dependencies:

npm install


Run tests:

npm test


Start server:

npm start


# Team Motto 💖

Push with confidence. Let the pipeline handle the chaos. 
