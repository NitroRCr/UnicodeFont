function UnicodeFontIndex(fonts) {
    this.fonts = fonts;
    this.unicodeFont = new UnicodeFont();
}
UnicodeFontIndex.prototype.process = function(text) {
    for (let i of this.fonts) {
        let result = this.unicodeFont.font(text, i);
        $('pre.result.' + i).text(result);
        $('button.result.' + i).attr('data-clipboard-text', result);
    }
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
]);
new ClipboardJS('.to-copy');
$('.to-copy').click(function () {
    M.toast({
        html: '已复制'
    });
})