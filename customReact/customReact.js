function customRender(item, container) {


    // const domElement = document.createElement(item.type)
    // domElement.innerHTML = item.children
    // domElement.setAttribute('href', item.props.href)
    // domElement.setAttribute('target', item.props.target)
    // container.appendChild(domElement)


    const domElement = document.createElement(item.type)
    domElement.innerHTML = item.children

    for (const prop in item.props) {
        if(prop === 'children') continue
        domElement.setAttribute(prop, item.props[prop])

    }

    container.appendChild(domElement)


}


const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click on the google'
}


const asdfg = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me'
}


const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)

// customRender(asdfg, mainContainer)

