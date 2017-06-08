/*
# https://mbebenita.github.io/WasmExplorer/


(module
  (export "sqrt" (func $sqrt))
  (func $sqrt
    (param $num f32)
    (result f32)
    (f32.sqrt (get_local $num))
  )
)

*/

const WebA_URL = `https://cdn.xgqfrms.xyz/webassembly/xgqfrms.wasm`;

// const WebA_SCRIPT = `https://cdn.xgqfrms.xyz/webassembly/webassembly.js`;

fetch(`${WebA_URL}`)
.then(res => {
    if (res.ok){
        return res.arrayBuffer();
    }else{
        throw new Error(`Unable to fetch WASM.`);
    }
})
.then(bytes => {
    return WebAssembly.compile(bytes);
})
.then(module => {
    return WebAssembly.instantiate(module);
})
.then(instance => {
    window.WebA.Sqrt = instance.exports.sqrt;
});



(() => {
    const WebA_URL = `https://cdn.xgqfrms.xyz/webassembly/xgqfrms.wasm`;
    const ThrowErrorInfo = () => {
        throw new Error(`fetch WASM failed!`);
    };
    fetch(`${WebA_URL}`)
    .then(res => res.ok ? res.arrayBuffer() : ThrowErrorInfo())
    .then(bytes => WebAssembly.compile(bytes))
    .then(module =>  WebAssembly.instantiate(module))
    .then(instance => window.WebA.Sqrt = instance.exports.sqrt);
})()



/*






if (false){
    a = 3;
}else{
    throw new Error(`Unable to fetch WASM.`);
}

// ===

if (false)
    a = 3;
    throw new Error(`else error.`);



https://www.squarespace.com/

*/
