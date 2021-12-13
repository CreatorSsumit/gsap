var t1 = gsap.timeline();

t1.from('.st', {
    stagger: .2,
    x: 30,
    duration: 1,
    opacity: 0,
    ease: 'Expo.easeInOut()'
}).from('.head', {
    y: 30,
    stagger: .5,
    delay: 2,
    opacity: 0,
    duration: 1,
    ease: 'Expo.easeInOut()'
}, '-=1').to('#overlay', {
    width: '0%',
    duration: 2,
    ease: 'Expo.easeInOut()',
}, '-=3')
