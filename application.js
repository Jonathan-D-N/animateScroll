const scrollElements = document.querySelectorAll(".js-scroll");
//Set opacity of elements to 0
scrollElements.forEach((el) => {
    el.style.opacity = 0
})
//Detect when an element is in view
const elementInView = (el, scrollOffset = 0) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop <= 
        ((window.innerHeight || document.documentElement.clientHeight) - scrollOffset)
    );
};

Const displayScrollElement = (element) => {
    element.classList.add("scrolled");
}

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 100)) {
            displayScrollElement(el);
        }
    })
}