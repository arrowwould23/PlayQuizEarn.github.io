document.addEventListener('DOMContentLoaded', function() {
    // Load the download count from local storage
    let downloadCount = localStorage.getItem('downloadCount') || 0;
    document.getElementById('download-count').textContent = downloadCount;

    document.getElementById('download-link').addEventListener('click', function() {
        // Increment the download count
        downloadCount++;
        document.getElementById('download-count').textContent = downloadCount;
        
        // Save the new count to local storage
        localStorage.setItem('downloadCount', downloadCount);
    });
});
