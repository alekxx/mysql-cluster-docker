# NodeJS express server with MySQL Cluster
 Docker Compose configuration to create [MySQL Cluster](https://hub.docker.com/r/mysql/mysql-cluster). 
 
 The basic confguration contains:
 * one management node
 * two data nodes
 * one mysql server

## How to run
### Prerequisities
Create your own `.env` file based on `.env.template`
### Start App and MySQL Cluster
```bash
docker-compose up -d
```

#### Cluster status
To validate cluster status, run `show` command in  management client cli `ndb_mgm`,for example:
```bash
docker exec -it mysql-cluster-mysql_mgmt-1 ndb_mgm -e 'show'
```
More Cluster Management Client commands [here](https://dev.mysql.com/doc/refman/8.0/en/mysql-cluster-mgm-client-commands.html).

#### Connection
Connect with any mysql client, use default port `3306` and credentials defined in `.env` file.
Testing data can be found in `db/sql`.

## CI
GitHub Actions run on each push to main or each PR. 
Config to be found in `.github/workflows/actions.yml`.

## Disclaimer
For development usage only. Not tested.