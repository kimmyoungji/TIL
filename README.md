# TIL
Today I Learned

## React Hook
- useState
- useEffect

## React Dom
### tags
- ```<Router>``` : Router 가장 바깥 태그
- ```<Route path="패스"><Route/>``` : 주소 별 요소들을 묶어주는 태그
- ```<Link />``` : 기본 주소에 주소를 추가한 <a> 요소를 만들어준다
- ```<reDirect />``` : 한 주소에서 다른 주소로 변경해준다.
- ```<switch> <switch/>```: 주소 별로 다른 요소가 나타날 수 있게 해주는 태그

```
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

// Since routes are regular React components, they
// may be rendered anywhere in the app, including in
// child elements.
//
// This helps when it's time to code-split your app
// into multiple bundles because code-splitting a
// React Router app is the same as code-splitting
// any other React app.

export default function NestingExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/names">
            <Names />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function Topics() {
  // path : <Route> path를 담는다. 이는 부모 루트와 상대적인 경로이다.
  // URL : 상대 경로를 만들때 사용.
  let { path, url } = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/:topicId`}> 
          // topicId를 Topic 요소의 변수로 사용할 수 있다
          <Topic />
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  // The <Route> that rendered this component has a
  // path of `/topics/:topicId`. The `:topicId` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.
  let { topicId } = useParams(); //path의 일부를 변수로 사용할 수 있다.

  return (
    <div>
      <h3>{topicId}</h3>
    </div>
  );
}
```
- useNavigate

## HTML

## CSS

## TypeScript

## etc
