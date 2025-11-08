document.addEventListener("DOMContentLoaded", () => {
  const travelList = document.getElementById("travel-list");
  if (travelList) {
    const travels = [
      { name: "파리", image: "images/paris.jpg" },
      { name: "도쿄", image: "images/tokyo.jpg" },
      { name: "서울", image: "images/seoul.jpg" },
    ];

    travels.forEach((t) => {
      const card = document.createElement("div");
      card.className = "travel-card";
      card.innerHTML = `
        <img src="../${t.image}" alt="${t.name}" style="width:100%; border-radius:10px;">
        <h3>${t.name}</h3>
      `;
      travelList.appendChild(card);
    });
  }

  // 회원가입/로그인 예시 이벤트
  const signupForm = document.getElementById("signup-form");
  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      alert(`회원가입 완료!\n이메일: ${email}\n비밀번호: ${password}`);
    });
  }

  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("login-email").value;
      alert(`환영합니다, ${email}님!`);
    });
  }
});
