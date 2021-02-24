# node-postgres-userAuth
 User Authentication using Node and postgreSQL also with ejs.

### Docker stuffs

# Centos based install instructions
```
yum install docker
yum install python3
pip install docker-compose
systemctl start docker
```

To build and run
```
docker-compose build
docker-compose up
# or
docker-compose up -d # Runs the containers in the background, run this once you have confirmed everything runs ok
```

## .env information
create a .env file in root containing
```
DB_USER=luke
DB_PASSWORD=12345
DB_HOST=postgres
DB_PORT=5432
DB_DATABASE=nodelogin
```

change DB_HOST to localhost if running locally.
