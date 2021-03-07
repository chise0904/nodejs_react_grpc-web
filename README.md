
react use gRPC-web to make a gRPC request to gRPC server, and envoy as a proxy    
    
react() --> envoy --> gRCP server    

## Important

envoy.yaml    
hosts: [{ socket_address: { address: "172.17.0.3", port_value: 9997 }}]    
    
{ address: "172.17.0.3", port_value: 9997 } is the gRPC server address and port    

App.js    
const grcpClient = new GreeterClient("http://127.0.0.1:9090");    

"http://127.0.0.1:9090" is the envoy proxy address and port    


## Terminal

#npm start

## Browser
    
http://127.0.0.1:3000    

## need to fix    
     
vscode F5 debug not work    