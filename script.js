const handleClickCreateContact = () => {
  const modal = document.querySelector("#modal-overlay-bg");
  modal?.classList.replace("hidden", "block");
  console.log("abc");
};

const handleClickCancelModal = () => {
  const modal = document.querySelector("#modal-overlay-bg");
  modal?.classList.add("hidden");
};

document
  .querySelector("#create-contact")
  ?.addEventListener("click", handleClickCreateContact);

document
  .querySelector("#close-create-modal")
  ?.addEventListener("click", handleClickCancelModal);
