import React, { Suspense } from "react";

const App = React.lazy(() => import("./App"));

const nativeElement: any = document.getElementById('init-loader');
nativeElement.remove();

function Root() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <App />
  </Suspense>
  );
}


export default Root;
