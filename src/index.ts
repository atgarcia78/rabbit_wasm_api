import { main } from './rabbit';

var myargs = process.argv.slice(2);

async function myAsync() {
  var _keys = await main(myargs[0], myargs[1])
  return _keys
}
try{
  myAsync()
} catch(e) {
  console.error(e)
}
