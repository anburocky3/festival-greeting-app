const form = document.querySelector("form#greeterForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  console.dir(e.target[0]);

  window.location.href = "/festival-greeting-app/greeting.html";
  // TODO: Form-validations on v2.
  //   if(form)

  console.log("Form submitting happened!");
});
