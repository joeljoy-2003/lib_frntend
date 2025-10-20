// allAPI.js
import commonAPI from "./commonAPI";
import BASEURL from "./serverurl";


// 1️⃣ Add a new book
export const addBookAPI = async (bookData) => {
  return await commonAPI("POST", `${BASEURL}/books`, bookData);
};

// 2️⃣ Get all books
export const getAllBooksAPI = async () => {
  return await commonAPI("GET", `${BASEURL}/books`);
};

// 3️⃣ Get single book by ID
export const getBookByIdAPI = async (id) => {
  return await commonAPI("GET", `${BASEURL}/books/${id}`);
};

// 4️⃣ Update book by ID
export const updateBookAPI = async (id, updatedBookData) => {
  return await commonAPI("PUT", `${BASEURL}/books/${id}`, updatedBookData);
};

// 5️⃣ Delete book by ID
export const deleteBookAPI = async (id) => {
  return await commonAPI("DELETE", `${BASEURL}/books/${id}`);
};
