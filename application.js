const scrollElements = document.querySelectorAll(".js-scroll");

//Set opacity of elements to 0
//scrollElements.forEach((el) => {
//    el.style.opacity = 0
//})
//Detect when an element is in view
const elementInView = (el, divident = 1) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop <= 
        (window.innerHeight || document.documentElement.clientHeight) /
    dividend
        );
};
//

const elementOutofView = (el) => {
    elementTop = el.getBoundingClientRect().top;

    return (
        elementTop > (window.innerHeight ||
            document.documentElement.clientHeight)
    );
};

const displayScrollElement = (element) => {
    element.classList.add("scrolled");
}

const hideScrollElement = (element) => {
    element.classList.remove("scrolled");
}

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 100)) {
            displayScrollElement(el);
        } else {
            hideScrollElement(el);
        }
    })
}

window.addEventListener('scroll', () => {
    handleScrollAnimation();
})
