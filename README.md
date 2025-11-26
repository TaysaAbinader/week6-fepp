# Iteration6
### 2a. What is the purpose of userSchema.statics.login in userModel.js?.
- userSchema.statics.login is a static method to encapsulate the validation or lets say all login logic inside the user model.

---
### 2b. Compare User.findOne({ email }) to this.findOne({ email }). When and why do we use this instead of the model's name?
- User.findOne({email}) here User refers to the imported Mongoose model and normal usage in route controllers.
- this.findone({email}) here, this refers to the model that the schema is attached to and also it avoids circulart dependencies and keeps method genric.

---
### 2c. Why is bcrypt imported in userController.js and not in userModel.js in this version?
- Because all logics are done inside the userControllers.js.

### 3. Discuss which approach you plan to use for your project and explain why.
- May be we will use login logic into the controller then the model will be simple ontaining only schema.


# Iteration 7 – Refactoring signupUser Controller

1. What is the purpose of userSchema.statics.signup in userModel.js?

userSchema.statics.signup is a static method that contains all the logic required to register a new user. It handles:

- Validating required fields

- Checking if the email is properly formatted

- Ensuring the password is strong

- Checking if the email already exists

- Hashing the password

- Creating the user in the database

This keeps all signup logic centralized inside the model, reducing duplication and improving clarity.

2. What is the difference between User.create({ ... }) and this.create({ ... }) inside static methods?

Inside a schema static method this.create({ email, password: hash }) is equivalent to:

User.create({ email, password: hash })


this refers to the model the schema belongs to.
Using this.create avoids needing to reference the model by name, which makes the code more flexible and avoids tight coupling.

3. Why is validator imported in userController.js and not in userModel.js in the controller-centric version?

In the controller-centric version, validation is performed directly inside the controller:

if (!validator.isEmail(email)) throw Error("Email not valid");


Since validation logic lives in the controller, validator must be imported there.

In the model-based version, validation moves into the schema static methods, so validator would be imported in the model instead.

4. Which approach will we use for our project and why?

We decided to use the model-based approach because it promotes a better separation of concerns.
All authentication logic stays inside the model, while the controllers become cleaner and easier to maintain. This approach also scales better as the project grows and improves testability.
