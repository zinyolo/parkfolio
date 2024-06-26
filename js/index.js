$(document).ready(function () {
    $('.slide_one .header_box .scroll_effect ul li').click(function (e) {
        e.preventDefault()
        $(this).addClass('on').siblings().removeClass('on')
        let idx = $(this).index()
        let section = $('.container > *').eq(idx)
        let distance = section.offset().top - (100)
        $('html, body').animate({
            scrollTop: distance
        })
    })
})

    $(window).scroll(function () {
        $('.container > *').each(function () {
            if ($(this).offset().top <= $(window).scrollTop() + 100) {
                let idx = $(this).index()
                $('.slide_one .header_box .scroll_effect ul li').removeClass('on')
                $('.slide_one .header_box .scroll_effect ul li').eq(idx).addClass('on')
            }
        })
    })


    const items = document.querySelectorAll('.collection li')
    const close = document.querySelector('button')
    const popup = document.querySelector('.popup')

    items.forEach((el) => {
        el.addEventListener('mouseenter', () => {
            el.querySelector('video').play()
        })
        el.onmouseleave = () => {
            el.querySelector('video').pause()
            el.querySelector('video').currentTime = '0'
        }
        el.addEventListener('click', (e) => {
            let title = el.querySelector('h3').innerText
            let text = el.querySelector('p').innerText
            let videosrc = e.currentTarget.querySelector('video').getAttribute('src')

            popup.querySelector('.txt h2').innerText = title
            popup.querySelector('.txt p').innerText = text
            popup.querySelector('video').setAttribute('src', videosrc)
            popup.classList.add('on')
            popup.querySelector('video').play()
        })
    })

    close.addEventListener('click', () => {
        popup.classList.remove('on')
        popup.querySelector('video').pause()
    })
    
    $(document).keydown(function(event){
        if (
            event.keyCode == 27
        ){
        $('.popup').removeClass('on')    
        }
    })