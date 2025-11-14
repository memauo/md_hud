window.addEventListener('message', (event) => {
    const data = event.data;
    if (data.action === 'update') {
        const stam = 100 - data.stm;
        document.getElementById('hpt').innerHTML = Math.trunc(data.healthGlobal) + "%"
        document.getElementById('art').innerHTML = Math.trunc(data.armourGlobal) + "%"
        document.getElementById('hut').innerHTML = Math.trunc(data.hungerGlobal) + "%"
        document.getElementById('tht').innerHTML = Math.trunc(data.thirstGlobal) + "%"
        document.getElementById('stt').innerHTML = Math.trunc(stam) + "%"
        document.getElementById('oxt').innerHTML = Math.trunc(data.oxygenGl) + "%"

    }
    if (data.action === 'cinema') {
        if (data.showC==1){
            const cn = document.getElementById('cn');
            cn.style.display = 'block'
            const cn2 = document.getElementById('cn2');
            cn2.style.display = 'block'
            const bxs = document.getElementById('bxs');
            bxs.style.display = 'none'
            const h2 = document.getElementById('h2');
            h2.style.display = 'none'
            const speedb = document.getElementById('speedb');
            speedb.style.display = 'none'
        } else {
            const cn = document.getElementById('cn');
            cn.style.display = 'none'
            const cn2 = document.getElementById('cn2');
            cn2.style.display = 'none'
            const bxs = document.getElementById('bxs');
            bxs.style.display = 'flex'
            const h2 = document.getElementById('h2');
            h2.style.display = 'flex'
                        const speedb = document.getElementById('speedb');
            speedb.style.display = 'flex'
        }
        
    }
     if (data.action == 'vehSp'){
        const spdTxt = document.getElementById('spdTxt');
        spdTxt.innerText = Math.round(data.speed);
        const fl = document.getElementById('fl');
        fl.style.height = data.fuel + '%'

    }
    if (data.action == 'playerVeh'){
        if (data.vehHud==1){
            const speedb = document.getElementById('carhudd');
            speedb.style.display = 'flex'
        }else{
            const speedb = document.getElementById('carhudd');
            speedb.style.display = 'none'
        }
    }
    if (data.action =='hud2') {
        document.getElementById('street').innerHTML = data.street;
        document.getElementById('id').innerHTML = data.idd
        if (data.job!="Unemployed"){
            document.getElementById('job').innerHTML = data.job + " - "+ data.grade;
        } else {
            document.getElementById('job').innerHTML = data.job;
        }

    }
});
