
import { useNavigate } from "react-router-dom";
const Topic4 = () => {

    const navigate = useNavigate();
    return( 
        <div>

<h2>Topic 4</h2>

<ol className="ordered-list">
    <li onClick={() => navigate('/topic4/inception')}> Inception of the Lesson </li>
    <li onClick={() => navigate('/topic4/exploring-prior-knowledge')}> Exploring Prior Knowledge </li>
    <li onClick={() => navigate('/topic4/enlightening-projection')}> Enlightening Projection </li>
    <li onClick={() => navigate('/topic4/exploring-and-responding')}> Exploring and Responding </li>
    <li onClick={() => navigate('/topic4/allowing-venture')}> Allowing Venture </li>
    <li onClick={() => navigate('/topic4/appraising-venture')}> Appraising Venture </li>
    <li onClick={() => navigate('/topic4/ancillary-clues')}> Ancillary Clues </li>
    <li onClick={() => navigate('/topic4/closure')}> Closure </li>

</ol>
        </div>    
    )
}




export default Topic4;