FAQ Management API with Multi-language Support
This is a Node.js-based REST API for managing FAQs with multi-language support. It allows users to store FAQs in different languages, provides a WYSIWYG editor for the answers, and implements caching for fast response times. The API supports Google Translate for automatic translations and Redis for efficient caching.

Table of Contents
Installation
API Usage
Get FAQs
Create FAQ
Features
Technologies Used
Testing
Git Usage
Docker Support
Deployment
Contributing
License
Installation
Follow these steps to set up and run the project locally:

Clone the repository:

bash
Copy
Edit
git clone https://github.com/yourusername/faq-management-api.git
Navigate to the project directory:

bash
Copy
Edit
cd faq-management-api
Install dependencies: Make sure you have Node.js installed. Then, run:

bash
Copy
Edit
npm install
Set up environment variables: Create a .env file in the root directory and add the following variables:

env
Copy
Edit
MONGODB_URI=mongodb://localhost:27017/faq_db
REDIS_HOST=127.0.0.1
REDIS_PORT=6379
GOOGLE_API_KEY=your-google-api-key
Start the application: Run the application using:

bash
Copy
Edit
npm start
The server will be running at http://localhost:5000.

API Usage
Get FAQs
You can fetch the list of FAQs in different languages by providing the lang query parameter. If no language is specified, it defaults to English.

GET Request:

bash
Copy
Edit
GET /api/faqs?lang=en
GET /api/faqs?lang=hi
GET /api/faqs?lang=bn
Response: A list of FAQs with their questions and answers in the specified language.
Create FAQ
To add a new FAQ, make a POST request to the /api/faqs endpoint with the FAQ data.

POST Request:

bash
Copy
Edit
POST /api/faqs
Body (JSON):

json
Copy
Edit
{
  "question": "What is Node.js?",
  "answer_en": "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
  "answer_hi": "Node.js एक JavaScript रनटाइम है जो क्रोम के V8 जावास्क्रिप्ट इंजन पर आधारित है।",
  "answer_bn": "Node.js হল একটি জাভাস্ক্রিপ্ট রানটাইম যা ক্রোমের V8 জাভাস্ক্রিপ্ট ইঞ্জিনে তৈরি।"
}
Response: The newly created FAQ object.
Features
Multi-language Support: FAQs can be stored and fetched in multiple languages (English, Hindi, Bengali, etc.).
WYSIWYG Editor: The FAQ answers can be formatted using a rich-text editor, providing a user-friendly experience for admins.
Caching with Redis: Translations and FAQs are cached to improve response time and reduce database queries.
Google Translate Integration: Automatically translate FAQ questions and answers using the Google Translate API during object creation.
RESTful API: Easily interact with the FAQ data through a simple REST API.
Efficient API Responses: Pre-translate FAQs to avoid unnecessary calls to the translation service, improving performance.
Technologies Used
Node.js: JavaScript runtime for the server.
Express: Web framework for building the API.
MongoDB: Database for storing FAQs.
Redis: Caching layer to store translated FAQs and improve performance.
Google Translate API: For automatic translations of FAQs.
Mongoose: ODM for MongoDB to model the FAQ schema.
ioredis: Redis client for Node.js.
Mocha & Chai: For unit testing the API.
Body-Parser: Middleware for parsing JSON bodies.
CORS: Middleware to enable Cross-Origin Resource Sharing.
Testing
To ensure the correctness of the API, we have written unit tests using Mocha and Chai.

Run Tests
To run the tests, use the following command:

bash
Copy
Edit
npm test
Git Usage
Commit Messages
We follow Conventional Commit Messages to maintain a clean commit history:

feat: Add multilingual FAQ model
fix: Fix translation caching mechanism
docs: Update README with API examples
chore: Update dependencies
Docker Support
We have included a Dockerfile and docker-compose.yml to allow easy containerization of the application.

Build and Run Docker Containers
Build the Docker image:

bash
Copy
Edit
docker-compose build
Start the containers:

bash
Copy
Edit
docker-compose up
The app will be available at http://localhost:5000.

Deployment
You can deploy the app to platforms like Heroku or AWS for production use.

Heroku Deployment
Push the code to a GitHub repository.
Link the repository to Heroku for automatic deployment.
Set the environment variables (MONGODB_URI, REDIS_HOST, etc.) in the Heroku dashboard.
Deploy and visit the Heroku app.
AWS Deployment
Set up an EC2 instance with Node.js and Redis installed.
SSH into the EC2 instance and pull the project repository.
Install dependencies and set up environment variables.
Start the server using npm start and access it via the public IP.
Contributing
We welcome contributions to improve the project! Please follow these guidelines:

Fork the repository.
Create a new branch (git checkout -b feature-name).
Make your changes and commit them (git commit -m 'feat: description').
Push to your forked repository (git push origin feature-name).
Submit a pull request with a description of your changes.