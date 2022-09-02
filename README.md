# A Job Recruitment Website Built with React and Redux. 
## Created by: Imtiaz, Nazmul, Sajal, Kiron, Arefin, and Shawon. <br> <br>

# Project URL  –  [Job OnBoard](https://job-onboard.web.app)

## Project Description  
#### Our motivation for this app was to make it easier for applicants to apply for jobs, and make it easier for recruiters to schedule interviews with applicants. Overall our application’s main features are to create jobs, see your job postings, see applicants to your jobs,  allow applicants to apply to jobs, and allow applicants to see their job applications. Below, we will explain the workflow of our application.
#### On the landing page of our application, the user is prompted to sign in. If they don’t have an account, they can visit the sign-up page and sign up. And, this is for the recruiters. <br> <br> 
#### Any visitor can click and go through the “Find Job” page by clicking the button on the navbar.  On this page, an applicant will see a paginated list of jobs with the associated company, location, salary, and job description. They can filter for specific jobs or companies using the search bar. They can apply for a job by clicking “Quick Apply” and their information along with their resume will be emailed to the company that made that job posting. <br> <br>
#### If the user signed in as a recruiter, their profile page will include their company name, email, and a paginated list of their job postings in a route to the dashboard. Actually, they can see two options in their profile picture by clicking it one is “Dashboard” and another one is “Log-out” when they logged in. When they are in the Dashboard they can post job circulation by clicking the “+Post Jobs” button in the top right corner. By, clicking they will get an amazing form with sufficient input and information which will help them to post jobs. Candidates search for jobs by the position name and can select a location, category, and type of the jobs. These job circulations will appear on the “find jobs” page for the visitors. In the “Inbox” route they can see all of their emails and also can compose a mail from the website. “Recruitment” route will give them the freedom to monitor their job posts. They can see how many applicants applied for their job circulars. In the “Candidates” route a recruiter can get access to see how many candidates are applied to their job posts also they can communicate with them through email from this route! <br> <br>
## Development
#### We built the application like a traditional web application with a frontend and a backend. Our frontend is done using React, and our backend used Express, Node, Express, and MongoDB.  And in the whole website, we use Redux for state management. Also, use Regex on a page called “find jobs” for search method integration and more. All of these libraries made our development much easier and cleaner. This made rendering and creating components a lot easier. The overall code design we followed was based on the SOLID principles. We made sure each class had its own purpose and we made sure to organize the files and folders such that related files are together. For example, we have the Auth folder for signing in and signing up. And, we have the Profile folder for all files related to the profile. These two examples are on the front, but we also organized things similarly on the backend, so each file and folder structure serves a purpose. Our server-side files are under the recruited folder, and our client-side files are under the client folder. <br><br>

## Deployment
#### The front-end is deployed using firebase. And, the back-end is deployed in the Heroku.  <br><br>


## Domain and HTTPS
#### We use firebase hosting system here.  <br><br>
 

## Maintenance
#### Due to time constraints, we don't have any automated system in place to monitor bugs. We make sure to check the docker container logs constantly to notice any unexpected behavior. But that's about it. <br><br>
 
 
## Challenges
* Deployment. This was definitely one of the most challenging parts of this project as it involved lots of research, learning, understanding and experimentation.
* React: We were just not used to the react way of doing things, and it took some time to get used to states, and other react concepts.

