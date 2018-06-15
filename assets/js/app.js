var jumboHeigh;

        function parallax(){
            var scrolled = $(window).scrollTop();
            $('.jumbotron-bg').css('height', (jumboHeight-scrolled) + 'px');
        }

        function animations() {
           // if (Modernizr.csstransitions) {
            var delayTime = 0;
            $('[data-animate]').css({opacity: '0'});
            $('[data-animate]').waypoint(function (direction) {
                delayTime += 150;
                $(this).delay(delayTime).queue(function (next) {
                    $(this).toggleClass('animated');
                    $(this).toggleClass($(this).data('animate'));
                    delayTime = 0;
                    next();
                });
            },
            {
                offset: '95%',
                triggerOnce: true
            });
        }

        $(document).ready(function () {
            
            $('.jumbotron').css('height', screen.height);
            jumboHeight = $('.jumbotron').outerHeight();
            
            $('body').scrollspy({target: "#main-nav", offset: 50});

            $("#main-nav a").on("click", function(event){
                if(this.hash !== ""){
                    event.preventDefault();
                    var hash = this.hash;

                    $('html, body').animate({
                        scrollTop: $(hash).offset().top
                    }, 800, function(){
                        window.location.hash = hash;
                    });
                }
            });
            
            $(".jumbotron a").on("click", function(event){
                if(this.hash !== ""){
                    event.preventDefault();
                    var hash = this.hash;
                    $('html, body').animate({
                        scrollTop: $(hash).offset().top
                    }, 800, function(){
                        window.location.hash = hash;
                    });
                }
            });

            $(".scroll-trigger").click(function(){
                console.log('click');
                $(".navbar-collapse").collapse("hide");
            });
            
            function jsScroll() {
                var nav = $('#main-nav');
                if (nav.offset().top > 100) {
                    nav.addClass('navbar-shrink');
                } else {
                    nav.removeClass('navbar-shrink');
                }
            }

            $(window).scroll(function(e){
                parallax();
                jsScroll();
            });

            $('div.hidden').fadeIn(500).removeClass('hidden');

            parallax();
            animations();
            $.waypoints('refresh');
        });