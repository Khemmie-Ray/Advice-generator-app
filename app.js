document.getElementById('get-advice').addEventListener('click', () => {
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            document.getElementById('adviceId').textContent = 
            `ADVICE #${data.slip.id}`
            document.getElementById('adviceText').innerHTML =
            `<h1 class="text"><i class="ri-double-quotes-l"></i>
             ${data.slip.advice} <i class="ri-double-quotes-r"></i>`
        })
})

