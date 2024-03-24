import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h2 className="text-4xl font-extrabold text-red-600">!OOOOOPs this page is error</h2>
            <button><Link to="/">back to home</Link></button>
        </div>
    );
};

export default ErrorPage;