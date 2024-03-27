
const getBookSave = () => {
    const bookStore = localStorage.getItem('book-store');
    if (bookStore) {
        return JSON.parse(bookStore);
    }
    return [];
}

const bookSave = id => {
    const booksStore = getBookSave();
    const exists = booksStore.find(book => book === id);
    if (!exists) {
        booksStore.push(id);
        localStorage.setItem('book-store', JSON.stringify(booksStore)); 
    }
}

export { getBookSave, bookSave };
