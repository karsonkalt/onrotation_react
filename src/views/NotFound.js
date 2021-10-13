import { Alert } from "react-bootstrap";

function NotFound() {
  return (
    <Alert variant="danger">
      <Alert.Heading>Oh shap! That page doesn't exist!</Alert.Heading>
      <p>
        The page you are requesting doesn't exist. Please check the URL and try
        again.
      </p>
    </Alert>
  );
}

export default NotFound;
