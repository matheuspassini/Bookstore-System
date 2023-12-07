
const runApplication = () => {
  const App = require('./App')
  const AuthorBuilder = require('./builders/AuthorBuilder')
  const BookBuilder = require('./builders/BookBuilder')
  const UserBuilder = require('./builders/UserBuilder')
  const OrderBuilder = require('./builders/OrderBuilder')

  const app = new App()


  let tolkienBuilder = new AuthorBuilder()
    .setName('J. R. R. Tolkien')
    .setNationality('British')
    .setBio('...')
    .build()

  app.createAuthor(tolkienBuilder)

  let riordanBuilder = new AuthorBuilder()
    .setName('Rick Riordan')
    .setNationality('American')
    .setBio('...')
    .build()

  app.createAuthor(riordanBuilder)

  const authors = app.getAuthors()


  let hobbitBuilder = new BookBuilder()
    .setTitle('O Hobbit')
    .setSynopsis('...')
    .setGenre('fantasy')
    .setPages(300)
    .setAuthor(authors[0])
    .setDescription('...')
    .setPrice(19.99)
    .setInStock(100)
    .build()

  let ladraoRaiosBuilder = new BookBuilder()
    .setTitle('O Ladrão de Raios')
    .setSynopsis('...')
    .setGenre('fantasy')
    .setPages(500)
    .setAuthor(authors[1])
    .setDescription('...')
    .setPrice(24.99)
    .setInStock(100)
    .build()

  let piramideVermelhaBuilder = new BookBuilder()
    .setTitle('A Pirâmide Vermelha')
    .setSynopsis('...')
    .setGenre('fantasy')
    .setPages(600)
    .setAuthor(authors[1])
    .setDescription('...')
    .setPrice(24.99)
    .setInStock(100)
    .build()

  app.createBook(hobbitBuilder)
  app.createBook(ladraoRaiosBuilder)
  app.createBook(piramideVermelhaBuilder)


  const books = app.getBooks()

  let userBuilder = new UserBuilder()
    .setName('Example')
    .setEmail('example@example.com')
    .setPassword('*****')

  app.createUser(userBuilder)

  const users = app.getUsers()

  app.showDatabase()

  const items = [
    {
      product: books[0],
      amount: 2
    },
    {
      product: books[1],
      amount: 1
    },
    {
      product: books[2],
      amount: 1
    }
  ]

  let orderBuilder = new OrderBuilder()
    .setItems(items)
    .setUser(users[0])
    .build()

  app.createOrder(orderBuilder)
  app.showDatabase()
}

runApplication()
