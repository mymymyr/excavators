let content = document.querySelector('.content');
const eventBuild = new Event('build');

function processAjaxData(urlPath) {
    const pos = urlPath.lastIndexOf('?page=');
    let pathname = urlPath.substring(pos + 6);
    if (pos === -1)
        pathname = 'main';
    fetch(pathname + ".html").then((response) => {
        return response.text();
    }).then((data) => {
        content.innerHTML = data;
        if (urlPath.lastIndexOf('#') !== -1) {
            window.location = urlPath;
        }
        document.dispatchEvent(eventBuild);
    });
}

processAjaxData(window.location.href);