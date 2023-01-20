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
  `\copy question from '/Users/andyma/Desktop/SDC_CSV/questions.csv' DELIMITER ',' CSV HEADER`
const answers =
  `\copy answer from '/Users/andyma/Desktop/SDC_CSV/answers.csv' DELIMITER ',' CSV HEADER`
const photo =
  `\copy photo from '/Users/andyma/Desktop/SDC_CSV/answers_photos.csv' DELIMITER ',' CSV HEADER`

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