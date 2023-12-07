const runApplication = () => {
  const App = require('./App')
  const AuthorBuilder = require('./builders/AuthorBuilder')
  const BookBuilder = require('./builders/BookBuilder')
  const UserBuilder = require('./builders/UserBuilder')
  const OrderBuilder = require('./builders/OrderBuilder')

  const app = new App()


  let tolkienBuilder = new AuthorBuilder('J. R. R. Tolkien', 'British', '...')
  app.createAuthor(tolkienBuilder)

  let riordanBuilder = new AuthorBuilder('Rick Riordan', 'American', '...')
  app.createAuthor(riordanBuilder)

  const authors = app.getAuthors()


  let hobbitBuilder = new BookBuilder('O Hobbit', '...', 'fantasy', 300, authors[0], '...', 19.99, 100)
  let sociedadeAnelBuilder = new BookBuilder('A Sociedade do Anel', '...', 'fantasy', 400, authors[0], '...', 24.99, 100)
  let ladraoRaiosBuilder = new BookBuilder('O Ladrão de Raios', '...', 'fantasy', 500, authors[1], '...', 24.99, 100)
  let piramideVermelhaBuilder = new BookBuilder('A Pirâmide Vermelha', '...', 'fantasy', 600, authors[1], '...', 24.99, 100)

  app.createBook(hobbitBuilder)
  app.createBook(sociedadeAnelBuilder)
  app.createBook(ladraoRaiosBuilder)
  app.createBook(piramideVermelhaBuilder)


  const books = app.getBooks()

  let userBuilder = new UserBuilder('Example', 'example@example.com', '*****')
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
      product: books[3],
      amount: 1
    }
  ]

  let orderBuilder = new OrderBuilder(items, users[0])
  app.createOrder(orderBuilder)

  app.showDatabase()
}

runApplication()
