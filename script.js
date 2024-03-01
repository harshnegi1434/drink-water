document.addEventListener("DOMContentLoaded", function() {
    const goal = 2000; 
    let consumed = 0;

    const sizeDiv = document.getElementById('size');
    const options = document.querySelectorAll('.option');
    const percentageParagraph = document.getElementById('percentage'); 
    const remainedParagraph = sizeDiv.querySelector('p'); 

    options.forEach(option => {
        option.addEventListener('click', function() {
            const isClicked = option.classList.contains('clicked');
            if (!isClicked && consumed < goal) {
                consumed += 250; 
                const percentage = (consumed / goal) * 100;
                const remained = ((goal - consumed) / 1000).toFixed(2); 
                sizeDiv.querySelector('h2').textContent = `${remained} L`; 
                updateProgress(percentage);
                option.classList.add('clicked');
            } else if (isClicked) {
                consumed -= 250; 
                const percentage = (consumed / goal) * 100;
                const remained = ((goal - consumed) / 1000).toFixed(2); 
                sizeDiv.querySelector('h2').textContent = `${remained} L`; 
                updateProgress(percentage);
                option.classList.remove('clicked');
            }
            
            if (consumed === goal) {
                sizeDiv.querySelector('h2').textContent = "Goal Achieved!";
                sizeDiv.querySelector('h2').style.textAlign = "center"; 
                remainedParagraph.textContent = ""; 
            } else {
                sizeDiv.querySelector('h2').style.textAlign = ""; 
                remainedParagraph.textContent = "Remained"; 
            }
        });
    });

    function updateProgress(percentage) {
        percentageParagraph.textContent = `${percentage.toFixed(1)}%`;
        percentageParagraph.style.fontSize = '24px';
        const blueHeight = percentage / 100 * (sizeDiv.clientHeight);
        sizeDiv.querySelector('.blue-fill').style.height = `${blueHeight}px`;
        sizeDiv.querySelector('.blue-fill').style.backgroundColor = 'rgb(100, 206, 255)'; 
    }
});
