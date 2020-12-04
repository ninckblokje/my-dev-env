# my-dev-env

This is just for me to quickly setup some services using Docker Compose.

| Service | Port | Volume | Management URL | Username | Password |
|-|-|-|-|-|-|
| Anchore | 8228 | http://localhost:18085 | admin | Dummy_123 |
| Artemis | 1883 5445 5672 8161 9404 61613 61616 | Yes | http://localhost:8161 | admin | Dummy_123 |
| Elasticsearch | 9200 | Yes | http://localhost:5601 | | |
| Grafana | 3000 | Yes | http://localhost:3000 | admin | Dummy_123 |
| Kafka | 19092 | Yes | http://localhost:18084 | | |
| Keycloak | | No | http://localhost:18444 | admin | Dummy_123 |
| MongoDB | 27017 | Yes | http://localhost:18083 | root | Dummy_123 |
| MS SQL Server | 1433 | Yes |  | sa | Dummy_123 |
| MySQL | 3306 33060 | Yes | http://localhost:18082 | root | Dummy_123 |
| Oracle DB XE | 1521 | Yes | https://localhost:15502/em | sys / system | Dummy_123 |
| Portainer | | Yes | http://localhost:9000 | admin | Dummy_123 |
| Postgres | 5432 | Yes | https://localhost:18443 | admin@localhost | Dummy_123 |
| Prometheus | 9090 | Yes | http://localhost:9090 | | |
| RabbitMQ | 5672 | No | http://localhost:15672 | admin | Dummy_123 |
| WebLogic | 7001 | No | https://localhost:9002/console | weblogic | Dummy_123 |

This is definitely not production ready and secure!

Some services might require a certificate. To generate a dummy one (valid on localhost for 365 days) type the following command in the `certs` directory: `make clean localhost`

## Prometheus & Grafana

Configuration for Prometheus can be put in the file `targets.yml`. The corresponding folder is mounted in the container and Prometheus will poll the file every 15 seconds, so changes will be picked up automatically.

## Anchore

Example images:
- `ninckblokje/crasher:sh`
- `ninckblokje/ratetraining:1.1.0`
- `registry.access.redhat.com/ubi7/ubi:7.6`

System status: `docker-compose exec jnb-anchore-api anchore-cli system status`
Feed list: `docker-compose exec jnb-anchore-api anchore-cli system feeds list`
Refresh feeds: `docker-compose exec jnb-anchore-api anchore-cli system feeds sync`
Add image: `docker-compose exec jnb-anchore-api anchore-cli image add [IMAGE_NAME]`
Image vulnerabilities: `docker-compose exec jnb-anchore-api anchore-cli image vuln [IMAGE_NAME] all`

## Clair

Example images:
- `ninckblokje/crasher:sh` (does not work)
- `ninckblokje/ratetraining:1.1.0` (does not work)
- `registry.access.redhat.com/ubi7/ubi:7.6`

Report image: `docker-compose exec jnb-clair clairctl report [IMAGE_NAME]`
