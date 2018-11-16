Microservices:
1. Kubernetes (Tutorial) www.katacoda.com
2. HTTP -> TChannel (Uber) https://github.com/uber/tchannel
3. Ringpop? (Kubernetes replicas likable?) https://github.com/uber-node/ringpop-node
4. Jaeger (for loggin) https://github.com/jaegertracing/jaeger


Requests:
1. Sync.
    1. HTTP - API Gateway
    2. GRPC - between micro services
2. Async. Messaging (Trigger another micro service, no need of response, or response async). RabbitMQ?
3. What with queues? (RabbitMQ?)

Logging:
1. Correlation ID
2. Process requests and responses ?
3. Jaeger? Elastic Search?

CI/CD:
1. CircleCI ? Google Services and J* (can’t remember the name)
2. Google:  23:31 Watch later

Error handle:
1. Ignore
2. Retry
    1. Make handle that if required redo the previous tasks to retry. (By correlation ID)

Other:
1. Hydra? https://www.hydramicroservice.com