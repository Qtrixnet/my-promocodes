import "./app.scss";
import {useEffect} from "react";
import {useContainerQuery} from "react-container-query";
import breakPoints from "../../utils/break-points";
import {useDispatch} from "react-redux";
import {setContainerViewport} from "../../services/actions/container-query";
import Header from "../header/header";

function App() {
  const dispatch = useDispatch();
  const [viewport, containerRef] = useContainerQuery(breakPoints);

  useEffect(() => {
    dispatch(setContainerViewport(viewport));
  }, [viewport, dispatch])

  return (
    <div className="app" ref={containerRef}>
      <Header />
    </div>
  );
}

export default App;
