function htmlUnEscape(html){
    // g  代表全局匹配
    // <|>|"|&  <或>或"或&
    return html.replace(/&lt;|&gt;|&quot;|&amp;/g,(match)=>{
        switch (match) {
            case '&lt;':
                return '<'
            case '&gt;':
                return '>'
            case "&quot;":
                return "'"   
            case '&amp;':
                return '&'      
        }
    })
}

module.exports = {
    htmlUnEscape
}