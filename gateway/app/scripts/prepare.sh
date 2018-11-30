
# Common

script_path=`pwd`/`dirname $0`
app_path=$script_path/../../app
node_modules_path=$app_path/node_modules

# GRPC
## Generate .proto with protobuf
printf "GRPC:\n"
proto_path=$app_path/src/protos

pbjs=$node_modules_path/.bin/pbjs
pbts=$node_modules_path/.bin/pbts

protoc_gen_ts=${node_modules_path}/.bin/protoc-gen-ts
grpc_tools_node_protoc=${node_modules_path}/.bin/grpc_tools_node_protoc
grpc_tools_node_protoc_plugin=${node_modules_path}/.bin/grpc_tools_node_protoc_plugin

echo $protoc_gen_ts
echo $grpc_tools_node_protoc
echo $grpc_tools_node_protoc_plugin

for i in `find $proto_path -name "*.proto" -type f`; do
  directory=$(dirname "${i}")
  #filename=$(basename "${i%.*}")
  filename="index"

  # ${pbjs} --es6 -t static-module -w commonjs -o ${directory}/${filename}.js ${i}
  # ${pbts} -o ${directory}/${filename}.d.ts ${directory}/${filename}.js
  # ${pbjs} -t static-module ${i} | ${pbts} -o ${directory}/${filename}.d.ts -

  # generate js codes via grpc-tools
  ${grpc_tools_node_protoc} \
  --js_out=import_style=commonjs,binary:${directory} \
  --grpc_out=${directory} \
  --plugin=protoc-gen-grpc=${grpc_tools_node_protoc_plugin} \
  --proto_path=${directory} \
  ${i}
  # generate d.ts codes
  ${grpc_tools_node_protoc} --plugin=protoc-gen-ts=${protoc_gen_ts} --ts_out=${directory} --proto_path=${directory} ${i}
  printf "Proto generate: $i\n"
done
