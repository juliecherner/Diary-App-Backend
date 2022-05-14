# Backend of Personal Diary Project

# Backend functionality list:

- get a list of all todos
- add new todo to "in progress list"
- edit fields of todos, for example:
  - edit the text of todo (that is in progress list)
  - move todo to "delete list"
  - move todo to "done list"
  - move todo to "postponed list"
- get random advice
- get a list of all advice
- add advice
- delete advice
- delete all 4 lists
- delete all lists except "in progress list"

# Technologies:

- Node.js
- Express.js
- MongoDB
- Mongoose
- Atlas

# Schemas

2 schemas were created for models:

- for advice

```js
const adviceShema = new mongoose.Schema({
  text: { type: String, unique: true, required: true, trim: true },
});
```

- for todos

```js
const todoSchema = new mongoose.Schema({
  text: {
    type: String,
    unique: true,
    trim: true,
  },
  date: { type: Date, default: Date.now },
  list: {
    type: String,
    default: "inProgress",
  },
});
```

# Deployment

Application is deployed [on Heroku:](https://personal-diary-app-backend.herokuapp.com/)
