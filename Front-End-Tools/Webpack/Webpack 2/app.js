const component = () => {
    var element = document.createElement('div');
    //需要引入 lodash，下一行才能正常工作
    element.innerHTML = _.join(['Hello', 'webpack 2', '&', 'lodash'], ' ');
    return element;
}

document.body.appendChild(component());
