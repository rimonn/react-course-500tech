# Notes from course

* https://babeljs.io/repl
* virtual-dom
* Each child in an array or iterator should have a unique "key" prop
* stateless component and state component
* basic styling: className and inline styling
* events and callbacks: onClick, onMouseUp etc. - events only on native html elements
* props drilling
* styled-components
* recommended tools:
  * oh-my-zsh
  * scm_breeze
* class components
* this.forceUpdate() for re-rendering - not recommended to use!
* rendering 3 option to trigger:
  * this.forceUpdate()
  * props get updated from parent (both class components and also dumb components)
  * state get updated
* this.setState versions (overload)
  * this.setState({})
  * this.setState((prevState) => ({})
  * option to add second argument - callback
* 3 ways to bind 'this' (+ demo)
* life-cycle events
* new updates with react life-cycle events:
   * in the past - side effect on componentWillReceiveProps
   * now - side effect on componentDidUpdate
   * new lifeCycle function: getDerivedStateFromProps(nextProps)
* controlled vs un-controlled controllers
  * controlled - state handled from outside
  * un-controlled - handle his state alone
* ref callback (on native html components) - only for class-components
* innerRef callback on styled components
* PropTypes
* react router (react-router + react-router-dom)
  https://reacttraining.com/react-router/core/guides/philosophy
  * withRouter (HOC) (uses the Context API)
* recommended libs
  * React reveal (animation) https://www.react-reveal.com/
  * React virtualized - (virtual scrolling) https://bvaughn.github.io/react-virtualized/#/components/List
* {get} from lodash/fp
* https://flexboxfroggy.com/
* do not use! react dnd (drag-and-drop)
* react-beautiful-dnd for drag-and-drop
* todo-mvc http://todomvc.com/
* https://github.com/elgerlambert/redux-localstorage
* {get, flow} from lodash/fp
* $r with react-dev-tool
* we can substitute mapDispatchToProps with array of actions (that will automatically will be binded to dispatch() )
* mapStateToProps(stateProps, ownProps) - we can use the ownProps
* mapDispatchToProps(dispatchProps, ownProps) - we can use the ownProps

#### Steps and branches (https://github.com/500tech/react-course)
1. `react-16` branch
1. `bidalgo-course-1`  branch
1. `bidalgo-course-2`  branch
1. `bidalgo-course-3`  branch
1. `bidalgo-course-4`  branch
1. `bidalgo-course-5`  branch
1. `bidalgo-course-6`  branch
1. `bidalgo-course-7`  branch
1. `bidalgo-course-8`  branch
1. `bidalgo-course-10` branch - assignment (not in my repo, only in 500tech repo)
1. `bidalgo-course-redux` branch
1. `bidalgo-course-redux-final` branch
