var div = document.getElementById('box'),
estilo = window.getComputedStyle(div),
podeCres = false, podeMov = false,
btnPodeMover = document.getElementById('btnPodeMover'),
btnPodeCres = document.getElementById('btnPodeCres')

function zoom(event) {
    if (podeCres == true) {
        let delta = Math.sign(event.deltaY)
        if (delta < 0) {
            maisZoom(0.05)
        }else{
            menosZoom(0.05)
        }
    } else {
        console.log('Bloqueado')
    }
}

let maisZoom = zoom => {
if (podeCres == true) {
        //pega o nivel de zoom atual da div
        zoomAtt()
    
        //verifica se o zoom atual ultrapassou o limite (5)
        if (Number(zoomAtual)+Number(zoom) >= 5) {
            div.style.zoom = 5
        }else{
            div.style.zoom = Number(zoomAtual)+Number(zoom)
            //console.log(zoomAtual)
        }
} else {
    console.log('Bloqueado')
}
}

//Função diminuir zoom
let menosZoom = zoom => {
    if (podeCres == true) {
        zoomAtt()
    
        //Verifica se o zoom atual é menor que o limite (0.1)
        if (Number(zoomAtual)-Number(zoom) <= 0) {
            div.style.zoom = 0.05
            //console.log(zoomAtual)
        } else {
            div.style.zoom = Number(zoomAtual)-Number(zoom)
        }
    } else {
        console.log('Bloqueado')
    }
}

window.addEventListener('keydown', event => {
    let tecla = event.key
    if (tecla === '+') {
        maisZoom(0.2)
    } else if(tecla === '-'){
        menosZoom(0.2)
    }
})

let zoomAtt = a =>{ return zoomAtual = estilo.getPropertyValue('zoom')}

div.onwheel = zoom

window.onload = addListeners

function addListeners(){
    div.addEventListener('mousedown', mouseDown, false)
    window.addEventListener('mouseup', mouseUp, false)

}

function mouseUp()
{
    window.removeEventListener('mousemove', divMove, true)
}

function mouseDown(e){
  window.addEventListener('mousemove', divMove, true)
}

function divMove(e) {
if (podeMov == true) {
    div.style.position = 'absolute'
    div.style.top = e.clientY + 'px'
    div.style.left = e.clientX + 'px'
} else {
    console.log('Bloqueado')
}
}

function podeMover() {
    if (podeMov == true) {
        podeMov = false
        btnPodeMover.style.backgroundColor = 'red'
    } else {
        podeMov = true
        btnPodeMover.style.backgroundColor = 'green'
    }
}

function pode(btn) {
    if (btn == 'btnPodeMover') {
        if (podeMov == true) {
            podeMov = false
            btnPodeMover.style.backgroundColor = 'red'
        } else {
            podeMov = true
            btnPodeMover.style.backgroundColor = 'green'
        }        
    } else {
        if (podeCres == true) {
            podeCres = false
            btnPodeCres.style.backgroundColor = 'red'
        } else {
            podeCres = true
            btnPodeCres.style.backgroundColor = 'green'
        }
    }
}