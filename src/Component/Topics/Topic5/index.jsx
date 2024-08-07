

import { useNavigate } from "react-router-dom";
const Topic5 = () => {

    const navigate = useNavigate();
    return( 
        <div>

<h2>Topic 5</h2>

<ol className="ordered-list">
    <li onClick={() => navigate('/topic5/inception')}> Inception of the Lesson </li>
    <li onClick={() => navigate('/topic5/exploring-prior-knowledge')}> Exploring Prior Knowledge </li>
    <li onClick={() => navigate('/topic5/enlightening-projection')}> Enlightening Projection </li>
    <li onClick={() => navigate('/topic5/exploring-and-responding')}> Exploring and Responding </li>
    <li onClick={() => navigate('/topic5/allowing-venture')}> Allowing Venture </li>
    <li onClick={() => navigate('/topic5/appraising-venture')}> Appraising Venture </li>
    <li onClick={() => navigate('/topic5/ancillary-clues')}> Ancillary Clues </li>
    <li onClick={() => navigate('/topic5/closure')}> Closure </li>

</ol>
        </div>    
    )
}




export default Topic5;