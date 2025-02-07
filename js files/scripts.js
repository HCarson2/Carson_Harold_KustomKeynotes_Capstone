document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".subscribe-btn");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const plan = this.getAttribute("data-plan");
            if (!this.disabled) {
                alert(`You have selected the ${plan} plan.`);
                this.innerText = "Subscribed";
                this.classList.remove("btn-primary", "btn-danger");
                this.classList.add("btn-secondary");
                this.disabled = true;
            }
        });
    });
});