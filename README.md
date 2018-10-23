# my-dev-env

This is just for me to quickly setup some services. For now:

| Service | Port | Volume |Management URL | Username | Password |
|-|-|-|-|-|-|
| Keycloak | | No | http://localhost:18081 | admin | Beheer_01 |
| Oracle DB XE | 1521 | Yes | http://localhost:18082/apex/apex_admin | admin / sys / system | Beheer_01 |
| Postgres | 5432 | Yes | http://localhost:18080 | admin@localhost | Beheer_01 |
| RabbitMQ | 5672 | No | http://localhost:15672 | admin | Beheer_01 |
| WebLogic | 7001 | No | https://localhost:9002/console | weblogic | Beheer_01 |

This is definitely not production ready and secure!
