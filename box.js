document.querySelector('.panel').addEventListener('mouseenter', function() {
    this.style.height = '180px';
    this.style.transform = 'scale(1)';
    this.style.color='red';
});

document.querySelector('.panel').addEventListener('mouseleave', function() {
    this.style.height = '100px';
    this.style.transform = 'scale(1)';
    this.style.color='white';
    
});

