import { useRouteError } from "react-router-dom";

const ErrorPage = ()=>{
    const err = useRouteError();
    const {status,statusText,data} = err; //destructuring of built in error obj from useRouteError() hook
return (
    <div>
        <h1>Oops!</h1>
        <h2>{data}</h2>
        <h2>{status + " : " + statusText}</h2>
    </div>
)
}
export default ErrorPage;