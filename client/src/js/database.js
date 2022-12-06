import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => { 
  console.error('putDb not implemented');
// console.log(content);
const jDb = await openDB('jate', 1);
  const tx = jDb.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const req = store.put({ content });
  const res = await req;
  console.log('data saved!', res);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => { 
console.error('getDb not implemented');
console.log('getting all data from db');
const jDb = await openDB('jate', 1);
const tx = jDb.transaction('jate', 'readonly');
const store = tx.objectStore('jate');
const req = store.getAll();
const res = await req;
console.log('res.value', res);
return res;
};

initdb();
