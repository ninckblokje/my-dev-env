# my-dev-env Kubernetes

All dev environments will be created in the namespace `jnb` (and will have at least one label called `owner` with the value `jnb`).

First create a namespace and a secret:

````
kubectl create -f jnb-env.yml
````

This command will empty the entire namespace `jnb` (without the persistent volume claims and the secrets):

````
kubectl -n jnb delete po,svc,configmaps --all
````

## Secrets

A generic secret is available containing a password and (optionally, might not be used) username and e-mail address in the namespace `jnb`: `jnb-secret`.

## Labels

All resources created will have at least the following labels:
- `app`: Will contain the name of the application
- `owner`: Will always contain the value `jnb`

## Storage

Pods will use (when required) persistent volumes and persistent volume claims to store data. The persistent volume claims will have labels and will be in the namespace `jnb`. De persistent volumes will not be part of a namespace, nor will they have any labels.

To delete all persistent volume claims:

````
kubectl -n jnb pvc --all
````

persistent volumes will have to be deleted manually.

## Ports

Ports on a service or on a port are not exposed outsite of the Kubernetes cluster. The forward them use one of the following commands:

````
kubectl port-forward -n jnb svc/[SERVICE_NAME] [PORT]:[LOCAL_PORT]
kubectl port-forward -n jnb pod/[POD_NAME] [PORT]:[LOCAL_PORT]
````

## Applications

### oracledbxe

Oracle Database XE will use the following resources:
- `PersistentVolumeClaim`: Stores database data
- `ConfigMap`: Contains the startup SQL
- `Pod`
- `Service`

The ollowing ports are exposed by the service:
- `1521`: For database connection
- `5500`: For Enterprise Manager
