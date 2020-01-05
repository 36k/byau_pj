
chrome.runtime.onConnect.addListener(function (port) {
    if (port.name == 'pj') {
        port.onMessage.addListener(function (msg) {
            if (msg.start) {
                let b = document.getElementById("Frame0")
                b.contentWindow.document.querySelector("body > div > div.middlewaprightpart.r > div.middlewaprightup > div.usuafunmenu > div > div > div:nth-child(5)").click()
                setTimeout(() => {
                    let a = document.getElementById("Frame1")
                    a.contentWindow.document.querySelector("#Form1 > table > tbody > tr:nth-child(2) > td:nth-child(7) > a").click()
                    port.postMessage({ end: true })
                }, 1000);
            }
        })
    } else if (port.name = "pj_start") {
        port.onMessage.addListener(function (msg) {
            if (msg.start_pj) {
                setTimeout(() => {
                    let b = document.getElementById("Frame1")
                    let pjs = b.contentWindow.document.querySelectorAll("#dataList > tbody > tr > td:nth-child(9) > a")
                    let nopjcount=0
                    let pj_count=0
                    for(let j=0;j<pjs.length;j++){
                        let value = pjs[j].innerText
                        if (value==='评价') {
                            setTimeout(() => {
                                b = document.getElementById("Frame1")
                                pjs = b.contentWindow.document.querySelectorAll("#dataList > tbody > tr > td:nth-child(9) > a")
                                pjs[j].click()
                                console.log(j)
                                setTimeout(() => {
                                    let a = document.getElementById("Frame1")
                                    a.contentWindow.alert = function () { }
                                    let inputs = a.contentWindow.document.querySelectorAll("#table1 > tbody > tr > td:nth-child(2) >input:nth-child(1)")
                                    for (let i = 0; i < inputs.length; i++) {
                                        inputs[i].click()
                                    }
                                    a.contentWindow.document.querySelector("#pj0601id_14_2").click()
                                    a.contentWindow.document.getElementById("issubmit").value='1'
                                    a.contentWindow.document.getElementById("sfxyt").value='0'
                                    setTimeout(() => {
                                        a.contentWindow.document.getElementById("Form1").submit()
                                        a.contentWindow.document.querySelector("#qx").click()
                                        pj_count++;
                                        if(pjs.length==(nopjcount+pj_count)){
                                            port.postMessage({pj_end:true})
                                        }
                                    }, 600);
                                }, 1000);
                            }, j*2000);
                        }else{
                            nopjcount++;
                            if(pjs.length==(nopjcount+pj_count)){
                                port.postMessage({pj_end:true})
                            }
                        }
                    }  
                }, 1000);
            }
        })
    }
})
