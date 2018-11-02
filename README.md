# Scripts to install/rebuild grpc on macOS (darwin)
`npm install grpc --target=8.12.0 --target_platform=linux --target_arch=x64`<br>
`npm install grpc --target=8.12.0 --target_platform=linux --target_arch=x64 --target_libc=musl --update-binary`<br>

`npm rebuild --target=8.12.0 --target_platform=linux --target_arch=x64`<br>
`npm rebuild --target=8.12.0 --target_platform=linux --target_arch=x64 --target_libc=glibc --update-binary`<br>
`npm rebuild --target=8.12.0 --target_platform=linux --target_arch=x64 --target_libc=musl --update-binary`<br>

# Docker
## Open container with bash
`docker exec -it mcss_gateway_1 sh`

# Kubernetes
## Deploy
Deploy stack: `docker stack deploy --compose-file ./kube-docker-compose.yml #NAME# --orchestrator kubernetes`

## Dashboard
1. Apply: `kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/master/src/deploy/recommended/kubernetes-dashboard.yaml`
2. Run: `kubectl proxy`

## Info:
1. https://kubernetes.io/docs/reference/kubectl/docker-cli-to-kubectl/