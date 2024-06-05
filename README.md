# API REST - Representational State Transfer

#### Start Server (YARN)
```
-> yarn

-> yarn start
```

#### Start Server (NPM)
```
-> npm install

-> npm run start
```

### Routes
```
GET http://localhost:port/api/books
GET http://localhost:port/api/books/:id
POST http://localhost:port/api/books
PUT http://localhost:port/api/books/:id
DELETE http://localhost:port/api/books/:id
```

REST (Representational State Transfer) is an architectural style for designing networked applications. It was introduced by Roy Fielding in his doctoral dissertation in 2000. RESTful APIs (Application Programming Interfaces) are APIs that adhere to the principles of REST.

Here are the main principles of REST:

1. **Client-Server Architecture**: RESTful systems are composed of clients and servers, each with specific roles. The client is responsible for the user interface and application state, while the server is responsible for storing and manipulating data and providing responses to client requests.

2. **Statelessness**: Each request from a client to a server must contain all the information necessary for the server to understand and fulfill the request. This means that the server does not maintain any client state between requests. Each request is treated independently, which improves scalability and reliability.

3. **Uniform Interface**: RESTful APIs have a uniform interface, which simplifies the architecture and makes it easier for clients to understand how to interact with the server. This interface typically includes the following constraints:

**Resource Identification**: Resources (such as objects or data) are identified by unique URIs (Uniform Resource Identifiers). Each URI represents a specific resource.

**Resource Manipulation through Representations**: Clients manipulate resources by sending representations (such as JSON or XML documents) to the server. These representations contain the state of the resource and instructions for how the resource should be modified.

**Self-Descriptive Messages**: Each message sent from the server to the client contains information about how to process the message. This information can include metadata such as content type, caching directives, and authentication tokens.

**Hypermedia as the Engine of Application State (HATEOAS)**: Clients interact with the server through hypermedia links embedded in the representations they receive. These links guide the client to the next available actions or resources.