# my-dev-env

This is just for me to quickly setup some services. For now:

| Service | Port | Volume | Management URL | Username | Password |
|-|-|-|-|-|-|
| Keycloak | | No | http://localhost:18081 | admin | Dummy_123 |
| Oracle DB XE | 1521 | Yes | http://localhost:15502/em | sys / system | Dummy_123 |
| Postgres | 5432 | Yes | http://localhost:18080 | admin@localhost | Dummy_123 |
| RabbitMQ | 5672 | No | http://localhost:15672 | admin | Dummy_123 |
| WebLogic | 7001 | No | https://localhost:9002/console | weblogic | Dummy_123 |

This is definitely not production ready and secure!
