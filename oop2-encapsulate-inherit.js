/* 
1. Create the following classes:
    - Book class. It should have an author and publisher property.
    - Author class. It should have a name and books property.
    - Publisher class.  It should have an authors and books property.
    - Review class.  It should have a rating and user property.
    -Prevent the properties from being accessed by outside code, using the encapsulation concept of "private variables".  Create methods that return the values of these private variables in case other pieces of the code need to access the data of the 4 classes.  Also create methods that allow outside code to "set" new values for the properties on the classes, without directly manipulating the values themselves. 

    //your code here...*/

    class Book {
        #author
        #publisher
        constructor(author, publisher) {
          this.#author = author
          this.#publisher = publisher
        }
        getAuthor() {
          return this.#author;
        }
        getPublisher() {
          return this.#publisher;
        }
        setAuthor(inAuth) {
          this.#author = inAuth
        }
        setPublisher(inPub) {
          this.#publisher = inPub
        }
      }
      
      const newBook = new Book("George Martin", "Bantam Spectra");
      newBook.setAuthor("JK Rowling");
      newBook.setPublisher("Bloomsbury");
      console.log(newBook.getAuthor());
      console.log(newBook.getPublisher());
      
      class Author {
        #name
        #books
        constructor(name, books) {
          this.#name = name
          this.#books = books
        }
        getName() {
          return this.#name;
        }
        getBooks() {
          return this.#books;
        }
        setName(inName) {
          this.#name = inName
        }
        setBooks(inBooks) {
          this.#books = inBooks
        }
      }
      
      //methods
      
      class Publisher {
        #authors
        #books
        constructor(authors, books) {
          this.#authors = authors
          this.#books = books
        }
        getAuthor() {
          return this.#author;
        }
        getBooks() {
          return this.#books;
        }
        setAuthor(inAuthor) {
          this.#author = inAuthor
        }
        setBooks(inBooks) {
          this.#books = inBooks
        }
      }
      
      //methods
      
      class Review {
        #rating
        #user
        constructor(rating, user) {
          this.#rating = rating
          this.#user = user
        }
        getRating() {
          return this.#rating;
        }
        getUser() {
          return this.#user
        }
        setRating(inRating) {
          this.#rating = inRating
        }
        setUser(inUser) {
          this.#user = inUser
        }
      }
      
      //methods





2./* Create the following classes:
    - Umbrella class.  It should have a an organization name.  It should only have a single instance.  Umbrella is the "Parent Organization" e.g. Allegis Group
    - Company class. It should have a compnay name and # of employees.  Create at least 3 different companies that are children of the Umbrella Organization.  (e.g. TEKsystems, Aerotek, etc.)
    - Site class. It should have the name of the company, and the location of the site.  It is a child class that inherits from the Company class.  Create 3 sites for each company.
    - Employee class. It should have a employee name, job title, and salary properties. Create 10 employee instances: 1 CEO, 1 Manager, 1 Secretary, 2 Engineers, 1 Financial Officer, 1 Janitor, 1 Marketer, 1 HR Personnel, 1 Lawyer.  Feel free to add other employee roles at your own discretion.
    
    - For each class, add 2 properties and 2 methods to each.  The properties and methods should make sense, considering what the classes are supposed to be representing.



    //your code here...*/

    class Umbrella {
        constructor(orgName) {
          this.orgName = orgName
        }
      }
      
      class Company extends Umbrella {
        constructor(orgName, compName, employees) {
          super(orgName)
          this.compName = compName
          this.employees = employees
        }
        hire() {
          this.employees++
        }
        fire() {
          this.employees--
        }
      }
      
      const wandCompany = new Company("Diagon", "Ollivanders", 500);
      const broomCompany = new Company("Diagon", "Quality Quidditch Supplies", 300);
      const bookCompany = new Company("Diagon", "Flourish and Blotts", 1000);
      
      bookCompany.hire();
      console.log(bookCompany.employees)
      bookCompany.fire()
      console.log(bookCompany.employees)
      
      class Site extends Company {
        constructor(orgName, compName, employees, location, type) {
          super(orgName, compName, employees)
          this.location = location
          this.type = type
        }
        openSite() {
          console.log("Site is currently open");
        }
        closeSite() {
          console.log("Site is currently closed");
        }
      }
      
      const ollivandersOffice = new Site("Diagon", "Ollivanders", 500, "Diagon Alley", "Office");
      const ollivandersWarehouse = new Site("Diagon", "Ollivanders", 500, "Knockturn Alley", "Warehouse");
      const ollivandersRetail = new Site("Diagon", "Ollivanders", 500, "Hogsmeade", "Retail");
      ollivandersOffice.openSite();
      
      const quidditchOffice = new Site("Diagon", "Quality Quidditch Supplies", 300, "Diagon Alley", "Office");
      const quidditchWarehouse = new Site("Diagon", "Quality Quidditch Supplies", 300, "Knockturn Alley", "Warehouse");
      const quidditchRetail = new Site("Diagon", "Quality Quidditch Supplies", 300, "Hogsmeade", "Retail");
      quidditchOffice.closeSite();
      
      const flourishOffice = new Site("Diagon", "Flourish and Blotts", 1000, "Diagon Alley", "Office");
      const flourishWarehouse = new Site("Diagon", "Flourish and Blotts", 1000, "Knockturn Alley", "Warehouse");
      const flourishRetail = new Site("Diagon", "Flourish and Blotts", 1000, "Hogsmeade", "Retail");

      class Employee {
        constructor(name, title, salary) {
          this.name = name
          this.title = title
          this.salary = salary
        }
        clockIn() {
          console.log("Employee is clocked in.");
        }
        clockOut() {
          console.log("Employee is clocked out.");
        }
      }
      
      const empCEO = new Employee("Jamie", "CEO", 200000);
      const empManager = new Employee("John", "Manager", 100000);
      const empSecretary = new Employee("Hunter", "Secretary", 45000);
      empSecretary.clockIn();
      
      const empEngOne = new Employee("Sally", "Engineer", 65000);
      empEngOne.clockOut();
      
      const empEngTwo = new Employee("Jason", "Engineer", 40000);
      const empFinOff = new Employee("Heather", "Financial Officer", 150000);
      const empJanitor = new Employee("Mark", "Janitor", 30000);
      const empMarketer = new Employee("Chelsea", "Marketer", 60000);
      const empHR = new Employee("Beth", "HR Personnel", 40000);
      const empLawyer = new Employee("Bryan", "Lawyer", 90000);


/****************************************************************************************************************************************************************************************   
Bonus Exercise:

3. Building on Exercise 1, Do the following : 
- Create a Bookstore class.  It should contain a collection of various Book Instances.
- Each Book Instance should contain the Instances of the relavant Authors, Publishers, and Reviews.
- Each Publisher should contain Instances of the Authors that are affiliated with the relavant Publisher.  

Each Book instance should contain instances of the Authors, the Publishers, and the Reviews pertinent to each book.  This exercise is using the advanced encapsulation concept of "composition", reflecting a "HAS A" relationship.
*/



    //your code here...

    class Author {
        #name
        constructor(name) {
          this.#name = name
        }
        getName() {
          return this.#name
        }
        setName(inName) {
          this.#name = inName
        }
      }
      
      const georgeMartin = new Author("George Martin");
      const jkRowling = new Author("JK Rowling");
      const jrrTolkien = new Author("JRR Tolkien");
      const ursulaLeGuin = new Author("Ursula Le Guin");
      const neilGaiman = new Author("Neil Gaiman");
      const brandonSanderson = new Author("Brandon Sanderson");
      
      georgeMartin.getName();
      jkRowling.setName("J K Rowling");
      console.log(georgeMartin.getName());
      console.log(jkRowling.getName());
      
      class Publisher {
        #authors
        constructor(authors) {
          this.#authors = authors
        }
        getAuthors() {
          return this.#authors
        }
        setAuthors(inAuthors) {
          this.#authors = inAuthors
        }
      }
      
      const bantamSpectra = new Publisher([georgeMartin, jrrTolkien, ursulaLeGuin]);
      const bloomsbury = new Publisher([jkRowling, neilGaiman, brandonSanderson]);
      
      //methods
      
      class Review {
        #rating
        #user
        constructor(rating, user) {
          this.#rating = rating
          this.#user = user
        }
        getRating() {
          return this.#rating
        }
        getUser() {
          return this.#user
        }
        setRating(inRating) {
          this.#rating = rating
        }
        setUser(inUser) {
          this.#user = user
        }
      }
      
      const rating1 = new Review(5, "user1");
      const rating2 = new Review(3, "user2");
      const rating3 = new Review(1, "user3");
      const rating4 = new Review(3, "user4");
      const rating5 = new Review(4, "user5");
      const rating6 = new Review(2, "user6");
      const rating7 = new Review(1, "user7");
      const rating8 = new Review(5, "user8");
      const rating9 = new Review(4, "user9");
      const rating10 = new Review(3, "user10");
      const rating11 = new Review(2, "user11");
      const rating12 = new Review(1, "user12");
      
      class Book {
        #author
        #publisher
        #reviews
        #title
        constructor(title, author, publisher, reviews) {
          this.#title = title
          this.#author = author
          this.#publisher = publisher
          this.#reviews = reviews
        }
        getTitle() {
          return this.#title
        }
        getAuthor() {
          return this.#author
        }
        getPublisher() {
          return this.#publisher
        }
        getReviews() {
          return this.#reviews
        }
        setTitle(inTitle) {
          this.#title = inTitle
        }
        setAuthor(inAuthor) {
          this.#author = inAuthor
        }
        setPublisher(inPub) {
          this.#publisher = inPub
        }
        setReviews(inRev) {
          this.#reviews = inRev
        }
      }
      
      const aGameOfThrones = new Book("A Game of Thrones", georgeMartin, bantamSpectra, [rating1, rating2]);
      const harryPotter = new Book("Harry Potter", jkRowling, bloomsbury, [rating3, rating4]);
      const lordOfTheRings = new Book("Lord of the Rings", jrrTolkien, bantamSpectra, [rating5, rating6]);
      const aWizardOfEarthsea = new Book("A Wizard of Earthsea", ursulaLeGuin, bantamSpectra, [rating7, rating8]);
      const americanGods = new Book("American Gods", neilGaiman, bloomsbury, [rating9, rating10]);
      const theWayOfKings = new Book("The Way of Kings", brandonSanderson, bloomsbury, [rating11, rating12]);
      
      //methods
      
      class Bookstore {
        #shelf
        constructor(books) {
          this.#shelf = books
        }
        getShelf() {
          return this.#shelf
        }
        setShelf(inBooks) {
          this.#shelf = inBooks
        }
      }
      
      const corners = new Bookstore([aGameOfThrones, harryPotter, lordOfTheRings, aWizardOfEarthsea, americanGods, theWayOfKings]);
      
      //methods