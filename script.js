// @ts-nocheck
class AddressBook {
  contactList;
  totalPage;
  currentPage;
  currentPageList;

  constructor(contactList = []) {
    this.contactList = contactList;
    this.totalPage = Math.floor(contactList.length / 10);
    this.currentPage = 1;
    this.currentPageList = contactList.slice(0, 10);
  }

  updateTotalPage() {
    this.totalPage = Math.floor(this.contactList.length / 10);
  }

  handleChangePage(page) {
    this.currentPage = page;
    this.currentPageList = this.contactList.slice(
      (page - 1) * 10,
      (page - 1) * 10 + 10
    );
  }

  addContact(contact) {
    this.contactList.push(contact);
    this.updateTotalPage();
    this.handleChangePage(this.currentPage);
  }

  editContact(id, editedField) {
    this.contactList = this.contactList.map((contact) => {
      if (contact.id === id) {
        return { ...contact, ...editedField };
      }

      return contact;
    });
  }

  delteContact(idList) {
    this.contactList = this.contactList.filter(
      (contact) => !idList.includes(contact.id)
    );
    this.updateTotalPage();
    this.handleChangePage(1);
  }
}

const AddressBookEntity = new AddressBook();

const createContactForm = document.querySelector("#create-contact-form");
const openCreateModalButton = document.querySelector("#open-create-modal");
const closeModalButton = document.querySelector("#close-create-modal");
const contactListTableBody = document.querySelector("#contact-list-table-body");

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
      id: AddressBookEntity.contactList.length + 1,
    });
  }

  handleCancelModal();
  handleRefreshTableBody();
};

const handleRefreshTableBody = () => {
  contactListTableBody.innerHTML = AddressBookEntity.currentPageList
    .map((contact) => generateTRElement(contact))
    .join("");
};

const generateTRElement = (contact) =>
  `<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
    <td class="w-4 p-4">
      <div class="flex items-center">
        <input
          id="checkbox-table-search-${contact.id}"
          type="checkbox"
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label for="checkbox-table-search-1" class="sr-only">
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

handleRefreshTableBody();
createContactForm?.addEventListener("submit", handleSubmitForm);
openCreateModalButton?.addEventListener("click", handleCreateModal);
closeModalButton?.addEventListener("click", handleCancelModal);
