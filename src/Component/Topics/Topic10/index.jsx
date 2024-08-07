

import { useNavigate } from "react-router-dom";
const Topic10 = () => {

    const navigate = useNavigate();
    return( 
        <div>

<h2>Topic 10</h2>

<ol className="ordered-list">
    <li onClick={() => navigate('/topic10/inception')}> Inception of the Lesson </li>
    <li onClick={() => navigate('/topic10/exploring-prior-knowledge')}> Exploring Prior Knowledge </li>
    <li onClick={() => navigate('/topic10/enlightening-projection')}> Enlightening Projection </li>
    <li onClick={() => navigate('/topic10/exploring-and-responding')}> Exploring and Responding </li>
    <li onClick={() => navigate('/topic10/allowing-venture')}> Allowing Venture </li>
    <li onClick={() => navigate('/topic10/appraising-venture')}> Appraising Venture </li>
    <li onClick={() => navigate('/topic10/ancillary-clues')}> Ancillary Clues </li>
    <li onClick={() => navigate('/topic10/closure')}> Closure </li>

</ol>
        </div>    
    )
}




export default Topic10;