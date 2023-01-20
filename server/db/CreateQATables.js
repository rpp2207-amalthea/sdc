const {Client} = require ('pg')
const client = new Client({
  database: 'questionsandanswers',
  user: 'andyma',
  password: ''

})
 client.connect()
  .then (() => console.log('connected'))
  .catch((err) => console.error(`connection error ${err.stack}`))

  const execute = async (query) => {
    try {
        await client.query(query);  // sends queries
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    }
};

const question =
  `CREATE TABLE IF NOT EXISTS question (
    id INT,
    product_id INT,
    body VARCHAR(250),
    date_written BIGINT,
    asker_name VARCHAR(250),
    asker_email VARCHAR(250),
    reported BOOLEAN,
    helpful INT,
    PRIMARY KEY(id)
  )`

const answers =
    `CREATE TABLE IF NOT EXISTS answer (
      id INT,
      question_id INT,
      body VARCHAR(250),
      date_written BIGINT,
      answerer_name VARCHAR(250),
      answerer_email VARCHAR(250),
      reported BOOLEAN,
      helpful INT,
      PRIMARY KEY(id),
      FOREIGN KEY (question_id) REFERENCES question(id)
    )`
const photo =
      `CREATE TABLE IF NOT EXISTS photo (
        id INT,
        answer_id INT,
        url TEXT,
        FOREIGN KEY (answer_id) REFERENCES answer(id)
      )`

execute(question)
  .then ((result) => {
    if(result) {
      console.log(`question table created`);

    }
    return execute(answers);
  })
  .then((result) => {
    if(result) {
      console.log(`answers table created`);
    }
   return execute(photo);
   })
  .then((result) => {
     if(result) {
      console.log(`photo table created`);
     }
     client.end;
   })
  .catch((err) => {
    console.log(`err is increating tables : ${err.stack}`);
  })