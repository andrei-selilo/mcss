# Scripts to install/rebuild grpc on macOS (darwin)
npm install grpc --target=8.12.0 --target_platform=linux --target_arch=x64
npm install grpc --target=8.12.0 --target_platform=linux --target_arch=x64 --target_libc=musl --update-binary

npm rebuild --target=8.12.0 --target_platform=linux --target_arch=x64
npm rebuild --target=8.12.0 --target_platform=linux --target_arch=x64 --target_libc=glibc --update-binary
npm rebuild --target=8.12.0 --target_platform=linux --target_arch=x64 --target_libc=musl --update-binary

# Open container with bash
docker exec -it mcss_gateway_1 sh