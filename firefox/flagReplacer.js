// Configuration
const FLAG_CONFIG = {
  regimeEmoji: '🇸🇾',
  twitterSVGCode: '1f1f8-1f1fe',
  revolutionFlagURL: chrome.runtime.getURL('revolution-flag.png')
};

// Helper function to replace emoji flags
function replaceEmojiFlag(node) {
  if (node.nodeType === Node.TEXT_NODE && node.textContent.includes(FLAG_CONFIG.regimeEmoji)) {
    const span = document.createElement('span');
    span.innerHTML = node.textContent.replace(
      FLAG_CONFIG.regimeEmoji,
      `<img src="${FLAG_CONFIG.revolutionFlagURL}" class="revolution-flag" alt="Syrian Revolution Flag" />`
    );
    node.parentNode.replaceChild(span, node);
  }
}

// Helper function to replace Twitter SVG flags
function replaceTwitterFlag(element) {
  if (element.tagName === 'IMG' && element.src.includes(FLAG_CONFIG.twitterSVGCode)) {
    const img = document.createElement('img');
    img.src = FLAG_CONFIG.revolutionFlagURL;
    img.className = 'revolution-flag twitter-flag';
    img.alt = 'Syrian Revolution Flag';
    element.parentNode.replaceChild(img, element);
  }
}

// Process all nodes in the document
function processNode(node) {
  if (node.nodeType === Node.ELEMENT_NODE || node.nodeType === Node.DOCUMENT_NODE) {
    node.childNodes.forEach(processNode);
  } else {
    replaceEmojiFlag(node);
  }
  
  if (node.nodeType === Node.ELEMENT_NODE) {
    replaceTwitterFlag(node);
  }
}

// Initial processing
processNode(document.body);

// Watch for dynamic content changes
const observer = new MutationObserver((mutations) => {
  mutations.forEach(mutation => {
    mutation.addedNodes.forEach(processNode);
  });
});

observer.observe(document.body, {
  childList: true,
  subtree: true
}); 