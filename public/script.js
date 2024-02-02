document.getElementById('summarize-button').addEventListener('click', function () {
    const inputText = document.getElementById('input-text').value;
    const summaryLength = document.getElementById('summary-length').value;
    const paragraphMode = document.getElementById('paragraph-mode').checked;
    const bulletPointMode = document.getElementById('bullet-point-mode').checked;
    const customMode = document.getElementById('custom-mode').checked;

   
    const requestData = {
        inputText,
        summaryLength,
        paragraphMode,
        bulletPointMode,
        customMode,
    };

  
    fetch('/summarize', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
    })
    .then(response => response.json())
    .then(data => {
       
        document.getElementById('summary').textContent = data.summary;
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
