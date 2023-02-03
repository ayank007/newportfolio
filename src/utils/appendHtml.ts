const AppendHtml = (parent:HTMLElement, child:any) => {
    const div = document.createElement('div')
    div.innerHTML = child
    while (div.children.length > 0) {
        parent.appendChild(div.children[0])
    }
}
export default AppendHtml