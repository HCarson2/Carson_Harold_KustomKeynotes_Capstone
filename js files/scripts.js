document.addEventListener("DOMContentLoaded", function () {
    // Select all subscription buttons
    const subscribeButtons = document.querySelectorAll(".subscribe-btn");

    subscribeButtons.forEach(button => {
        button.addEventListener("click", function () {
            const plan = this.getAttribute("data-plan");
            
            // Check if the button is already disabled (subscribed)
            if (this.disabled) return;
            
            // Confirmation alert
            const confirmSubscription = confirm(`Confirm subscription to the ${plan} plan?`);
            
            if (confirmSubscription) {
                this.textContent = "Already Subscribed";
                this.disabled = true;
                this.classList.add("btn-success"); // Change color to indicate activation
            }
        });
    });
});
