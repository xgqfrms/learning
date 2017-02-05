# Underscore  



https://github.com/codeschool/WatchUsBuild-React


https://www.codeschool.com/screencasts/add-a-build-system-to-a-react-application#resources

https://github.com/xgqfrms-GitHub/underscore/blob/gh-pages/Tutorials/readme.md

https://github.com/xgqfrms-GitHub/underscore/blob/gh-pages/Tutorials/readme.md


https://github.com/codeschool/WatchUsBuild-React/issues/5

______________________________________________

??? Underscore ._getComments() error

const comments = this._getComments();

// Underscore

Underscore helps distinguish custom methods from React methods

New method that will return array of JSX elements

Underscore(下划线) 有助于区分自定义方法和React方法 

将返回JSX元素数组的新方法

_getComments() {
    const commentList = [
        { id: 1, author: 'Morgan McCircuit', body: 'Great picture!' },
        { id: 2, author: 'Bending Bender', body: 'Excellent stuff' }
    ];
    return commentList.map(() => {
        return (<Comment />);
    });
}
______________________________________________



























