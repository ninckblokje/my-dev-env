db = db.getSiblingDB('admin')
db.auth('root','Dummy_123')

config={"_id":"jnb-mongodb-cluster","members":[{"_id":0,"host":"localhost:27017"}]}
rs.initiate(config)

print('01-replicaset.js done')