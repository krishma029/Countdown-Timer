document.getElementById('startButton').addEventListener('click', function() 
{
    const targetDate = new Date(document.getElementById('date').value).getTime();

    if (!targetDate)
   {
        alert("Please select a valid date and time.");
        return;
    }

    const countdownInterval = setInterval(function() 
  {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) 
    {
            clearInterval(countdownInterval);
            document.querySelector('.countdown-display').innerHTML = "Countdown Finished!";
            return;
     }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById('days').innerText = String(days).padStart(2, '0');
        document.getElementById('hours').innerText = String(hours).padStart(2, '0');
        document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
        document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');
    }, 1000);
});
