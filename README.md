# 引用
### UZIP
[https://www.npmjs.com/package/uzip](https://www.npmjs.com/package/uzip)
### XOR 
```javascript
var xor = function (a, buf) {
    a = a.split("").map(function (v) { return v.charCodeAt(0) })
    for (var i = 0, j = 0; j < buf.length; j++) {
        buf[j] ^= a[i++] ^ j;
        if (i == a.length) i = 0;
    }
}
```
[XOR cipher](https://github.com/dchest/tweetnacl-js/blob/master/nacl-fast.js#L454)
### NANOID
[https://github.com/ai/nanoid](https://github.com/ai/nanoid)
### blake2s
[https://github.com/dchest/blake2s-js](https://github.com/dchest/blake2s-js)
### rafxr
https://stackoverflow.com/questions/44974003/recover-arraybuffer-from-xhr-responsetext




