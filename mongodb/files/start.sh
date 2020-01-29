#!/bin/bash

(sleep 10 && mongo /docker-entrypoint-running.d/01-replicaset.js)&

/usr/local/bin/docker-entrypoint.sh --replSet jnb-mongodb-cluster