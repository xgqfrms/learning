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



fetch('./test.wasm')
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
    window.wasmSqrt = instance.exports.sqrt;
});



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





*/
