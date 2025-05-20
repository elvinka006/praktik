// Обработчики для окна входа
const authModal = document.getElementById("authModal");
const authBtn = document.getElementById("authBtn");
const authClose = authModal.getElementsByClassName("close")[0];

authBtn.onclick = function () {
  authModal.style.display = "block";
};

authClose.onclick = function () {
  authModal.style.display = "none";
};

// Обработчики для окна комментариев
const commentsModal = document.getElementById("commentsModal");
const commentsBtn = document.getElementById("commentsBtn");
const commentsClose = commentsModal.getElementsByClassName("close")[0];

commentsBtn.onclick = function () {
  commentsModal.style.display = "block";
};

commentsClose.onclick = function () {
  commentsModal.style.display = "none";
};

// Закрытие при клике вне окна
window.onclick = function (event) {
  if (event.target == authModal) {
    authModal.style.display = "none";
  }
  if (event.target == commentsModal) {
    commentsModal.style.display = "none";
  }
};

// Подсветка комментариев
document.querySelectorAll(".comment").forEach((comment) => {
  comment.addEventListener("focus", function () {
    this.style.borderColor = "#70C05B";
  });

  comment.addEventListener("blur", function () {
    this.style.borderColor = "#e0e0e0";
  });
});
