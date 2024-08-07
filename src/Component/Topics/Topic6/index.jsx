


import { useNavigate } from "react-router-dom";
const Topic6 = () => {

    const navigate = useNavigate();
    return( 
        <div>

<h2>Topic 6</h2>

<ol className="ordered-list">
    <li onClick={() => navigate('/topic6/inception')}> Inception of the Lesson </li>
    <li onClick={() => navigate('/topic6/exploring-prior-knowledge')}> Exploring Prior Knowledge </li>
    <li onClick={() => navigate('/topic6/enlightening-projection')}> Enlightening Projection </li>
    <li onClick={() => navigate('/topic6/exploring-and-responding')}> Exploring and Responding </li>
    <li onClick={() => navigate('/topic6/allowing-venture')}> Allowing Venture </li>
    <li onClick={() => navigate('/topic6/appraising-venture')}> Appraising Venture </li>
    <li onClick={() => navigate('/topic6/ancillary-clues')}> Ancillary Clues </li>
    <li onClick={() => navigate('/topic6/closure')}> Closure </li>

</ol>
        </div>    
    )
}




export default Topic6;