const shareButton = document.querySelector(".article-preview__share-button-container");
const shareButtonMobile = document.querySelector(".article-preview__share-icon--mobile");
const shareContainer = document.querySelector(".article-preview__share-container");
const shareIcon = document.querySelector(".article-preview__share-icon");

shareButton.addEventListener("click", () => {
    shareContainer.classList.toggle("hidden");
    shareButton.classList.toggle("article-preview__share-button-container--dark");
    shareIcon.classList.toggle("article-preview__share-icon--dark")
}); 

shareButtonMobile.addEventListener("click", e => {
    shareContainer.classList.toggle("hidden");
    shareButton.classList.toggle("hidden");
});