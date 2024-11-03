import * as SQLite from 'expo-sqlite/next';

let db: SQLite.SQLiteDatabase;

export const initDb = async () => {
    db = await SQLite.openDatabaseAsync('TodoDatabase_v1');

    await db.execAsync(`
PRAGMA journal_mode = WAL;
CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY NOT NULL, value TEXT NOT NULL, points INTEGER);

`);
}

// INSERT INTO tasks (value, points, complete) VALUES ('Fix performance', 1);
// INSERT INTO tasks (value, points, complete) VALUES ('Add auth', 10);
// INSERT INTO tasks (value, points, complete) VALUES ('Change button color', 789);


export const getTasks = async ()=> {
    if(!db) {
        return
    }
    const allRows = await db.getAllAsync('SELECT * FROM tasks123');
    // for (const row of allRows) {
    // console.log(row.id, row.value, row.points);
    // }
    return allRows;
}

export const setTaskStatus = async (id: number, complete: boolean) => {
    await db.runAsync('UPDATE tasks SET complete = ? WHERE id = ?', complete, id); 

}