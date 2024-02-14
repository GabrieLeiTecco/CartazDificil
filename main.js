// VARIÁVEIS
var div = document.getElementById('box'), 
btnPodeMover = document.getElementById('btnPodeMover'),
btnPodeCres = document.getElementById('btnPodeCres'),
estilo = window.getComputedStyle(div),
podeCres = false, podeMov = false

//FUNÇÕES DE ZOOM

function zoom(e) {
    if (podeCres == true) {
        let delta = Math.sign(e.deltaY)
        if (delta < 0 || e.key == '+') {
            maisZoom(0.05)
        } else if (delta > 0 || e.key == '-'){
            menosZoom(0.05)
        }
    } else {
        console.log('Zoom bloqueado')
    }
}

function maisZoom(zoom) {
    zoomAtt()
    if (podeCres == true) {
        if (Number(zoomAtual)+Number(zoom) >= 5) {
            div.style.zoom = 5
        } else {
            div.style.zoom = Number(zoomAtual)+Number(zoom)
        }
    } else {
        console.log('Zoom bloqueado')
    }
}

function menosZoom(zoom) {
    zoomAtt()
    if (podeCres == true) {
        if (Number(zoomAtual)+Number(zoom) <= 0) {
            div.style.zoom = 0.05
        } else {
            div.style.zoom = Number(zoomAtual)-Number(zoom)
        }
    } else {
        console.log('Zoom bloqueado')
    }
}

function zoomAtt() {
    return zoomAtual = estilo.getPropertyValue('zoom')
}

// FUNÇÕES DE MOVIMENTAÇÃO
function addListeners() {
    div.addEventListener('mousedown', mouseDown, false)
    window.addEventListener('mouseup', mouseUp, false)
}

function mouseUp() {
    window.removeEventListener('mousemove', divMove, true)
}

function mouseDown() {
    window.addEventListener('mousemove', divMove, true)
}

function divMove(e) {
    if (podeMov == true) {
        div.style.position = 'absolute'
        div.style.top = e.clientY + 'px'
        div.style.left = e.clientX + 'px'
    } else {
        console.log('Movimentação bloqueada')
    }
}

//FUNÇÃO DE BLOQUEIO
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

//EXECUTANDO ALGUMAS FUNÇÕES
div.onwheel = zoom
window.onload = addListeners
window.onkeydown = zoom
