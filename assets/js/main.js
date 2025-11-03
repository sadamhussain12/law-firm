      // Header scroll effect
        $(window).scroll(function() {
            if ($(window).scrollTop() > 50) {
                $('.navbar').addClass('scrolled');
            } else {
                $('.navbar').removeClass('scrolled');
            }
            
            // Show/hide back to top button
            if ($(window).scrollTop() > 300) {
                $('.back-to-top').addClass('active');
            } else {
                $('.back-to-top').removeClass('active');
            }
        });
        
        // Back to top functionality
        $('.back-to-top').click(function() {
            $('html, body').animate({scrollTop: 0}, 800);
            return false;
        });
        
        // Animate on scroll
        function animateOnScroll() {
            $('.animate-on-scroll').each(function() {
                var elementTop = $(this).offset().top;
                var windowBottom = $(window).scrollTop() + $(window).height();
                
                if (elementTop < windowBottom - 100) {
                    $(this).addClass('animated');
                }
            });
        }
        
        // Initial check on page load
        $(document).ready(function() {
            animateOnScroll();
        });
        
        // Check on scroll
        $(window).scroll(function() {
            animateOnScroll();
        });
        
        // Mobile menu close on click
        $('.navbar-nav>li>a').on('click', function(){
            $('.navbar-collapse').collapse('hide');
        });

        ////// career page script start ///////
               // File upload display
        document.getElementById('resume').addEventListener('change', function (e) {
            const fileName = e.target.files[0] ? e.target.files[0].name : 'No file chosen';
            document.getElementById('resumeFileName').textContent = fileName;
        });

        document.getElementById('additionalDocs').addEventListener('change', function (e) {
            const fileCount = e.target.files.length;
            const fileName = fileCount > 0 ? `${fileCount} file(s) chosen` : 'No files chosen';
            document.getElementById('additionalFileName').textContent = fileName;
        });
        ////// career page script End ///////