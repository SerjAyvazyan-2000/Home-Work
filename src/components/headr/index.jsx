import React from "react";
import "./index.scss"
import {NavLink} from "react-router-dom"
import {useSelector} from "react-redux";

const Headr = () => {
    const key = useSelector(state => state.loginKey.key)

    return <div className="headr">
        <h1>Welqome to My Lessons</h1>
        <div className="Components-lessons">
      <ul>

        <li >
            <NavLink  to={"/Lessons-Function-Component"}> Function Component</NavLink>
        </li>
        <li>
            <NavLink to={"/Lessons-Function-Component-Dey-2"}> Function Component Dey 2</NavLink>
        </li>
        <li>
            <NavLink to={"/Lessons-UsEffect"}> UsEffect</NavLink>
        </li>

        <li>
            <NavLink to={"/Lessons-UseRef"}> UseRef</NavLink>
        </li>

          <li>
              <NavLink to={"/redux"}>Redux</NavLink>
          </li>
          <li>
              <NavLink to={"/login"}>Login</NavLink>
          </li>
          <li>
              <NavLink to={"/redux-toolkit"}>Redux Toolkit</NavLink>
          </li>

      </ul>
        </div>
    </div>

}
export default Headr