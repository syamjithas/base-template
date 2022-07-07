import React, { Suspense } from "react";
import { removeElementFromDOM } from './utils/'
import { FullscreenLoader } from "./components";
const App = React.lazy(() => import("./views/app/App"));

removeElementFromDOM();

function Root() {
  return (
    <Suspense fallback={<FullscreenLoader />}>
      <App />
    </Suspense>
  );
}


export default Root;
