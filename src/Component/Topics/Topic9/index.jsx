

import { useNavigate } from "react-router-dom";
const Topic9 = () => {

    const navigate = useNavigate();
    return( 
        <div>

<h2>Topic 9</h2>

<ol className="ordered-list">
    <li onClick={() => navigate('/topic9/inception')}> Inception of the Lesson </li>
    <li onClick={() => navigate('/topic9/exploring-prior-knowledge')}> Exploring Prior Knowledge </li>
    <li onClick={() => navigate('/topic9/enlightening-projection')}> Enlightening Projection </li>
    <li onClick={() => navigate('/topic9/exploring-and-responding')}> Exploring and Responding </li>
    <li onClick={() => navigate('/topic9/allowing-venture')}> Allowing Venture </li>
    <li onClick={() => navigate('/topic9/appraising-venture')}> Appraising Venture </li>
    <li onClick={() => navigate('/topic9/ancillary-clues')}> Ancillary Clues </li>
    <li onClick={() => navigate('/topic9/closure')}> Closure </li>

</ol>
        </div>    
    )
}




export default Topic9;