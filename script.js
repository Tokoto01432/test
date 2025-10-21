
window.addEventListener('DOMContentLoaded', function() {
  const voteForm = document.getElementById('voteForm');
  const resultsContainer = document.getElementById('resultsContainer');

  
  if (voteForm) {
    voteForm.addEventListener('submit', function(event) {
      event.preventDefault();

      const voterID = document.getElementById('voterID').value.trim();
      const candidate = document.getElementById('candidate').value;
      const time = new Date().toLocaleString();

      if (!voterID || !candidate) {
        alert("Please fill in all fields.");
        return;
      }

      
      let votes = JSON.parse(localStorage.getItem('votesList')) || [];

      
      votes.push({ voterID, candidate, time });

      
      localStorage.setItem('votesList', JSON.stringify(votes));

      alert("✅ Your vote has been recorded successfully!");
      voteForm.reset();
    });
  }

  
  if (resultsContainer) {
    const votes = JSON.parse(localStorage.getItem('votesList')) || [];
    if (votes.length === 0) {
      resultsContainer.textContent = "(No votes recorded yet)";
    } else {
      resultsContainer.innerHTML = "";
      votes.forEach((vote, index) => {
        const p = document.createElement("p");
        p.textContent = `${index + 1}. Voter ID: ${vote.voterID} | Candidate: ${vote.candidate} | Time: ${vote.time}`;
        resultsContainer.appendChild(p);
      });
    }
  }
});
