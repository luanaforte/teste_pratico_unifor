const initFluxogramasCarousel = () => {
  const carousel = document.getElementById('fluxogramasCarousel')
  if (!carousel) return
  
  if (bootstrap.Carousel.getInstance(carousel)) {
    bootstrap.Carousel.getInstance(carousel).dispose()
  }
  
  const prevButton = carousel.querySelector('.primary-navigation button:first-child')
  const nextButton = carousel.querySelector('.primary-navigation button:last-child')
  const slider = new bootstrap.Carousel(carousel, {
    interval: 0,       
    pause: 'hover',    
    ride: false,      
    wrap: true,        
    keyboard: false    
  })
  
  slider._config.interval = 0
  slider.pause()
  prevButton.setAttribute('aria-label', 'Slide anterior')
  nextButton.setAttribute('aria-label', 'Próximo slide')
  
  prevButton.addEventListener('click', () => {
    slider.prev()
    slider.pause()
  });
  
  nextButton.addEventListener('click', () => {
    slider.next()
    slider.pause()
  })
  
  carousel.removeAttribute('data-bs-ride')
  
  console.log('Carrossel inicializado com navegação apenas por botões')
}

initFluxogramasCarousel()