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