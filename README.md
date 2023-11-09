# VanLife

## React Router Course
We are building a mock single page app for the purpose of practicing the usage of React Router. React Router is designed to help navigate between pages or interfaces on a single page app

### Topics
#### Setting up
- Every component built throughout this project is going to be rendered on our 'App' component. What will be returned in this component will be a series of routes definitions. The Routes are going to be wrapped in a <BrowserRouter><BrowserRouter/> component. subsequently a <Routes><Routes/> component is declared and individual <Route> will be declared as children of the Routes. Each route is going to contain a 'to' property which states the component which the route links to and the 'element' property which specifies the element to be rendered by the when that route is visited. Some other properties include 'index' property, 'end' property and so on. BrowserRouter, Routes, and Route and components are imported from 'React-router-dom'.

#### Layout Route 
- A layout route is a route which displays a piece of UI that is going to be constant through several views. It could be constant through the entire App or just a couple of pages. It is a shared UI. It is often a parent Route which is non self-closing and wrapping around the child routes.

#### Outlet
- To display the components which the child routes of the parent(layout) route encapsulates, there needs to be an entry point. The Outlet component serves this purpose. The outlet component is called in the return statement of the layout component. The position where this component is called is very important as it determines the position which the child component will be rendered.For example, if the outlet is declared at the top of the shared pieces of the UI which makes up the layout component, the child components will be rendered at the top of the layout elements. 

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
- This is a case whereby we are trying to save a piece of state in the url. Usually we save states in the component, but if that same page is visited by another device, the state that will be retrieved will be the default or initial state. For example you have a counter initialized at 0 and its state has been incremented to 5, if that same link is shared to another device, the device basically loads the page fresh and the state will be 0. So saving this piece of state in the URL ensures that when the link is visited on another device, the data displayed by the state stays the same. The useSearchParams hook is used to read and modify the query string in the URL for the current location. Like React's own useState hook, useSearchParams returns an array of two values: the current location's search params and a function that may be used to update them. 

#### Outlet Context
- To display data from pages that are children of a layout route we use the outlet as some sort of passage. In some cases we might need to share data or state from the layout component to other children component. Usually when trying to share state amongst different components, we use the Global state. In react router, we can easily pass in the state(s) as  context to the outlet component and call useOutletContext hook in the child component(s) to make the state accessible in these components.


#### Optional chaining
#### Passing state through links
#### Splat Route or catch all route
#### Happy Path vs Sad path 
#### Data layer APIs
#### UseLocation
#### Loaders
- The code in the loader needs to complete before the component gets rendered
#### Error handling
#### Protected Routes - Auth Required
- Loader function runs before the component mounts and the route change happens
#### CreateBrowserRouter
- Regular Browser Router does not allow the use of data APIs

- Other hooks used include useEffect, useState....

#### benefits of using loaders as opposed to having an Authrequire wrapping around the protected routes

#### UseSearchparms (augument previous)
- query string takes in key and value
- comes with a variable and a setter like useState

#### useParams vs useSearchParams

### MDN url

### Request

#### Navigate component

#### useNavigate
- can only be called inside of a functional component
- What is a functional component?

#### redirect

#### Request and params 07:27

#### FormData object MDN docs

#### history stack - Form submission considered a navigation event - the use of replace prop

#### UseActionData

#### useNavigation hook

## 
- Await can only be used on a function returning a promise. An async function returns a promise. Now what is a promise?

#### Defer

#### Await

#### Render Props
## Resources
- https://reactrouter.com/en/main/router-components/browser-router
- https://reactrouter.com/en/main/components/nav-link#end
- https://reactrouter.com/en/main/route/route#index
- https://reactrouter.com/en/main/components/nav-link
- https://www.youtube.com/watch?v=nDGA3km5He4
- https://reactrouter.com/en/main/hooks/use-search-params

#### Additional
- The data used in this project are fetched from an Api running locally. This API is a mimick of a server created using Miragejs.  