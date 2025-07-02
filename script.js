document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");
    const confirmation = document.getElementById("confirmation");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Предотвращаем отправку формы

        const firstName = form.elements["firstName"].value;
        confirmation.textContent = `Thank you for registering, ${firstName}!`;
        confirmation.classList.remove("hidden");

        form.reset(); // Очищаем форму
    });
});

