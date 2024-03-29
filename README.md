# Django-React Note Editor App

Using Python and JavaScript to create a full-stack web application. We will be using Django for the backend & React for the frontend as well as implementing authentication using JWT tokens.

## Deployment

To deploy this project run, you will need to run the project in two different terminals, on the first one, on the root project, first you need to create an virtual environment, (you can use any name that you want for the name but in this case I'll name it env)

```bash
python -m venv env
```

Active it (Linux and Mac)

```bash
source env/bin/activate
```

once it activate it, install the packages of the backend

```bash
cd backend
pip install -r requirements.txt
```

you will need to do the corresponding migrations (you can configure your database connection, if not, by default it will be done in sqlite)

```bash
python manage.py migrate
```

at last, run the project

```bash
python manage.py runserver
```

On the other terminal we will configure the frontend parte, go to

```bash
cd frontend
```

install the packages

```bash
npm i
```

configure you .env file, at last run the frontend project

```bash
npm run dev
```

## Developed on

- Django
- React.js
- Tailwind
