
document.addEventListener("DOMContentLoaded", function () {
  // Highlight the current page in the navigation.
  const currentPage =
    window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll("nav a").forEach(function (link) {
    if (link.getAttribute("href") === currentPage) {
      link.setAttribute("aria-current", "page");
    }
  });

  // Prevent selection of dates in the past.
  const dateInput = document.getElementById("date");

  if (dateInput) {
    const today = new Date();
    const localToday = [
      today.getFullYear(),
      String(today.getMonth() + 1).padStart(2, "0"),
      String(today.getDate()).padStart(2, "0")
    ].join("-");

    dateInput.min = localToday;
  }

  // Demo appointment request.
  const bookingForm = document.getElementById("booking-form");
  const bookingMessage = document.getElementById("booking-message");

  if (bookingForm && bookingMessage) {
    bookingForm.addEventListener("submit", function (event) {
      event.preventDefault();

      if (!bookingForm.checkValidity()) {
        bookingForm.reportValidity();
        return;
      }

      const customerName =
        document.getElementById("full-name").value.trim();

      bookingMessage.textContent =
        "Thank you, " + customerName +
        "! Your demo request has been checked. " +
        "This is a preview only; no appointment has been sent or confirmed.";

      bookingMessage.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    });
  }
});
