import { useNavigate } from "react-router-dom";

const Topic1 = () => {
    
    const navigate = useNavigate();

    return (
        <div>
            <h2>Topic 1</h2>

            <ol className="ordered-list">
                <li onClick={() => navigate('/topic1/inception')}> Inception of the Lesson </li>
                <li onClick={() => navigate('/topic1/exploring-prior-knowledge')}> Exploring Prior Knowledge </li>
                <li onClick={() => navigate('/topic1/enlightening-projection')}> Enlightening Projection </li>
                <li onClick={() => navigate('/topic1/exploring-and-responding')}> Exploring and Responding </li>
                <li onClick={() => navigate('/topic1/allowing-venture')}> Allowing Venture </li>
                <li onClick={() => navigate('/topic1/appraising-venture')}> Appraising Venture </li>
                <li onClick={() => navigate('/topic1/ancillary-clues')}> Ancillary Clues </li>
                <li onClick={() => navigate('/topic1/closure')}> Closure </li>
            </ol>
        </div>
    )
}




export default Topic1;