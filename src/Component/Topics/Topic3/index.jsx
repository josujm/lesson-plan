import { useNavigate } from "react-router-dom";

const Topic3 = () => {
    const navigate = useNavigate();

    return( 
        <div>

<h2>Topic 3</h2>

<ol className="ordered-list">
    <li onClick={() => navigate('/topic3/inception')}> Inception of the Lesson </li>
    <li onClick={() => navigate('/topic3/exploring-prior-knowledge')}> Exploring Prior Knowledge </li>
    <li onClick={() => navigate('/topic3/enlightening-projection')}> Enlightening Projection </li>
    <li onClick={() => navigate('/topic3/exploring-and-responding')}> Exploring and Responding </li>
    <li onClick={() => navigate('/topic3/allowing-venture')}> Allowing Venture </li>
    <li onClick={() => navigate('/topic3/appraising-venture')}> Appraising Venture </li>
    <li onClick={() => navigate('/topic3/ancillary-clues')}> Ancillary Clues </li>
    <li onClick={() => navigate('/topic3/closure')}> Closure </li>

</ol>
        </div>    
    )
}




export default Topic3;