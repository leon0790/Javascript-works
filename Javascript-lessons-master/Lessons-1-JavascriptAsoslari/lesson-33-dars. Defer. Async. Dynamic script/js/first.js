document.querySelectorAll('p')

console.log(p)

function loadScript(src){
    const script = document.createElement('script')
    script.src = 'js/second.js'
    document.body.append(script)
}

loadScript('js/second.js')
loadScript('js.third.js')

