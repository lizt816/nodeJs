function htmlEscape(html){
    // g  代表全局匹配
    // <|>|"|&  <或>或"或&
    return html.replace(/<|>|"|&/g,(match)=>{
        switch (match) {
            case '<':
                return '&lt;'
            case '>':
                return '&gt;'
            case "'":
                return '&quot;'   
            case '&':
                return '&amp;'      
        }
    })
}

module.exports = {
    htmlEscape
}