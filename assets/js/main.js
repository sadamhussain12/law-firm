    //  <!-- JavaScript for animations and interactions also for dropdowns start --> 
$(document).ready(function() {
    // Enable hover dropdown only for desktop (width > 991px)
    if ($(window).width() > 991) {
        $('.navbar .dropdown').hover(function() {
            $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
        }, function() {
            $(this).find('.dropdown-menu').first().stop(true, true).slideUp(200);
        });
    }
    
    // For mobile, rely on Bootstrap's default click behavior
    // No additional code needed - dropdown toggle will work on click
});
//  <!-- JavaScript for animations and interactions also for dropdowns End --> 


            // our legal service section javascript  for animation start
document.addEventListener('DOMContentLoaded', function() {
    // 1. Select all the elements we want to observe (the cards)
    const serviceCards = document.querySelectorAll('.card');

    // 2. Define the observer options
    const observerOptions = {
        root: null, // relative to the viewport
        // Triggers when the element enters the viewport, but 100px before the bottom edge
        rootMargin: '0px 0px -100px 0px', 
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    // 3. Define the function that runs when visibility changes
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const card = entry.target; 
                
                // Read the intended animation and delay from the data attributes
                const animationClass = card.getAttribute('data-animation');
                const delayClass = card.getAttribute('data-delay');

                // Add the animation and delay classes to start the animation
                card.classList.add(animationClass, delayClass);
                
                // Stop observing the element once the animation has been triggered
                observer.unobserve(card); 
            }
        });
    };

    // 4. Create and start the observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    serviceCards.forEach(card => {
        observer.observe(card);
    });
});
 // our legal service section javascript  for animation End


 //  About us section java script strat 
 document.addEventListener('DOMContentLoaded', function() {
            // Function to check if element is in viewport
            function isInViewport(element) {
                const rect = element.getBoundingClientRect();
                return (
                    rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
                    rect.bottom >= 0
                );
            }
            
            // Function to handle scroll animation
            function handleScrollAnimation() {
                const leftElements = document.querySelectorAll('.animate-left');
                const rightElements = document.querySelectorAll('.animate-right');
                
                leftElements.forEach(element => {
                    if (isInViewport(element) && !element.classList.contains('animated')) {
                        element.classList.add('animated');
                    }
                });
                
                rightElements.forEach(element => {
                    if (isInViewport(element) && !element.classList.contains('animated')) {
                        element.classList.add('animated');
                    }
                });
            }
            
            // Initial check on page load
            handleScrollAnimation();
            
            // Check on scroll
            window.addEventListener('scroll', handleScrollAnimation);
            
            // Optional: Check on resize as well
            window.addEventListener('resize', handleScrollAnimation);
        });
  //  About us section java script End 



//   about us page script strat 

  document.addEventListener('DOMContentLoaded', function() {
            // Function to check if element is in viewport
            function isInViewport(element) {
                const rect = element.getBoundingClientRect();
                return (
                    rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 &&
                    rect.bottom >= 0
                );
            }
            
            // Function to handle scroll animation
            function handleScrollAnimation() {
                const leftElements = document.querySelectorAll('.slide-from-left');
                const rightElements = document.querySelectorAll('.slide-from-right');
                const bottomElements = document.querySelectorAll('.slide-from-bottom');
                
                leftElements.forEach(element => {
                    if (isInViewport(element) && !element.classList.contains('visible')) {
                        element.classList.add('visible');
                    }
                });
                
                rightElements.forEach(element => {
                    if (isInViewport(element) && !element.classList.contains('visible')) {
                        element.classList.add('visible');
                    }
                });
                
                bottomElements.forEach(element => {
                    if (isInViewport(element) && !element.classList.contains('visible')) {
                        element.classList.add('visible');
                    }
                });
            }
            
            // Initial check on page load
            setTimeout(handleScrollAnimation, 100);
            
            // Check on scroll with throttling
            let scrollTimeout;
            window.addEventListener('scroll', function() {
                if (!scrollTimeout) {
                    scrollTimeout = setTimeout(function() {
                        scrollTimeout = null;
                        handleScrollAnimation();
                    }, 50);
                }
            });
            
            // Check on resize
            window.addEventListener('resize', handleScrollAnimation);
        });