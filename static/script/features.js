document.querySelectorAll('.mod-panel tbody tr').forEach(function($tr){
    const $td = $tr.querySelector('td:nth-child(2)');
    const key = $td.className;
    const [className,subName] = $td.className.split('_');
    const formatValue = function(value){
        if(typeof value=='string'){
            if(value){
                return `<span class="text-orange">?</span> <span>${value}</span>`;
            }else{
                return '<span class="text-red">✘</span> <span>false</span>';
            }
        }else if(value==true){
            return '<span class="text-green">✔</span> <span>true</span>';
        }else if(value==false){
            return '<span class="text-red">✘</span> <span>false</span>';
        }else{
            return `<span class="text-orange">?</span> <span>${value}</span>`;
        }
    };
    if(key.includes('_')&&typeof Modernizr[className][subName]!='undefined'){
        $td.innerHTML = formatValue(Modernizr[className][subName]);
    }else if(typeof Modernizr[className]!='undefined'){
        $td.innerHTML = formatValue(Modernizr[className]);
    }
})