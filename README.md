# my-dev-env

This is just for me to quickly setup some services using Docker Compose. For Kubernetes, please refer to [Kubernetes](KUBERNETES.md).

| Service | Port | Volume | Management URL | Username | Password |
|-|-|-|-|-|-|
| Keycloak | | No | http://localhost:18081 | admin | Dummy_123 |
| MongoDB | 27017 | Yes | http://localhost:18083 | root | Dummy_123 |
| MS SQL Server | 1433 | Yes |  | sa | Dummy_123 |
| MySQL | 3306 33060 | Yes | http://localhost:18082 | root | Dummy_123 |
| Oracle DB XE | 1521 | Yes | https://localhost:15502/em | sys / system | Dummy_123 |
| Portainer | 9000 | Yes | http://localhost:9000 | admin | Dummy_123 |
| Postgres | 5432 | Yes | https://localhost:18443 | admin@localhost | Dummy_123 |
| RabbitMQ | 5672 | No | http://localhost:15672 | admin | Dummy_123 |
| WebLogic | 7001 | No | https://localhost:9002/console | weblogic | Dummy_123 |

This is definitely not production ready and secure!

Some services might require a certificate. To generate a dummy one (valid on localhost for 365 days) type the following command in the `certs` directory: `make clean localhost`
