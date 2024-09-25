document.getElementById('fetchButton').addEventListener('click', function() {
    const url = document.getElementById('videoUrl').value;
    const messageDiv = document.getElementById('message');
    const qualitiesDiv = document.getElementById('qualities');
    const qualityOptions = document.getElementById('qualityOptions');

    if (!url) {
        messageDiv.textContent = 'Please enter a valid video URL.';
        return;
    }

    messageDiv.textContent = 'Fetching video qualities...';
    qualitiesDiv.innerHTML = ''; // Clear previous options

    // Simulate fetching video qualities (replace with actual API call)
    setTimeout(() => {
        const qualities = ['1080p', '720p', '480p', '360p'];
        qualities.forEach(quality => {
            const button = document.createElement('button');
            button.textContent = `Download ${quality}`;
            button.onclick = () => {
                messageDiv.innerHTML = `Downloading ${quality}...`;
                // Simulate download
                setTimeout(() => {
                    messageDiv.innerHTML = `${quality} downloaded!`;
                }, 2000);
            };
            qualitiesDiv.appendChild(button);
        });

        qualityOptions.classList.remove('hidden');
        messageDiv.textContent = 'Select a quality to download.';
    }, 2000);
});

document.getElementById('convertAudioButton').addEventListener('click', function() {
    const messageDiv = document.getElementById('message');
    messageDiv.innerHTML = 'Converting to audio...';
    // Simulate audio conversion
    setTimeout(() => {
        messageDiv.innerHTML = 'Audio converted! <a href="#">Click here to download.</a>';
    }, 2000);
});
