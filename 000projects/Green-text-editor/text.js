var textEditor = function(main){
    var textDiv = createElement('div');
    textDiv.setAttribute('contenteditable', 'true');

    var buttons = {
        boldBtn: createElement('button', {'name': 'text-b','text-name': 'bold'}, 'bold'),
        italicBtn: createElement('button', {'name': 'text-i', 'text-name': 'italic'}, 'italic'),
        underlineBtn: createElement('button', {'name': 'text-u', 'text-name': 'underline'}, 'underline')
    }

    main.appendChild(textDiv);
    main.appendChild(buttons.boldBtn);
    main.appendChild(buttons.italicBtn);
    main.appendChild(buttons.underlineBtn);

    function createElement(type, attrObj, html){
        var d = document.createElement(type);
        if(attrObj && typeof attrObj === "object"){
            var keys = Object.keys(attrObj);
            for(attr in attrObj){
                d.setAttribute(attr, attrObj[attr]);
            }
            if(html){
                d.innerHTML = html;
            }
        }
        return d;
    }
    function doWithButtons(property, value) {
        for(btn in buttons){
            buttons[btn][property] = value;
        }
    }

    function selectButtons(e) {
        var sel = window.getSelection();
        if (sel.baseNode && (sel.baseNode === textDiv || sel.baseNode.ownerDocument.activeElement === textDiv)) {
            doWithButtons("className", "");
            var p = sel.baseNode.parentElement;
            while (!/(div|body|button)/i.test(p.tagName.toLowerCase())) {
                var btn = document.getElementsByName("text-" + p.tagName.toLowerCase())[0];
                btn.className = "active";
                p = p.parentElement;
            }
        } else {
            doWithButtons("className", "");
        }
    }

    function action(e) {
        var el = e.currentTarget;
        document.execCommand(el.getAttribute('text-name'));
        el.className = (el.className === "active")? "":"active";
    }
    textDiv.onfocus = selectButtons;
    textDiv.onblur  = selectButtons;
    textDiv.onkeyup = selectButtons;
    textDiv.onclick = selectButtons;

    doWithButtons("onclick", action);
}
var main = document.getElementById("main");
new textEditor(main);