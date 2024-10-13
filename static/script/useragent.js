let $useragent = document.querySelector('.mod-detail .useragent');
let $mod_panel = document.querySelector('.mod-panel');
let $input = $mod_panel.querySelector('input');
let $button = $mod_panel.querySelector('button');
let $tbody = $mod_panel.querySelector('tbody');
let formatPanel = function(info){
    $tbody.innerHTML = `
        <tr>
            <td>${info.browser} ${info.browserVersion}</td>
            <td>${info.engine}</td>
            <td>${info.system} ${info.systemVersion} (${info.bitness}-bit)</td>
            <td>${info.platform}</td>
            <td>${info.architecture}</td>
            <td>${info.device}</td>
        </tr>
    `;
};
$button.addEventListener('click',function(){
    let userAgent = $input.value.trim();
    if(userAgent){
        let info = browser.parse(userAgent);
        formatPanel(info);
    }else{
        $tbody.innerHTML = `
            <tr>
                <td colspan="6" align="center">
                    <p class="text-gray">Not result</p>
                </td>
            </tr>
        `;
    }
});
$useragent.innerHTML = navigator.userAgent;
$input.value = navigator.userAgent;
$button.click();