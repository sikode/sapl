const DOMstrings = {
    html: 'html',
    body: 'body',
    navbar: {
        item: '.navbar a'
    },
    loader: {
        container: '.loader',
        spinner: '.spinner'
    },
    hero: '.hero',
    download: {
        title: '.download h2',
        box: '.download .row'
    },
    banner: {
        container: '.banner',
        title: '.banner img',
        button: '.banner .btn'
    },
    features: {
        title: '.features h2',
        group1: '.features .column-group:nth-of-type(1)',
        group2: '.features .column-group:nth-of-type(2)',
        group3: '.features .column-group:nth-of-type(3)',
        group4: '.features .column-group:nth-of-type(4)',
    },
    footer: {
        container: 'footer',
        left: '.left-fo',
        right: '.right-fo'
    }
}

setTimeout( () => {
    $(DOMstrings.loader.spinner).fadeOut(300, () => {
        $(DOMstrings.loader.container).fadeOut(300);
    });
}, 2000);

$(DOMstrings.html).niceScroll({
    cursorcolor: "#45bbe4",
    cursorborder: "1px solid #45bbe4",
    cursorborderradius: "0"
});

$(window).scroll(() => {
    const scrollPos = $(window).scrollTop(),
        navbar = $(".navbar-default");

    if (scrollPos > 620) {
        navbar.addClass("scrolled");
    } else {
        navbar.removeClass("scrolled");
    }
});

const topoffset = 60; 

$(DOMstrings.body).scrollspy({
    target: 'header .navbar',
    offset: topoffset
});

$(DOMstrings.navbar.item).click( function() {
    if (location.pathname.replace(/^\//, '') ===
        this.pathname.replace(/^\//, '') &&
        location.hostname === this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top - topoffset + 2
            }, 800);
            return false;
        }
    }
});

$(DOMstrings.hero).parallax({
    imageSrc: "../images/hero.png",
    speed: 0.2
});

$(DOMstrings.banner.container).parallax({
    imageSrc: "../images/banner.png",
    speed: 0.2
});

$(DOMstrings.download.title).waypoint({
    handler: (direction) => {
        if (direction === "down") {
            $(DOMstrings.download.title).addClass("fadeInUp")
        } else {
            $(DOMstrings.download.title).removeClass("fadeInUp")
        }
    },
    offset: "105%"
})

$(DOMstrings.download.box).waypoint({
    handler: (direction) => {
        if (direction === "down") {
            $(DOMstrings.download.box).addClass("fadeInUp")
        } else {
            $(DOMstrings.download.box).removeClass("fadeInUp")
        }
    },
    offset: "97%"
})

$(DOMstrings.features.title).waypoint({
    handler: (direction) => {
        if (direction === "down") {
            $(DOMstrings.features.title).addClass("fadeInUp")
        } else {
            $(DOMstrings.features.title).removeClass("fadeInUp")
        }
    },
    offset: "105%"
})

$(DOMstrings.features.group1).waypoint({
    handler: (direction) => {
        if (direction === "down") {
            $(DOMstrings.features.group1).addClass("fadeInUp")
        } else {
            $(DOMstrings.features.group1).removeClass("fadeInUp")
        }
    },
    offset: "100%"
})

$(DOMstrings.features.group2).waypoint({
    handler: (direction) => {
        if (direction === "down") {
            $(DOMstrings.features.group2).addClass("fadeInUp")
        } else {
            $(DOMstrings.features.group2).removeClass("fadeInUp")
        }
    },
    offset: "100%"
})

$(DOMstrings.features.group3).waypoint({
    handler: (direction) => {
        if (direction === "down") {
            $(DOMstrings.features.group3).addClass("fadeInUp")
        } else {
            $(DOMstrings.features.group3).removeClass("fadeInUp")
        }
    },
    offset: "100%"
})

$(DOMstrings.features.group4).waypoint({
    handler: (direction) => {
        if (direction === "down") {
            $(DOMstrings.features.group4).addClass("fadeInUp")
        } else {
            $(DOMstrings.features.group4).removeClass("fadeInUp")
        }
    },
    offset: "100%"
})

$(DOMstrings.footer.container).waypoint({
    handler: (direction) => {
        if (direction === "down") {
            $(DOMstrings.footer.left).addClass("fadeInUp")
            $(DOMstrings.footer.right).addClass("fadeInUp")
        } else {
            $(DOMstrings.footer.left).removeClass("fadeInUp")
            $(DOMstrings.footer.right).removeClass("fadeInUp")
        }
    },
    offset: "100%"
})