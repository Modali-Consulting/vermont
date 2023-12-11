// Basic JavaScript if needed
// For example, for smooth scrolling for anchor links

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Function to set the size of the iframe according to its body's height
function resizeIframeToFitContent(iframe) {
    try {
        const iframeContent = iframe.contentWindow || iframe.contentDocument.document || iframe.contentDocument;
        iframe.style.height = iframeContent.document.body.scrollHeight + 'px';
        iframe.style.width = iframeContent.document.body.scrollWidth + 'px';
    } catch (e) {
        console.error('Resize iframe failed:', e);
    }
}

// Select the iframe element
const iframe = document.getElementById('iframe');

// Call the resize function after the iframe loads
iframe.onload = () => {
    resizeIframeToFitContent(iframe);
};
