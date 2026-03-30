# ✨ First Pipeline Challenge — Girly Pops Edition ✨

The Pipe is good, The Pipe is nice.

Built with caffeine, teamwork, and a little DevOps magic. 💅

Team Girly Pops 

Jon Jönsson 🗣️

Adam Konopa ☠️

Wilma Kylvåg 🌸

![Pipeline demo](assets/seal-spinning-around.gif)

## First Pipeline Challenge

![CI/CD Pipeline](https://github.com/Oshansheru/the-pipe/workflows/CI%2FCD%20Pipeline/badge.svg)

Live deployment: https://the-pipe.onrender.com


## About

This project was created as part of our DevSecOps course, where the goal was to build a complete end-to-end pipeline from code to production with security, automation, and monitoring in mind.

We started with a simple application and gradually evolved it into a fully containerized system with CI/CD, Kubernetes deployment, and security practices.

## Architecture Overview

### During the course (Kubernetes)

Our application was deployed in a Kubernetes cluster using a dedicated namespace (girly-pops).

The architecture included:

Frontend - static web UI
API - backend service
Redis - internal data store
Monitor - reports system status
Ingress - routes external traffic
TLS (cert-manager) - enables HTTPS
RBAC & Service Accounts - controlled access

We used Kubernetes to run multiple replicas for availability, manage container networking and services, separate environments using namespaces and securely handle configuration and secrets.


### Current deployment (Render)

As the course environment was decommissioned, our Kubernetes cluster and namespace were removed.

The application is now deployed on Render, which abstracts away infrastructure management.

Instead of managing Kubernetes directly, Render handles deployment, scaling, networking, and HTTPS.

Our CI/CD pipeline still builds and deploys the application automatically to Render.


## CI/CD Pipeline Flow

Every push to the main branch triggers our GitHub Actions workflow:

1. Code pushed to main branch
2. GitHub Actions pipeline starts automatically
3. Node.js environment is set up
4. Dependencies are installed
5. Docker image is built from Dockerfile
6. Container is tested with a health check
7. Trivy scans for vulnerabilities
8. Render automatically deploys the new version


## Docker

We use Docker to ensure the application runs consistently across environments.

Build locally:

docker build -t the-pipe .
docker run -p 3001:3001 the-pipe


## Security

We implemented several DevSecOps security practices:

Trivy scanning for container vulnerabilities
Kubernetes Secrets for sensitive values
ConfigMaps for non-sensitive configuration
RBAC (Role-Based Access Control) for least-privilege access
HTTPS with TLS using cert-manager
.gitignore & .dockerignore to prevent committing sensitive data


## Running Locally

cd backend
npm install
npm start

## DevSecOps Mindset

This project demonstrates:

automation over manual processes
security integrated into the pipeline
containerized applications
infrastructure awareness (Kubernetes)
and the ability to move between platforms (Kubernetes → Render)


# 💖

But now that the course is over, girly pops are signing off, slaying the day and sashaying away. Bye Barbie!!!!!!!
