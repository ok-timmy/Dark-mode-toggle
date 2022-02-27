const mode = document.getElementById('Dark-mode')

mode.addEventListener('change', (e)=> {
    document.body.classList.toggle('dudu', e.target.checked);
})