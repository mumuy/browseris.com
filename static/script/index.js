let fontList = [
    // Windows
    ['PMingLiU','新细明体'],
    ['MingLiU','细明体'],
    ['DFKai-SB','标楷体'],
    ['SimHei','黑体'],
    ['SimSun','宋体'],
    ['NSimSun','新宋体'],
    ['FangSong','仿宋'],
    ['KaiTi','楷体'],
    ['KaiTi_GB2312','楷体_GB2312'],
    ['FangSong_GB2312','仿宋_GB2312'],
    ['Microsoft YaHei','微软雅黑'],
    ['Microsoft JhengHei','微软正黑体'],
    // Mac OS
    ['STXihei','华文细黑'],
    ['STHeiti','华文黑体'],
    ['STKaiti','华文楷体'],
    ['STSong','华文宋体'],
    ['STFangsong','华文仿宋'],
    ['BiauKai','标楷体'],
    ['LiHei Pro Medium','丽黑 Pro'],
    ['LiSong Pro Light','丽宋 Pro'],
    ['Apple LiGothic Medium','苹果丽中黑'],
    ['Apple LiSung Light','苹果丽细宋'],
    ['PingFang SC','苹方 - 简'],
    ['PingFang TC','苹方 - 繁'],
    ['PingFang HK','苹方 - 港'],
    ['Xingkai SC','行楷'],
    ['Weibei SC','魏碑'],
    ['Yuanti SC','圆体'],
    ['Songti SC','宋体'],
    ['Hiragino Sans GB','冬青黑体'],
    ['Lantinghei SC','兰亭黑'],
    ['Hanzipen SC','飘飘体'],
    ['Wawati SC','娃娃体'],
    ['Yapi SC','雅痞'],
    // Office
    ['LiSu','隶书'],
    ['YouYuan','幼圆'],
    ['STXihei','华文细黑'],
    ['STKaiti','华文楷体'],
    ['STSong','华文宋体'],
    ['STZhongsong','华文中宋'],
    ['STFangsong','华文仿宋'],
    ['STCaiyun','华文彩云'],
    ['STHupo','华文琥珀'],
    ['STLiti','华文隶书'],
    ['STXingkai','华文行楷'],
    ['STXinwei','华文新魏'],
    ['FZShuTi','方正舒体'],
    ['FZYaoti','方正姚体'],
    // 开源字体
    ['Source Han Sans CN','思源黑体'],
    ['Source Han Serif CN','思源宋体'],
    ['Source Han Mono SC','思源等宽'],
    ['Gen Shin Gothic','思源真黑体'],
    ['LXGW WenKai','霞鹜文楷'],
    ['HarmonyOS Sans','鸿蒙字体'],
    ['Alibaba PuHuiTi 2.0','阿里巴巴普惠体 2'],
    ['Alibaba PuHuiTi 3.0','阿里巴巴普惠体 3'],
    ['Alimama FangYuanTi VF','阿里妈妈方圆体'],
    ['Alimama DongFangDaKai','阿里妈妈东方大楷'],
    ['Alimama DaoLiTi','阿里妈妈刀隶体'],
    ['Douyin Sans','抖音美好体'],
    ['OPPO Sans','OPPO Sans'],
];
let fontList_en = ["Andale Mono", "Arial", "Arial Black", "Arial Hebrew", "Arial MT", "Arial Narrow", "Arial Rounded MT Bold", "Arial Unicode MS", "Bitstream Vera Sans Mono", "Book Antiqua", "Bookman Old Style", "Calibri", "Cambria", "Cambria Math", "Century", "Century Gothic", "Century Schoolbook", "Comic Sans", "Comic Sans MS", "Consolas", "Courier", "Courier New", "Geneva", "Georgia", "Helvetica", "Helvetica Neue", "Impact", "Lucida Bright", "Lucida Calligraphy", "Lucida Console", "Lucida Fax", "LUCIDA GRANDE", "Lucida Handwriting", "Lucida Sans", "Lucida Sans Typewriter", "Lucida Sans Unicode", "Microsoft Sans Serif", "Monaco", "Monotype Corsiva", "MS Gothic", "MS Outlook", "MS PGothic", "MS Reference Sans Serif", "MS Sans Serif", "MS Serif", "MYRIAD", "MYRIAD PRO", "Palatino", "Palatino Linotype", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Tahoma", "Times", "Times New Roman", "Times New Roman PS", "Trebuchet MS", "Verdana", "Wingdings", "Wingdings 2", "Wingdings 3"];
let browserList = ['Chrome','Safari','Firefox','Edge','IE','Opera','360','360SE','360EE','360AI','QQBrowser','Sogou','Liebao','Maxthon','TheWorld','Quark','2345Explorer','115Browser','UC','QQ','Wechat','Yandex','Vivaldi','Vivo','Meizu','Xiaomi','OPPO','OnePlus','Huawei','HONOR','Lenovo','Brave','Alipay','Taobao','Toutiao','Samsung'];
let browserMap = {
    'Chrome':'https://google.cn/intl/en_us/chrome/',
    'Safari':'https://www.apple.com/safari/',
    'Firefox':'https://www.mozilla.org/en-US/firefox/new/',
    'Edge':'https://www.microsoft.com/en-us/edge/',
    'IE':'https://www.microsoft.com/en-us/edge/',
    'Opera':'https://www.opera.com/',
    '360':'https://browser.360.cn/',
    '360SE':'https://browser.360.cn/',
    '360EE':'https://browser.360.cn/ee/',
    '360AI':'https://browser.360.cn/ai/',
    'QQBrowser':'https://browser.qq.com/',
    'Sogou':'https://sogou.browser.qq.com/',
    'Liebao':'https://www.liebao.cn/',
    'Maxthon':'https://www.maxthon.cn/',
    'TheWorld':'https://www.theworld.cn/',
    'Quark':'https://www.quark.cn/',
    '2345Explorer':'https://ie.2345.cc',
    '115Browser':'https://pc.115.com/',
    'UC':'https://www.uc.cn/',
    'QQ':'https://im.qq.com/index/',
    'Wechat':'https://www.wechat.com/en/',
    'Yandex':'https://browser.yandex.com/',
    'Vivaldi':'https://vivaldi.net/',
    'Vivo':'https://h5coml.vivo.com.cn/h5coml/appdetail_h5/browser_v2/index.html?appId=97410',
    'Meizu':'https://www.flyme.cn/',
    'Xiaomi':'https://hyperos.mi.com/',
    'OPPO':'https://www.coloros.com/',
    'OnePlus':'https://www.oneplus.com/',
    'Huawei':'https://appgallery.huawei.com/',
    'HONOR':'https://www.honor.com/cn/magic-os/',
    'Lenovo':'https://lestore.lenovo.com/',
    'Brave':'https://brave-browser.en.softonic.com/',
    'Alipay':'https://render.alipay.com/p/yuyan/180020040001212700/',
    'Taobao':'https://m.taobao.com/',
    'Toutiao':'https://app.toutiao.com/',
    'Samsung':'https://www.samsung.com.cn/apps/samsung-internet/',
};
let systemList = ['Windows','Windows Phone','Linux','Android','macOS','iOS','HarmonyOS','FreeBSD','Debian','Ubuntu','UOS','BlackBerry','Chrome OS'];
let fontList_html = [];
fontList_en.forEach(function(fontFamily){
    if(browser.isSupport('font-family',fontFamily)){
        fontList_html.push(`<p style="font-family:${fontFamily};">${fontFamily}</p>`);
    }
});
fontList.forEach(function(item){
    if(browser.isSupport('font-family',item[0])){
        fontList_html.push(`<p style="font-family:${item[0]};">${item[1]}</p>`);
    }
});
let $browser = document.querySelector('.mod-detail .browser');
let $mod_panel = document.querySelector('.mod-panel');
let $useragent = $mod_panel.querySelector('.useragent');
let $browserDetails = $mod_panel.querySelector('#browser-details');
let $systemDetails = $mod_panel.querySelector('#system-details');
let $userDetails = $mod_panel.querySelector('#user-details');
let $screenDetails = $mod_panel.querySelector('#screen-details');
let $deviceDetails = $mod_panel.querySelector('#device-details');
let formatPanel = function(info){
    let system = info.system+' '+info.systemVersion;
    let systemMap = {
        'Windows XP':'Windows 7',
        'Windows XP 64-bit':'Windows 7',
        'Windows 7':'Windows 7',
        'Windows Vista':'Windows 7'
    };
    if(browserMap[info.browser]){
        $browser.innerHTML = `
            <a href="${browserMap[info.browser]}" target="_blank" rel="nofollow">
                ${browserList.includes(info.browser)?`<img src="./static/image/browser/${info.browser}.png" width="32" height="32"/>`:''}
                <strong>${info.browser||'<img src="./static/image/loading.gif" width="32" height="32"/>'}</strong>        
            </a>
        `;
    }else{
        $browser.innerHTML = `
            <span>
                ${browserList.includes(info.browser)?`<img src="./static/image/browser/${info.browser}.png" width="32" height="32"/>`:''}
                <strong>${info.browser||'<img src="./static/image/loading.gif" width="32" height="32"/>'}</strong>        
            </span>
        `;
    }
    $useragent.innerHTML = `<strong>UserAgent:</strong><span>${info.userAgent||'-'}</span>`;
    $browserDetails.innerHTML = `<table>
        <tbody>
            <tr>
                <td class="th"><span>Browser</span></td>
                <td>
                    ${browserList.includes(info.browser)?`<img src="static/image/browser/${info.browser}.png" width="24" height="24"/>`:''}
                    <strong>${info.browser||'<img src="static/image/loading.gif" width="32" height="32"/>'}</strong>
                </td>
            </tr>
            <tr>
                <td class="th"><span>Version</span></td>
                <td><span>${info.browserVersion}</span></td>
            </tr>
            <tr>
                <td class="th"><span>Engine</span></td>
                <td><span>${info.engine}</span></td>
            </tr>
            <tr>
                <td class="th"><span>Is Robot</span></td>
                <td><span>${info.isRobot?'<span class="text-green">✔</span>':'<span class="text-red">✘</span>'}</span></td>
            </tr>
            <tr>
                <td class="th"><span>Is Webview</span></td>
                <td><span>${info.isRobot?'<span class="text-green">✔</span>':'<span class="text-red">✘</span>'}</span></td>
            </tr>
            <tr>
                <td class="th"><span>Cookie Enabled</span></td>
                <td><span>${info.isRobot?'<span class="text-green">✔</span>':'<span class="text-red">✘</span>'}</span></td>
            </tr>
            <tr>
                <td class="th"><span>Support WebGL</span></td>
                <td><span>${browser.isSupport('webgl')?'<span class="text-green">✔</span>':'<span class="text-red">✘</span>'}</span></td>
            </tr>
        </tbody>
    </table>`;
    $systemDetails.innerHTML = `<table>
        <tbody>
            <tr>
                <td class="th"><span>Operating System</span></td>
                <td>
                    ${systemList.includes(info.system)?`<img src="static/image/system/${systemMap[system]??info.system}.png" width="24" height="24"/>`:''}
                    <span>${info.system} ${info.systemVersion}（${info.bitness}-bit)</span>
                </td>
            </tr>
            <tr>
                <td class="th"><span>Platform</span></td>
                <td><span>${info.platform}</span></td>
            </tr>
            <tr>
                <td class="th"><span>Architecture</span></td>
                <td><span>${info.architecture}</span></td>
            </tr>
        </tbody>
    </table>`;
    $userDetails.innerHTML = `<table>
        <tbody>
            <tr>
                <td class="th"><span>IP address</span></td>
                <td><p>${info.ip}</p><p id="location"></p></td>
            </tr>
            <tr>
                <td class="th"><span>Language</span></td>
                <td><span>${info.language}</span></td>
            </tr>
            <tr>
                <td class="th"><span>Timezone</span></td>
                <td><span>${info.timezone}</span></td>
            </tr>
            <tr>
                <td class="th"><span>Battery</span></td>
                <td><span>${info.battery>=0?(+(info.battery*100).toFixed(2))+'%':''}</span></td>
            </tr>
            <tr>
                <td class="th"><span>Is Charging</span></td>
                <td><span>${info.isCharging?'<span class="text-green">✔</span>':'<span class="text-red">✘</span>'}</span></td>
            </tr>
            <tr>
                <td class="th"><span>Is Online</span></td>
                <td><span>${info.isOnline?'<span class="text-green">✔</span>':'<span class="text-red">✘</span>'}</span></td>
            </tr>
            <tr>
                <td class="th"><span>Font Family</span></td>
                <td><div class="scroll">${fontList_html.join('')}</div></td>
            </tr>
        </tbody>
    </table>`;
    fetch(`https://get.geojs.io/v1/ip/geo/${info.ip}.json`).then(data=>data.json()).then(function(data){
        let address = [];
        if(data.city){
            address.push(data.city);
        }
        if(data.region){
            address.push(data.region);
        }
        if(data.country){
            address.push(data.country);
        }
        document.querySelector('#location').innerHTML = `
            <img src="./static/image/flag/${data.country_code.toLowerCase()}.svg" width="28" height="24"/>
            <span>${address.join(',')}</span>
        `;
    });
    $screenDetails.innerHTML = `<table>
        <tbody>
            <tr>
                <td class="th"><span>Screen Size</span></td>
                <td><span>${info.screenWidth} x ${info.screenHeight} Pixels</span></td>
            </tr>
            <tr>
                <td class="th"><span>Client Size</span></td>
                <td><span>${info.clientWidth} x ${info.clientHeight} Pixels</span></td>
            </tr>
            <tr>
                <td class="th"><span>Screen FPS</span></td>
                <td><span>${info.screenFPS} FPS</span></td>
            </tr>
            <tr>
                <td class="th"><span>Screen ColorDepth</span></td>
                <td><span>${info.screenColorDepth} bit</span></td>
            </tr>
            <tr>
                <td class="th"><span>Is Touch</span></td>
                <td><span>${info.isTouch?'<span class="text-green">✔</span>':'<span class="text-red">✘</span>'}</span></td>
            </tr>
            <tr>
                <td class="th"><span>Is Retina</span></td>
                <td><span>${info.devicePixelRatio>1?'<span class="text-green">✔</span>':'<span class="text-red">✘</span>'}</span></td>
            </tr>
        </tbody>
    </table>`;
    $deviceDetails.innerHTML = `<table>
        <tbody>
            <tr>
                <td class="th"><span>Device Type</span></td>
                <td>
                    <img src="./static/image/device/${info.device}.png" width="24" height="24"/>
                    <span>${info.device}</span>
                </td>
            </tr>
            <tr>
                <td class="th"><span>Device Memory</span></td>
                <td><span>${info.deviceMemory}</span></td>
            </tr>
            <tr>
                <td class="th"><span>GPU Vendor</span></td>
                <td><span>${info.gpu}</span></td>
            </tr>
            <tr>
                <td class="th"><span>GPU Model</span></td>
                <td><span>${info.gpuModel}</span></td>
            </tr>
        </tbody>
    </table>`;
};

browser.getInfo().then(formatPanel);