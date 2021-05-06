create = {};

(function() {
        let tags = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdl', 'bdo', 'blockquote', 'body', 'br', 
                    'button', 'canvas', 'caption', 'cite', 'code', 'del', 'col', 'colgroup', 'data', 'datalist', 'dd', 'details', 'dfn',
                    'dialog', 'div', 'dl', 'dt', 'em', 'fieldset', 'figcaption', 'embed', 'figure', 'footer', 'form', 'h1', 'h2', 'h3',
                    'h4', 'h5', 'h6', 'head', 'header', 'hr', 'html', 'i', 'iframe', 'image', 'input', 'ins', 'kbd', 'label', 'legend',
                    'li', 'link', 'main' ,'map', 'mark', 'meta', 'noscript', 'meter', 'nav', 'object', 'ol', 'option', 'optgroup', 'output', 'p', 
                    'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 
                    'span', 'strong', 'style', 'sub', 'summary', 'sup', 'svg', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'template', 'thead',
                    'th', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr'];


                        for (var i = 0; i < tags.length; i++) {
                            (function(tag) {
                                create[tag]= function(){
                                    return document.createElement(tag);
                                };
                            })(tags[i]);
                        };
})();



const x = create.h1();
x.innerHTML = 'Hello Anurag';


document.body.appendChild(x);