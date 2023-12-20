import http from 'node:http'
import {Transform} from 'node:stream'

class InverseNumberStream extends Transform {
    _transform(chunk, encoding, callback) {
      const tranformed = Number(chunk.toString()) * -1;
  
      callback(null, Buffer.from(String(tranformed))); //primeiro parametro de um callback é o erro
    }
  }

//   req => ReadbleStream
//   res => WritebleStream

const server = http.createServer((req, res) => {

})

server.listen(3334)