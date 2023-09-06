import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function ErrorLayout() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/");
  }, [navigate]);
  return <p>Error: 404</p>;
}
