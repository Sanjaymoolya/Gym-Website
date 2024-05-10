document.addEventListener("DOMContentLoaded", function() {
    const teamMembers = document.querySelectorAll('.team-member');

    // Add click event to each team member card
    teamMembers.forEach(member => {
        member.addEventListener('click', function() {
            // Toggle class to show/hide details on click
            this.classList.toggle('active');
        });
    });

    // Add hover effect to each team member card
    teamMembers.forEach(member => {
        member.addEventListener('mouseenter', function() {
            // Add shadow effect on mouse enter
            this.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.2)';
        });

        member.addEventListener('mouseleave', function() {
            // Remove shadow effect on mouse leave
            this.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
        });
    });
});
