function decryptCharacter(c) {
    let code = c.charCodeAt("0");
    let offsetUppercase = code - "⽂".charCodeAt(0);
    if (offsetUppercase >= 0 && offsetUppercase <= 25) {
        return String.fromCharCode('A'.charCodeAt(0) + offsetUppercase);
    }

    let offsetLowercase = code - "⽜".charCodeAt(0);
    if (offsetLowercase >= 0 && offsetLowercase <= 25) {
        return String.fromCharCode('a'.charCodeAt(0) + offsetLowercase);
    }

    return c;
}

function decryptText(text) {
    return text.split('').map(decryptCharacter).join('');
}

function decryptElements(element) {
    element.querySelectorAll('p').forEach(p => {
        p.textContent = decryptText(p.textContent);
    }
    );
}

function isGarbageElement(element) {
    const style = window.getComputedStyle(element);
    return style.position === 'absolute' && style.top === '-9999px' && style.left === '-9999px';
}

function removeGarbageElements(element) {
    element.querySelectorAll('*').forEach(child => {
        if (isGarbageElement(child)) {
            child.remove();
        }
    });
}

const contentDiv = document.querySelectorAll('div[x-html="content"]')[0];

const observer = new MutationObserver((mutationsList, observer) => {
    for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
            observer.disconnect();
            removeGarbageElements(contentDiv);
            decryptElements(contentDiv);
        }
    }
}
);

const config = { childList: true, subtree: true };
observer.observe(contentDiv, config);