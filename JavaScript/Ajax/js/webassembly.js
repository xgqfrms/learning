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


(() => {
    const WebA_URL = `https://cdn.xgqfrms.xyz/webassembly/xgqfrms.wasm`;
    const ThrowErrorInfo = () => {throw new Error(`fetch WASM failed!`)};
    fetch(`${WebA_URL}`)
    .then(res => res.ok ? res.arrayBuffer() : ThrowErrorInfo())
    .then(bytes => WebAssembly.compile(bytes))
    .then(module =>  WebAssembly.instantiate(module))
    .then(instance => window.WebA.Sqrt = instance.exports.sqrt);
})();



