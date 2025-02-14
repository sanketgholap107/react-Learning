function displayContent(reactElement, mainContainer) {
    /* const domElement = document.createElement(reactElement.type)
     domElement.innerHTML = reactElement.children
     domElement.setAttribute('href', reactElement.props.href)
     domElement.setAttribute('target', reactElement.props.target)*/

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        domElement.setAttribute(prop, reactElement.props[prop])
    }

    mainContainer.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: "https://www.google.com",
        target: "_blank"
    },
    children: "Click here to Redirect to Google"
}

const mainContainer = document.getElementById("root")

displayContent(reactElement, mainContainer)