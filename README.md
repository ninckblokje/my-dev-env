# my-dev-env

This is just for me to quickly setup some services using Docker Compose.

| Service | Port | Volume | Management URL | Username | Password |
|-|-|-|-|-|-|
| Anchore | 8228 | No | http://localhost:18085 | admin | Dummy_123 |
| Artemis | 1883 5445 5672 8161 9404 61613 61616 | Yes | http://localhost:8161 | admin | Dummy_123 |
| Camunda CE | 18086 | No | http://localhost:18086 | admin | Dummy_123 |
| Camunda EE | 18087 | No | http://localhost:18087 | admin | Dummy_123 |
| Cassandra | 9042 | Yes | | cassandra | Dummy_123 |
| CosmosDB | 18088 10251 10252 10253 10254 | Yes | https://localhost:18088/_explorer/index.html | | |
| Elasticsearch | 9200 | Yes | http://localhost:5601 | | |
| Gitea | 18092 18093 | Yes | http://localhost:18092 | | |
| GitLab EE | 18089 18090 18091 | Yes | https://localhost:18090 | root | Dummy_123 |
| Grafana | 3000 | Yes | http://localhost:3000 | admin | Dummy_123 |
| Kafka | 19092 | Yes | http://localhost:18084 | | |
| Keycloak | 18444 | No | http://localhost:18444 | admin | Dummy_123 |
| MongoDB | 27017 | Yes | http://localhost:18083 | root | Dummy_123 |
| Mosquitto | 1883 | Yes | | mosquitto | Dummy_123 |
| MS SQL Server | 1433 | Yes |  | sa | Dummy_123 |
| MySQL | 3306 33060 | Yes | http://localhost:18082 | root | Dummy_123 |
| Oracle DB XE | 1521 | Yes | https://localhost:15502/em | sys / system | Dummy_123 |
| Postgres | 5432 | Yes | https://localhost:18443 | admin@localhost.docker | Dummy_123 |
| Prometheus | 9090 | Yes | http://localhost:9090 | | |
| RabbitMQ | 5672 | No | http://localhost:15672 | admin | Dummy_123 |
| WebLogic | 7001 | No | https://localhost:9002/console | weblogic | Dummy_123 |

This is definitely not production ready and secure!

Some services might require a certificate. To generate a dummy one (valid on localhost for 365 days) type the following command in the `certs` directory: `make clean localhost`

## Prometheus & Grafana

Configuration for Prometheus can be put in the file `targets.yml`. The corresponding folder is mounted in the container and Prometheus will poll the file every 15 seconds, so changes will be picked up automatically.

## Anchore & Clair

See the [docker-image-scanner](https://github.com/ninckblokje/docker-image-scanners) repository for more information.

## Camunda

`camunda-ce` is based upon the community edition and also exposes a Postgres database on port 15432.

`camunda-ee` is based upon the enterprise edition and also exposes a Postgres database on port 25432. A trial license can be requested at [Camunda](https://camunda.com/enterprise/), no license is included!

## CosmosDB

CosmosDB generates a self signed certicated, which can be exported from the URL: https://localhost:18088/_explorer/emulator.pem
