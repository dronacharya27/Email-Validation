# Email Validation Project

This project is aimed at validating whether an email address exists on the internet or not. It utilizes Django for the backend and React for the frontend.

## Features

- Validates email addresses to check if they exist.
- Django backend for handling requests and processing.
- React frontend for a user-friendly interface.

## Installation

To run this project locally, follow these steps:

1. Clone this repository to your local machine.

```bash
git clone https://github.com/dronacharya27/Email-Validation
```
2. Navigate to the backend directory.
```bash
cd auth_module
```

3. Install the required Python dependencies.
```bash
pip install -r requirements.txt
```

4. Migrate the database.
```bash
python manage.py migrate
```

5. Start the Django development server.
```bash
python manage.py runserver
```

6. Open another terminal window and navigate to the frontend directory.
```bash
cd email_validation
```

7. Install the required Node.js dependencies.
```bash
npm install
```

8. Start the React development server.
```bash
npm run dev
```

9. Open your web browser and navigate to `http://localhost:5173` to access the application.

## Usage

1. Enter the email address you want to validate in the provided input field.
2. Click on the "Validate" button.
3. Wait for the validation process to complete.
4. View the result displayed on the screen indicating whether the email exists or not.

## Contributing

Contributions are welcome! Please feel free to fork this repository and submit pull requests to contribute new features, improvements, or fixes.

## License

This project is licensed under the [MIT License](LICENSE).



