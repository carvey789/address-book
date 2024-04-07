// @ts-nocheck

const dummyDatas = [
  {
    id: 30,
    firstName: "Betty",
    lastName: "George",
    email: "resamod@ekdebgi.ug",
    phoneNumber: "(402) 311-5188",
    address: "1538 Kujno Court",
    category: "Friend",
    fullName: "Beety George",
  },
  {
    id: 29,
    firstName: "First B",
    lastName: "Last B",
    email: "jifajolo@elebaru.pf",
    phoneNumber: "(301) 934-4727",
    address: "1857 Lovij Square",
    category: "Co-Worker",
    fullName: "Edward Marshall",
  },
  {
    id: 28,
    firstName: "First C",
    lastName: "Last C",
    email: "evojukaz@ijgiowa.gg",
    phoneNumber: "(841) 319-9212",
    address: "923 Zola Trail",
    category: "Family",
    fullName: "Derrick Chandler",
  },
  {
    id: 27,
    firstName: "First D",
    lastName: "Last D",
    email: "te@wesmadi.zm",
    phoneNumber: "(218) 456-2557",
    address: "1654 Didic Lane",
    category: "Friend",
    fullName: "Jack Summers",
  },
  {
    id: 26,
    firstName: "First E",
    lastName: "Last E",
    email: "oremila@vir.rw",
    phoneNumber: "(551) 884-4029",
    address: "1991 Galo View",
    category: "Other",
    fullName: "Lillian Terry",
  },
  {
    id: 25,
    firstName: "First A6",
    lastName: "Last A6",
    email: "ja@zotiruz.mo",
    phoneNumber: "(550) 302-4668",
    address: "151 Usuro Heights",
    category: "Co-Worker",
    fullName: "Alejandro Schwartz",
  },
  {
    id: 24,
    firstName: "First B7",
    lastName: "Last B7",
    email: "wikwuwpak@mosukel.ac",
    phoneNumber: "(876) 855-9432",
    address: "591 Juzoc Park",
    category: "Family",
    fullName: "Leo Alvarado",
  },
  {
    id: 23,
    firstName: "First C8",
    lastName: "Last C8",
    email: "en@wow.zm",
    phoneNumber: "(706) 429-1227",
    address: "298 Zufe Key",
    category: "Friend",
    fullName: "Lina Hawkins",
  },
  {
    id: 22,
    firstName: "First D9",
    lastName: "Last D9",
    email: "salo@sindunpof.om",
    phoneNumber: "(705) 960-2825",
    address: "1264 Givmi Junction",
    category: "Other",
    fullName: "Rosetta Gibson",
  },
  {
    id: 21,
    firstName: "First E10",
    lastName: "Last E10",
    email: "cizlonap@retu.kz",
    phoneNumber: "(425) 901-3183",
    address: "1074 Wutsu Court",
    category: "Co-Worker",
    fullName: "Mayme Ball",
  },
  {
    id: 20,
    firstName: "First A11",
    lastName: "Last A11",
    email: "vemba@wujasmit.sc",
    phoneNumber: "(661) 469-7774",
    address: "662 Zofzos Point",
    category: "Family",
    fullName: "Marguerite Alvarez",
  },
  {
    id: 19,
    firstName: "First B12",
    lastName: "Last B12",
    email: "tafi@baake.kg",
    phoneNumber: "(337) 660-3809",
    address: "94 Lase Street",
    category: "Friend",
    fullName: "Rodney Cross",
  },
  {
    id: 18,
    firstName: "First C13",
    lastName: "Last C13",
    email: "vewzifco@elo.it",
    phoneNumber: "(332) 565-7132",
    address: "1652 Ohci Highway",
    category: "Other",
    fullName: "Roger Kelly",
  },
  {
    id: 17,
    firstName: "First D14",
    lastName: "Last D14",
    email: "ra@lut.tj",
    phoneNumber: "(885) 765-1163",
    address: "650 Acako Ridge",
    category: "Co-Worker",
    fullName: "Harold Simpson",
  },
  {
    id: 16,
    firstName: "First E15",
    lastName: "Last E15",
    email: "ne@portasib.lt",
    phoneNumber: "(922) 480-4573",
    address: "532 Punro Extension",
    category: "Family",
    fullName: "Edgar Schultz",
  },
  {
    id: 15,
    firstName: "First A16",
    lastName: "Last A16",
    email: "urohohti@papjog.ck",
    phoneNumber: "(259) 587-9815",
    address: "1755 Cadjaw Trail16",
    category: "Friend",
    fullName: "Mathilda Murphy",
  },
  {
    id: 14,
    firstName: "First B17",
    lastName: "Last B17",
    email: "wonva@wi.io",
    phoneNumber: "(325) 401-7806",
    address: "1922 Lota Circle",
    category: "Other",
    fullName: "Eunice King",
  },
  {
    id: 13,
    firstName: "First C18",
    lastName: "Last C18",
    email: "gonnuhpeg@bapjoh.va",
    phoneNumber: "(672) 688-9512",
    address: "516 Pimo Road",
    category: "Co-Worker",
    fullName: "Brent Tyler",
  },
  {
    id: 12,
    firstName: "First D19",
    lastName: "Last D19",
    email: "igivokmuj@dem.th",
    phoneNumber: "(852) 484-2348",
    address: "1947 Covza Loop",
    category: "Family",
    fullName: "Lillie Frazier",
  },
  {
    id: 11,
    firstName: "First E20",
    lastName: "Last E20",
    email: "katgevjo@damih.lr",
    phoneNumber: "(904) 317-2548",
    address: "1760 Zarvan Ridge",
    category: "Friend",
    fullName: "Ann Castillo",
  },
  {
    id: 10,
    firstName: "First B12",
    lastName: "Last B12",
    email: "gam@lumwa.lr",
    phoneNumber: "(985) 938-9604",
    address: "1940 Temod Street",
    category: "Other",
    fullName: "Jayden Barker",
  },
  {
    id: 9,
    firstName: "First B12",
    lastName: "Last B12",
    email: "les@duidoan.gy",
    phoneNumber: "(867) 860-4871",
    address: "1108 Tiulo Lane",
    category: "Co-Worker",
    fullName: "Warren Wilkerson",
  },
  {
    id: 8,
    firstName: "First B12",
    lastName: "Last B12",
    email: "refi@zac.ps",
    phoneNumber: "(934) 689-4455",
    address: "348 Ickej Junction",
    category: "Family",
    fullName: "Logan Peters",
  },
  {
    id: 7,
    firstName: "First B12",
    lastName: "Last B12",
    email: "mot@wahbop.gs",
    phoneNumber: "(213) 454-5447",
    address: "1062 Bebi Manor",
    category: "Friend",
    fullName: "Elmer Garcia",
  },
  {
    id: 6,
    firstName: "First B12",
    lastName: "Last B12",
    email: "ganego@hobsi.ss",
    phoneNumber: "(605) 732-7500",
    address: "1699 Noje Court",
    category: "Other",
    fullName: "Terry Haynes",
  },
  {
    id: 5,
    firstName: "First B12",
    lastName: "Last B12",
    email: "pun@sombu.bv",
    phoneNumber: "(389) 603-7422",
    address: "1543 Sabig Turnpike",
    category: "Co-Worker",
    fullName: "Todd Hines",
  },
  {
    id: 4,
    firstName: "First B12",
    lastName: "Last B12",
    email: "zewpic@hijkurre.im",
    phoneNumber: "(960) 679-2742",
    address: "253 Beho Terrace",
    category: "Family",
    fullName: "Lillian Vega",
  },
  {
    id: 3,
    firstName: "First B12",
    lastName: "Last B12",
    email: "gedpi@cumahhu.jo",
    phoneNumber: "(752) 765-3244",
    address: "315 Berja River",
    category: "Other",
    fullName: "Dorothy Fletcher",
  },
];

class AddressBook {
  contactList;
  totalPage;
  currentPage;
  currentPageList;
  toBeDeletedList;
  searchKey;
  currentEditedContactId;

  constructor(contactList = []) {
    this.contactList = contactList;
    this.totalPage = Math.ceil(contactList.length / 10)
      ? Math.ceil(contactList.length / 10)
      : 1;
    this.currentPage = 1;
    this.currentPageList = contactList.slice(0, 10);
    this.toBeDeletedList = [];
    this.searchKey = "";
    this.currentEditedContactId = null;
  }

  updateTotalPage() {
    const filteredList = this.contactList.filter((contact) =>
      contact.fullName.includes(this.searchKey)
    );
    this.totalPage = Math.ceil(filteredList.length / 10);
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
    this.contactList.unshift(contact);
    this.updateTotalPage();
    this.handleChangePage(this.currentPage);
  }

  addToBeDeleted(id) {
    this.toBeDeletedList.push(id);
  }

  getContact(id) {
    return this.contactList.filter((contact) => contact.id === id)[0];
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

const AddressBookEntity = new AddressBook(dummyDatas);

const createContactForm = document.querySelector("#create-contact-form");
const openCreateModalButton = document.querySelector("#open-create-modal");
const closeModalButton = document.querySelector("#close-create-modal");
const contactListTableBody = document.querySelector("#contact-list-table-body");
const deleteContactButton = document.querySelector("#delete-contact-button");
const checkboxAll = document.querySelector("#checkbox-all");
const searchBox = document.querySelector("#table-search-users");
const viewedData = document.querySelector("#viewed-data");
const totalData = document.querySelector("#total-data");
const pageList = document.querySelector("#page-list");

const handleCreateModal = () => {
  const modal = document.querySelector("#modal-overlay-bg");
  modal?.classList.replace("hidden", "block");
};

const handleCancelModal = () => {
  const modal = document.querySelector("#modal-overlay-bg");
  modal?.classList.add("hidden");
  clearFields();
  AddressBookEntity.currentEditedContactId = null;
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
    if (!AddressBookEntity.currentEditedContactId) {
      AddressBookEntity.addContact({
        firstName,
        lastName,
        category,
        phoneNumber,
        email,
        address,
        fullName: firstName + " " + lastName,
        id: AddressBookEntity.contactList.length
          ? AddressBookEntity.contactList[0].id + 1
          : 1,
      });
    } else {
      AddressBookEntity.editContact(AddressBookEntity.currentEditedContactId, {
        firstName,
        lastName,
        category,
        phoneNumber,
        email,
        address,
        fullName: firstName + " " + lastName,
      });
    }
  }

  AddressBookEntity.handleChangePage(AddressBookEntity.currentPage);
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

const handleClickPage = (e) => {
  const page = +e.target.getAttribute("data-page");
  AddressBookEntity.currentPage = page;
  AddressBookEntity.handleChangePage(page);
  handleRefreshTableBody();
};

const handleClickPrevPage = (e) => {
  const page = AddressBookEntity.currentPage - 1;
  AddressBookEntity.currentPage = page;
  AddressBookEntity.handleChangePage(page);
  handleRefreshTableBody();
};

const handleClickNextPage = (e) => {
  const page = AddressBookEntity.currentPage + 1;
  AddressBookEntity.currentPage = page;
  AddressBookEntity.handleChangePage(page);
  handleRefreshTableBody();
};

const handleRefreshTableBody = () => {
  contactListTableBody.innerHTML = AddressBookEntity.currentPageList
    .map((contact) => generateTRElement(contact))
    .join("");

  const allCheckboxeElements = document.querySelectorAll(
    "input[type=checkbox]"
  );

  const allEditButtons = document.querySelectorAll("#edit-button");

  allCheckboxeElements.forEach((checkbox) =>
    checkbox.addEventListener("change", handleClickCheckbox)
  );

  allEditButtons.forEach((editButton) =>
    editButton.addEventListener("click", handleClickEdit)
  );

  handleRefreshDeleteButton();
  handleRefreshTotalData();
  handleRefreshPagination();
};

const handleRefreshTotalData = () => {
  const fromNumber = (AddressBookEntity.currentPage - 1) * 10 + 1;
  const toNumber =
    (AddressBookEntity.currentPage - 1) * 10 +
    1 +
    (AddressBookEntity.currentPageList.length - 1);
  viewedData.innerText = `${fromNumber}-${toNumber}`;
  totalData.innerText = `${
    AddressBookEntity.contactList.filter((contact) =>
      contact.fullName.includes(AddressBookEntity.searchKey)
    ).length
  }`;
};

const handleRefreshPagination = () => {
  const isPrevEnable = AddressBookEntity.currentPage > 1;
  const isNextEnable =
    AddressBookEntity.currentPage < AddressBookEntity.totalPage;
  const pages = [];
  for (let i = 1; i <= AddressBookEntity.totalPage; i++) {
    pages.push(generatePageList(i, i === AddressBookEntity.currentPage));
  }

  if (isPrevEnable) {
    pages.unshift(`<li>
      <span id="prev-page" class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        Previous
      </span>
    </li>`);
  }

  if (isNextEnable) {
    pages.push(`<li>
      <span
        id="next-page"
        class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >Next</span
      >
    </li>`);
  }

  pageList.innerHTML = pages.join("");

  const pageButtons = document.querySelectorAll(".page");
  const prevPage = document.querySelector("#prev-page");
  const nextPage = document.querySelector("#next-page");

  pageButtons.forEach((button) =>
    button.addEventListener("click", handleClickPage)
  );

  prevPage?.addEventListener("click", handleClickPrevPage);
  nextPage?.addEventListener("click", handleClickNextPage);
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

const handleClickEdit = (e) => {
  const attributeId = +e.target.getAttribute("data-key");
  AddressBookEntity.currentEditedContactId = attributeId;
  const contact = AddressBookEntity.getContact(attributeId);

  const firstName = document.querySelector("#first_name");
  const lastName = document.querySelector("#last_name");
  const category = document.querySelector("#category");
  const phoneNumber = document.querySelector("#phone");
  const email = document.querySelector("#email");
  const address = document.querySelector("#address");

  firstName.value = contact.firstName;
  lastName.value = contact.lastName;
  category.value = contact.category;
  phoneNumber.value = contact.phoneNumber;
  email.value = contact.email;
  address.value = contact.address;

  handleCreateModal();
};

const clearFields = () => {
  const firstName = document.querySelector("#first_name");
  const lastName = document.querySelector("#last_name");
  const category = document.querySelector("#category");
  const phoneNumber = document.querySelector("#phone");
  const email = document.querySelector("#email");
  const address = document.querySelector("#address");

  firstName.value = "";
  lastName.value = "";
  category.value = "";
  phoneNumber.value = "";
  email.value = "";
  address.value = "";
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
      <span id="edit-button" data-key=${contact.id} class="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer">
        Edit
      </span>
    </td>
  </tr>`;

const generatePageList = (page, isActivePage = false) => {
  return `<li class="page ${
    isActivePage ? "cursor-none" : "cursor-pointer"
  }" data-page=${page}><span data-page=${page} class="${
    isActivePage
      ? "flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
      : "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
  }">${page}</span></li>`;
};

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
checkboxAll?.addEventListener("change", handleCheckAll);
searchBox?.addEventListener("keyup", debounce(handleSearchKey, 500));
