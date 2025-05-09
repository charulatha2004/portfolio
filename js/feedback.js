document.getElementById('feedbackForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const rating = document.querySelector('input[name="rating"]:checked');
  
    if (!name || !email || !rating) {
      alert('Please fill in all required fields and rate the website.');
      return;
    }
  
    this.style.display = 'none';
    document.getElementById('thankYouMessage').style.display = 'block';
  
  });
  