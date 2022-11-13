# MySQL Cluster with Docker Compose
 Docker Compose configuration to create [MySQL Cluster](https://hub.docker.com/r/mysql/mysql-cluster). 
 
 The basic confguration contains:
 * one management node
 * two data nodes
 * one mysql server

## How to run
### Prerequisities
Create your own `.env` file based on `.env.template`
### Start Cluster
`docker-compose up -d`