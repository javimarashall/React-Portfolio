# React-Portfolio

## Summary 
This software application contains my portfolio powered by React. This application was built to showcase the projects I have made so far. The application contains three components, a header, a project, and a footer that are used multiple times. The application contains two pages, a home page and projects page. In the home page, the user is welcomed to the page with a photo and a brief description of myself. The page contains a navbar with links to the project page, home page, resume, and social media links. When the user clicks on the projects link, the user is directed to the projects page. In the projects page, every project is displayed in their own card containing a gif of the project, a title, a brief description, links to the deployed site and a link to the repository. 

## Technologies Used
* HTML - Used to build the website
* CSS - Used to style the website
* Bootstrap 4.6 - Used as the CSS framework
* React - Used on the client side
* Git - Used to upload to to github
* GitHub - Used to store the repository

![site](./assets/site.gif)

## Code Snippet
This code snippet is included because it's the new way I learned to do routes for a site with multiple pages. This is pretty cool, it feel like it makes building routes easier, for now.  

```javascript
function App() {
    return (
        <Router>
            <div>

                <Route exact path="/" component={Project} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/project" component={Project}>
                    <Project />
                </Route>
               
            </div>
        </Router>
    );
}
```
## Repository Link
https://github.com/javimarashall/React-Portfolio

## Deploy Link
https://javimarashall.github.io/React-Portfolio/

## Personal Links
[Github](https://github.com/javimarashall)<br>
[Linkedin](https://www.linkedin.com/in/javier-mondragon-7b471719b/)