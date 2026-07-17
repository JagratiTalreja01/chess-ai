(() => {
  "use strict";

  // Replace this placeholder with your actual Calendly event URL.
  const CALENDLY_URL = "https://calendly.com/";

  const scheduleButton = document.getElementById("schedule-match");
  const currentYear = document.getElementById("current-year");
  const usernameInput = document.getElementById("chess-username");
  const ratingInput = document.getElementById("chess-rating");

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  if (!scheduleButton) {
    return;
  }

  scheduleButton.href = CALENDLY_URL;

  scheduleButton.addEventListener("click", () => {
    const platform =
      document.querySelector('input[name="platform"]:checked')?.value ||
      "Chess.com";

    const username = usernameInput?.value.trim() || "";
    const rating = ratingInput?.value.trim() || "";

    sessionStorage.setItem(
      "drjChessChallenge",
      JSON.stringify({
        platform,
        username,
        rating
      })
    );
  });
})();
