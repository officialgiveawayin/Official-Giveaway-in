// Simple form validation and submission handling
document.getElementById('entry-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    const name = document.getElementById('name').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const upiId = document.getElementById('upi-id').value.trim();
    
    if (!name || !mobile || !upiId) {
        alert('Please fill in all fields.');
        return;
    }
    
    // Basic mobile number validation (Indian format)
    const mobileRegex = /^[6-9]\d{9}$/;
    if (!mobileRegex.test(mobile)) {
        alert('Please enter a valid 10-digit mobile number starting with 6-9.');
        return;
    }
    
    // Simulate submission (in a real app, send to server)
    alert('Thank you for entering! Your entry has been submitted. Winner will be announced on February 28, 2026.');
    
    // Reset form
    document.getElementById('entry-form').reset();
});

// CTA button scrolls to entry form
document.getElementById('cta-button').addEventListener('click', function() {
    document.getElementById('entry').scrollIntoView({ behavior: 'smooth' });
});
const drawTime = new Date("2026-02-28T18:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = drawTime - now;

  if (diff <= 0) {
    document.getElementById("countdown").innerText =
      "Draw closed. Winner will be announced soon.";
    return;
  }

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  document.getElementById("countdown").innerText =
    `Draw ends in: ${d}d ${h}h ${m}m ${s}s`;
}, 1000);
