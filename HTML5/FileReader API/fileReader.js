document.getElementById('upload-file').addEventListener('change', function() {
    var file;
    var destination = document.getElementById('destination');
    destination.innerHTML = '';
    // 循环用户多选的文件
    for(var x = 0, xlen = this.files.length; x < xlen; x++) {
        file = this.files[x];
        if(file.type.indexOf('image') != -1) { // 非常简单的交验
            var reader = new FileReader();
            reader.onload = function(e) {
                var img = new Image();
                img.src = e.target.result; // 显示图片的地方
                destination.appendChild(img);
            };
            reader.readAsDataURL(file);
        }
    }
});
