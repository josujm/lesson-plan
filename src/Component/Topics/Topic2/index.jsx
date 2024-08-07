import { useNavigate } from "react-router-dom";

const Topic2 = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h2>Topic 2</h2>

            <ol className="ordered-list">
                <li onClick={() => navigate('/topic2/inception')}> Inception of the Lesson </li>
                <li onClick={() => navigate('/topic2/exploring-prior-knowledge')}> Exploring Prior Knowledge </li>
                <li onClick={() => navigate('/topic2/enlightening-projection')}> Enlightening Projection </li>
                <li onClick={() => navigate('/topic2/exploring-and-responding')}> Exploring and Responding </li>
                <li onClick={() => navigate('/topic2/allowing-venture')}> Allowing Venture </li>
                <li onClick={() => navigate('/topic2/appraising-venture')}> Appraising Venture </li>
                <li onClick={() => navigate('/topic2/ancillary-clues')}> Ancillary Clues </li>
                <li onClick={() => navigate('/topic2/closure')}> Closure </li>

            </ol>
        </div>
    )
}




export default Topic2;