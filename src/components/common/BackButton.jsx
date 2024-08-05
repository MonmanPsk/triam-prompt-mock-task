import { useNavigate } from "react-router-dom";
import '../../assets/styles/BackButton.css'

export default function BackButton({ to }) {
    const navigate = useNavigate();

    return (
        <div className="back-button" onClick={() => { navigate(to); }}>
            <p>&lt; back</p>
        </div>
    )
}