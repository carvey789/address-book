// @ts-nocheck
class AddressBook {
  contactList;
  totalPage;
  currentPage;
  currentPageList;
  toBeDeletedList;
  searchKey;

  constructor(
    contactList = [
      {
        id: 1,
        firstName: "First A",
        lastName: "Last A",
        email: "first@gmail.com",
        phoneNumber: "08111111111",
        address: "Jl A",
        category: "Friend",
        fullName: "Full A",
      },
      {
        id: 2,
        firstName: "First B",
        lastName: "Last B",
        email: "first@gmail.com",
        phoneNumber: "08111111111",
        address: "Jl A",
        category: "Friend",
        fullName: "Full B",
      },
      {
        id: 3,
        firstName: "First C",
        lastName: "Last C",
        email: "first@gmail.com",
        phoneNumber: "08111111111",
        address: "Jl A",
        category: "Friend",
        fullName: "Full C",
      },
      {
        id: 4,
        firstName: "First D",
        lastName: "Last D",
        email: "first@gmail.com",
        phoneNumber: "08111111111",
        address: "Jl A",
        category: "Friend",
        fullName: "Full D",
      },
      {
        id: 5,
        firstName: "First E",
        lastName: "Last E",
        email: "first@gmail.com",
        phoneNumber: "08111111111",
        address: "Jl A",
        category: "Friend",
        fullName: "Full E",
      },
    ]
  ) {
    this.contactList = contactList;
    this.totalPage = Math.floor(contactList.length / 10);
    this.currentPage = 1;
    this.currentPageList = contactList.slice(0, 10);
    this.toBeDeletedList = [];
    this.searchKey = "";
  }

  updateTotalPage() {
    const filteredList = this.contactList.filter((contact) =>
      contact.fullName.includes(this.searchKey)
    );
    this.totalPage = Math.floor(filteredList.length / 10);
  }

  handleChangePage(page) {
    const filteredList = this.contactList.filter((contact) =>
      contact.fullName.includes(this.searchKey)
    );
    this.currentPage = page;
    this.currentPageList = filteredList.slice(
      (page - 1) * 10,
      (page - 1) * 10 + 10
    );
  }

  addContact(contact) {
    this.contactList.push(contact);
    this.updateTotalPage();
    this.handleChangePage(this.currentPage);
  }

  addToBeDeleted(id) {
    this.toBeDeletedList.push(id);
  }

  editContact(id, editedField) {
    this.contactList = this.contactList.map((contact) => {
      if (contact.id === id) {
        return { ...contact, ...editedField };
      }

      return contact;
    });
  }

  deleteContact() {
    this.contactList = this.contactList.filter(
      (contact) => !this.toBeDeletedList.includes(contact.id)
    );
    this.clearToBeDeleted();
    this.updateTotalPage();
    this.handleChangePage(1);
  }

  removeToBeDeleted(toBeRemoveId) {
    this.toBeDeletedList = this.toBeDeletedList.filter(
      (id) => id !== toBeRemoveId
    );
  }

  clearToBeDeleted() {
    this.toBeDeletedList = [];
  }
}

const AddressBookEntity = new AddressBook();

const createContactForm = document.querySelector("#create-contact-form");
const openCreateModalButton = document.querySelector("#open-create-modal");
const closeModalButton = document.querySelector("#close-create-modal");
const contactListTableBody = document.querySelector("#contact-list-table-body");
const deleteContactButton = document.querySelector("#delete-contact-button");
const checkboxAll = document.querySelector("#checkbox-all");
const searchBox = document.querySelector("#table-search-users");

const handleCreateModal = () => {
  const modal = document.querySelector("#modal-overlay-bg");
  modal?.classList.replace("hidden", "block");
};

const handleCancelModal = () => {
  const modal = document.querySelector("#modal-overlay-bg");
  modal?.classList.add("hidden");
};

const handleSubmitForm = (e) => {
  e.preventDefault();

  const firstName = document.querySelector("#first_name").value;
  const lastName = document.querySelector("#last_name").value;
  const category = document.querySelector("#category").value;
  const phoneNumber = document.querySelector("#phone").value;
  const email = document.querySelector("#email").value;
  const address = document.querySelector("#address").value;

  if (firstName && lastName && category && phoneNumber && email && address) {
    AddressBookEntity.addContact({
      firstName,
      lastName,
      category,
      phoneNumber,
      email,
      address,
      fullName: firstName + " " + lastName,
      id: AddressBookEntity.contactList.length
        ? AddressBookEntity.contactList[
            AddressBookEntity.contactList.length - 1
          ].id + 1
        : 1,
    });
  }

  handleCancelModal();
  handleRefreshTableBody();
};

const handleClickCheckbox = (e) => {
  const attributeId = +e.target.getAttribute("data-key");
  const checked = e.target.checked;
  if (attributeId && checked) {
    AddressBookEntity.addToBeDeleted(attributeId);
  }

  if (
    attributeId &&
    !checked &&
    AddressBookEntity.toBeDeletedList.includes(attributeId)
  ) {
    AddressBookEntity.removeToBeDeleted(attributeId);
  }

  handleRefreshDeleteButton();
};

const handleRefreshTableBody = () => {
  contactListTableBody.innerHTML = AddressBookEntity.currentPageList
    .map((contact) => generateTRElement(contact))
    .join("");

  const allCheckboxeElements = document.querySelectorAll(
    "input[type=checkbox]"
  );

  allCheckboxeElements.forEach((checkbox) =>
    checkbox.addEventListener("change", handleClickCheckbox)
  );

  handleRefreshDeleteButton();
};

const handleDeleteContact = () => {
  AddressBookEntity.deleteContact();
  handleRefreshTableBody();
  handleRefreshDeleteButton();

  if (checkboxAll.checked) {
    checkboxAll.checked = false;
  }
};

const handleCheckAll = (e) => {
  const value = e.target.checked;

  if (!value) AddressBookEntity.clearToBeDeleted();

  const allCheckboxeElements = document.querySelectorAll(
    "input[type=checkbox]"
  );

  for (let i = 1; i < allCheckboxeElements.length; i++) {
    allCheckboxeElements[i].checked = value;

    const evt = new Event("change", { bubbles: true, cancelable: false });
    allCheckboxeElements[i].dispatchEvent(evt);
  }

  handleRefreshDeleteButton();
};

const handleRefreshDeleteButton = () => {
  if (AddressBookEntity.toBeDeletedList.length) {
    deleteContactButton.classList.replace("hidden", "inline-block");
  } else {
    deleteContactButton.classList.replace("inline-block", "hidden");
  }
};

const handleSearchKey = (e) => {
  const value = e.target.value;
  AddressBookEntity.searchKey = value;
  AddressBookEntity.updateTotalPage();
  AddressBookEntity.handleChangePage(1);
  handleRefreshTableBody();
  handleRefreshDeleteButton();
};

const generateTRElement = (contact) =>
  `<tr data-key=${contact.id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
    <td class="w-4 p-4">
      <div class="flex items-center">
        <input
          data-key=${contact.id}
          id="checkbox-table-search-${contact.id}"
          type="checkbox"
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label for="checkbox-table-search-${contact.id}" class="sr-only">
          checkbox
        </label>
      </div>
    </td>
    <th
      scope="row"
      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
    >
      ${contact.fullName}
    </th>
    <td class="hidden">${contact.id}</td>
    <td class="px-6 py-4">${contact.category}</td>
    <td class="px-6 py-4">${contact.phoneNumber}</td>
    <td class="px-6 py-4">${contact.email}</td>
    <td class="px-6 py-4">
      <a
        href="#"
        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
      >
        Edit
      </a>
    </td>
  </tr>`;

const debounce = (mainFunction, delay) => {
  let timer;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      mainFunction(...args);
    }, delay);
  };
};

handleRefreshTableBody();
handleRefreshDeleteButton();

createContactForm?.addEventListener("submit", handleSubmitForm);
openCreateModalButton?.addEventListener("click", handleCreateModal);
closeModalButton?.addEventListener("click", handleCancelModal);
deleteContactButton?.addEventListener("click", handleDeleteContact);
checkboxAll.addEventListener("change", handleCheckAll);
searchBox.addEventListener("keyup", debounce(handleSearchKey, 500));
