function UnicodeFontIndex(fonts, styles) {
    this.fonts = fonts;
    this.styles = styles;
    this.unicodeFont = new UnicodeFont();
}
UnicodeFontIndex.prototype.process = function(text) {
    for (let i of this.fonts) {
        let result = this.unicodeFont.font(text, i);
        $('pre.result.' + i).text(result);
        $('button.result.' + i).attr('data-clipboard-text', result);
    }
    
    for (let i in this.styles) {
        let result = this.styles[i](text);
        $('pre.result.' + i).text(result);
        $('button.result.' + i).attr('data-clipboard-text', result);
    }
    var resultLT = this.unicodeFont.mixin(text, '\u{0336}');
    $('pre.result.line-through').text(resultLT);
    $('button.result.line-through').attr('data-clipboard-text', resultLT);
}
UnicodeFontIndex.prototype.init = function() {
    $('.start-process').click(() => {
        this.process($('#textin').val());
    });
}
$().ready(function() {
    unicodeFontIndex.process('Example Text, 01234.');
    unicodeFontIndex.init();
});
var unicodeFontIndex = new UnicodeFontIndex([
    'bold',
    'italic',
    'bold-italic',
    'sans-serif',
    'sans-serif-bold',
    'sans-serif-italic',
    'sans-serif-bold-italic',
    'double-struck',
    'monospace',
    'script',
    'bold-script',
    'mini',
    'fake-normal'
], {
    'line-through': function(text) {
        return unicodeFontIndex.unicodeFont.mixin(text);
    },
    'reverse': function(text) {
        var uni = unicodeFontIndex.unicodeFont;
        return uni.toggleBrackets(uni.reverse(uni.font(text, 'reverse')));
    }
});
new ClipboardJS('.to-copy');
$('.to-copy').click(function () {
    M.toast({
        html: 'Copied'
    });
})