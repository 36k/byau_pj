chrome.tabs.query({active: true, currentWindow: true}, function(tabs)
    {
        let port=chrome.tabs.connect(tabs[0].id,{name: "pj"})
        let port_pj_start=chrome.tabs.connect(tabs[0].id,{name: "pj_start"})
        $(".btn").click(function(){
            port.postMessage({start:true})
        })
        port.onMessage.addListener(function (msg) {
            if(msg.end){
                port_pj_start.postMessage({start_pj:true})
                port_pj_start.onMessage.addListener(function(msg){
                    if(msg.pj_end){
                        alert("评教完成")
                    }
                })
            }
        })
    });
