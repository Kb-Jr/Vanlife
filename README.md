# VanLife

## React Router Course
We are building a mock single page app for the purpose of practicing the usage of React Router. React Router is designed to help navigate between pages or interfaces on a single page app

## Table Of Contents ##################
- [Topics](#Topics)
- [Setting up](#Setting-up)
- [Layout route](#layout-route)
- [Outlet](#outlet)
- [Outlet Context](#outlet-context)
- [Link](#link)
- [NavLink](#navlink)
- [Absolute and Relative Routes](#absolute-and-relative-routes)
- [Using useParams](#using-useParams)
- [Properties](#properties)
- [useSearchParams](#useSearchParams)
- [Optional Chaining](#optional-chaining)
- [Passing State through outlet](#Passing-State-through-outlet)
- [Splat Route or catch all route](#Splat-Route-or-catch-all-route)
- [Error Element](#error-element)
- [Happy Path vs Sad path](#happy-path-vs-sad-path)
- [Data layer APIs](#data-layer-apis)
- [createBrowserRouter](#createbrowserrouter)
- [Loaders](#loaders)
- [Protected Routes - Auth Required](#protected-routes-auth-required)
- [History Stack](#replace)
- [useActonData](#useactiondata)
- [Asynchronous functions and promises](#asynchronous-functions-and-promises)
- [Defer](#defer)
- [Await](#await)
- [Suspense](#suspense)
- [Firestore from Firebase](#firestore-from-firebase)
- [Resources](#resources)
- [Additional information](#additional-information)
- [Activelink](#activelink)
- [Acknowledgement](#acknowledgement)
- [Stack used](#stack-used)


### Topics
#### Setting up
- Every component built throughout this project is going to be rendered on our 'App' component. What will be returned in this component will be a series of routes definitions. The Routes are going to be wrapped in a <BrowserRouter><BrowserRouter/> component. subsequently a <Routes><Routes/> component is declared and individual <Route> will be declared as children of the Routes. Each route is going to contain a 'to' property which states the component which the route links to and the 'element' property which specifies the element to be rendered by the when that route is visited. Some other properties include 'index' property, 'end' property and so on. BrowserRouter, Routes, and Route and components are imported from 'React-router-dom'.

#### Layout Route 
- A layout route is a route which displays a piece of UI that is going to be constant through several views. It could be constant through the entire App or just a couple of pages. It is a shared UI. It is often a parent Route which is non self-closing and wrapping around the child routes.

#### Outlet
- To display the components which the child routes of the parent(layout) route encapsulates, there needs to be an entry point. The Outlet component serves this purpose. The outlet component is called in the return statement of the layout component. The position where this component is called is very important as it determines the position which the child component will be rendered.For example, if the outlet is declared at the top of the shared pieces of the UI which makes up the layout component, the child components will be rendered at the top of the layout elements. 

#### Outlet Context
- To display data from pages that are children of a layout route we use the outlet as some sort of passage. In some cases we might need to share data or state from the layout component to other children component. Usually when trying to share state amongst different components, we use the Global state. In react router, we can easily pass in the state(s) as  context to the outlet component and call useOutletContext hook in the child component(s) to make the state accessible in these components.

#### Link
- The Link component is used similar to the Href in normal HTML, except in this case it prevents the page from reloading. This ensures that whatever data or piece of state on the page is not lost. The link component accepts a 'to' property and this is basically the path to the page you want that particular link to render. It is imported from React-Router-Dom

#### NavLink
- The NavLink works similar to the Link component, except in it's case, it can accept a function as a prop. For this particular project, we used a Function as a property on the Links to determine the styling based on the active or inactive states of the links. NavLink knows whether or not it is "active", "pending", or "transitioning".

#### Absolute and Relative Routes
- In defining our routes, we often use '/routename/routename and so on, these cases are refered to as absolute routes. This is however not absolutely necessary for all routes. In cases where routes are children of a parent route, simply writing out the name of the route as a string will suffice. React Router will detect that the route is a child and automatically do the needful

#### Using useParams
- The useParams hook allows us to specify a new path by using a parameter from the data we are interacting with. These parameter could be the id or any unique identifier. So in this case when specifying the path for a page a colon is placed after the slash of the parent route and the parameter is passed in dynamically like so: 'parentroute/:parameter'.   


#### Properties
- Index property on a child route indicates that this path is the first page displayed on the parent page. Often some components are the default display of the parent component. Index routes render into the parent's Outlet at the parent's URL (like a default child route)
- End property changes the matching logic for the active and pending states to only match to the "end" of the NavLink's to path. If the URL is longer than to, it will no longer be considered active.


#### UseSearchParams
- This is a case whereby we are trying to save a piece of state in the url. Usually we save states in the component, but if that same page is visited by another device, the state that will be retrieved will be the default or initial state. For example you have a counter initialized at 0 and its state has been incremented to 5, if that same link is shared to another device, the device basically loads the page fresh and the state will be 0. So saving this piece of state in the URL ensures that when the link is visited on another device, the data displayed by the state stays the same. The useSearchParams hook is used to read and modify the query string in the URL for the current location. Like React's own useState hook, useSearchParams returns an array of two values: the current location's search params and a function that may be used to update them. The query string takes in key and value. The searchParams comes with a variable and a setter function like useState hook.


#### Optional chaining
- The optional chaining (?.) operator accesses an object's property or calls a function. If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error.


#### Passing state through outlet
- In some cases we might have a piece of state or a variable that we wish to share from a layout or parent route to a nested route or routes. Usually when you have such a state that you wish to share between components the usual approach is to use a global context. However, if the state that needs parsing is between a parent/layout and a nested route, it can be done by adding a prop to the Outlet component. this is done by adding the "context" prop to the outlet and specifying the state to be parsed. Then in the nested route, the "useOutletContext" function is called and assigned to a variable which can then be used in this nested component. 

#### Splat Route or catch all route
- This route refers to a general route that is available throughout the application. Its purpose is to catch errors that may occur when a non-existent path is visited. This path usually displays a form of error message. The path for this is specified in the route as "*". 

#### Error Element
- Error elements can be specified as additional props to a route alongside the element being rendered when that route is visited. This error route renders when there is a challenge in rendering the route. An alternative to this is also using the "useRouteError" function. 


#### Happy Path vs Sad path 
- When building the web app, the initial approach is building the pages and functionality which all work perfectly under ideal conditions, this is termed coding down the happy path. However, when users interact with our apps, theres a possibility that they wont necessarily interact with the app in a straighforward manner, also there are chances that errors might occur when loading data, fetching pages or any form unexpected interaction. Creating contingencies and planning on ways to handle any of these possible events that might cause our app to break is termed coding down the sad path.


#### Data layer APIs
- Data layer APIs on react router v6 provides intuitive ways to handle data fetching and more control over error management. Using the regular BrowserRouter component which envelops all our routes to not permit the use of data APIs, this is where CreateBrowserRouter comes in. 


#### CreateBrowserRouter
- In the createBrowserRouter functin we can pass in another function named createRoutesFromElements which just as the name implies creates routes from elements. The alternative would be to create the routes manually which will be a series of objects. Routes created using the createBrowser router allows us to use methods of data fetching and error handling specified as props within the routes. Examples are the loader prop, errorElement prop, actions and others.  

#### Loaders
- Using loaders provide an alternative and more intuitive way of fetching data. The popular method involves the use of the useEffect hook, which triggers whenever the page is loaded or reloaded. In this method, the data starts getting fetched when the component is mounted. Using loaders, the data starts getting fetched before the component is mounted, rather theres a slight delay in the mounting of the component. The code in the loader needs to complete before the component gets rendered. Using this method, when the component mounts, it mounts with most if not all of the data already loaded. To use this loading property, a loader is defined at its purpose is to handle the fetching of data from an API or any server, the loader function is exported and imported to the file containing the routes. This loader is then assigned to the loader prop which is added to the route on which we intend to use the data being fetched. On the component which this data is needed (which is the component of the element on the route stated), the useLoaderData function is called and what is returned is assigned to a variable which can be used in that component. 



#### Protected Routes - Auth Required
- In some cases we might want to restrict access to some routes and only grant access to Logged in or authenticated users. We can do this by encapsulating the routes we want to protect in a parent route. This parent route will be a component which checks if the user is logged in or not. If the user is logged in, the component will return the Outlet to the child routes, else the user will be forcefully redirected to the login page using the <Navigate /> component. The Navigate component changes a current location when its rendered, it accepts props such as "to", "replace" as well as others. Another method applied would be to use loaders. A loader function which requires the users authentication before proceeding is used. If the users logged in status is true, then the loader proceeds to fetch the data and render the page, otherwise the user is taken to the login page. The changing of the users location to the login page is done by the utilization of "redirect()". Redirect is recommended for use in loaders and actions as opposed to useNavigate which is used in hooks and components. 


#### History stack 
- On making contigencies, users may have some undesired experiences in some instances which needs to be guarded against. for example, a user inputs their log in credentials and are logged in but when they click on the "back" button on their browsers they are automatically taken back to the log in page, this is not a favorable experience and needs to be tackled. A browser retains a history of routes visited in sort of an array, which can be referred to as the history stack. As you transition from one route to the other, the routes are automatically added to the history stack. Submitting a form such as a login form is treated as navigation event, adding a "replace" prop to the form element ensures that the history stack does away with this log in page and replaces it with the upcoming entry in the history stack. 


#### useActionData
- This hook provides the returned value from the previous navigation's action result, or undefined if there was no submission. It is usually used during form validations to retrieve error messages that can be returned and displayed to the user so they can make another attempt. 

#### Asynchronous functions and promises
- Await can only be used on a function returning a promise. An async function returns a promise. a Promise is an object that will produce a single value some time in the future. If the promise is successful, it will produce a resolved value, but if something goes wrong then it will produce a reason why the promise failed.

#### Defer
- Defer allows you to defer values returned from loaders by passing promises instead of resolved values. It is imported from react router DOM. In this project we the function which fetches our data inside of a loader function.

#### Await 
- Await is also imported from React Router DOM and it is used to render values that have been handled. It is usually rendered inside of a suspense component.  


#### Suspense
- Suspense is a component imported from React. Suspense lets you display a fallback until the data or children are done loading. The fallback is usually a form of loading state which could be a page, plain text, animation etc, just to inform the user that the data is loading.

#### Firestore from Firebase
- Firestore from firebase provides you with a remote server where you can create a database and make requests to fetch data from. We stopped fetching our data from our server mimick (mirage.js) and moved them to firebase. data care retrieved as specified in the documentation. Some functions such as collection, getDocs, getFireStore, query(which was used to query the dataset to return the results that matches specified parameters) and getDoc were used.



### Resources
- [Browser Router](https://reactrouter.com/en/main/router-components/browser-router)
- [NavLink](https://reactrouter.com/en/main/components/nav-link)
- [Navlink End](https://reactrouter.com/en/main/components/nav-link#end)
- [index route](https://reactrouter.com/en/main/route/route#index)
- [useSearchParams](https://reactrouter.com/en/main/hooks/use-search-params)
- [Create Browser router](https://reactrouter.com/en/main/routers/create-browser-router)
- [Data Library integration](https://reactrouter.com/en/main/guides/data-libs)
- [Navigate](https://reactrouter.com/en/main/components/navigate)
- [useActionData](https://reactrouter.com/en/main/hooks/use-action-data)
- [Defer](https://reactrouter.com/en/main/utils/defer)
- [Await](https://reactrouter.com/en/main/components/await)
- [Suspense component](https://react.dev/reference/react/Suspense)
- [Deferred data Guide](https://reactrouter.com/en/main/guides/deferred)
- [Suspense Guide](https://reactrouter.com/en/main/guides/suspense)
- [Firebase Link](https://firebase.google.com/)
- [How to use cloud firestore in React](https://www.freecodecamp.org/news/how-to-use-the-firebase-database-in-react/)
- [Youtube video Tutorial By Bob Ziroll](https://www.youtube.com/watch?v=nDGA3km5He4)


### Additional information
- The data used in this project were initially fetched from an Api running locally. This API is a mimick of a server created using Miragejs. At the later stages, the data were migtrated to firestore from firebase



### Activelink
- [vanlife site](https://vanlifetogo.netlify.app/)


### Acknowledgement
- [Bob Ziroll's Youtube Video tutorial](https://www.youtube.com/watch?v=nDGA3km5He4)
- [FreeCodeCamp.org](FreeCodeCamp.org)

### Stack used
- ReactJS
- Tailwind CSS