document.getElementById('get-advice').addEventListener('click', () => {
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            document.getElementById('adviceId').textContent = 
            `ADVICE #${data.slip.id}`
            document.getElementById('adviceText').textContent =
            `${data.slip.advice}`
        })
})

