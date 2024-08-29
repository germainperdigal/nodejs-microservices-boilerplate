# Node.JS Microservices API Boilerplate

This is a homemade Node.JS API using an microservice architecture :
- Each brick of the application has a microservice like : user, auth, messages, booking...
- Each service is covered by an API gateway. The API gateway is the entry door, receiving all requests and forwarding it to the right microservice.
- The API GW is in charge of security : handling auth by JWT

Docker is used to run the whole API :
- Each service has a container
- The API GW has a container

More to come :)
