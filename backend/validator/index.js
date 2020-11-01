exports.userSignupValidator = (req, res, next) => {
   
    req.check('name', 'Name is required').notEmpty();
    req.check('email', "email must be between 3 to 32 characters")
        .matches(/.+\@.+\..+/)
        .withMessage("Email must contain @")
        .isLength({
            min: 4,
            max: 32
        });
    req.check('password', "Pasword is required").notEmpty();
    req.check("password").isLength({ min: 6 })
        .withMessage("Паролата трябва да съдържа поне 6 символа")
        .matches(/\d/)
        .withMessage("Паролата трябва да съдържа цифра");
       

    const errors = req.validationErrors();

    if (errors) {
        const firstError = errors.map(error => error.msg)[0];
        return res.status(400).json({ error: firstError });
    };
    next();
};