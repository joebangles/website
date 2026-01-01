
function App() {
    const favorite = <span style={{ color: 'red' }}>*</span>

    return (
        <>
            Mostly taken at Berkeley. Some favorite courses marked. ({favorite}) <br /><br />
            Computer Science
            <ul>
                <li> CS 61A - The Structure and Interpretation of Computer Programs </li>
                <li> CS 61B - Data Structures </li>
                <li> CS 61C - Great Ideas of Computer Architecture (Machine Structures){favorite}</li>
                <li> CS 168 - Introduction to the Internet: Architecture and Protocols </li>
                <li> CS 170 - Efficient Algorithms and Intractable Problems{favorite} </li>
                <li> EECS 126 - Probability and Random Processes{favorite} </li>
                <li> EECS 127 - Optimization Models in Engineering </li>
                <li> STAT 198 - Intro to AI Safety DeCal</li>
            </ul>
            Mathematics
            <ul>
                <li> Calculus (1,2,3) </li>
                <li> Discrete Mathematics </li>
                <li> Introduction to Statistics </li>
                <li> MATH 54 - Linear Algebra and Differential Equations </li>
                <li> MATH 74 - Transition to Upper Division Mathematics </li>
                <li> MATH 104 - Introduction to Analysis{favorite} </li>
                <li> MATH 110 - Abstract Linear Algebra </li>
                <li> MATH 113 - Introduction to Abstract Algebra</li>
                <li> MATH 125A - Mathematical Logic{favorite}</li>
                <li> MATH 128A - Numerical Analysis</li>
                <li> MATH H185 - Honors Introduction to Complex Analysis</li>
            </ul>
            Physics
            <ul>
                <li> PHYSICS 5A - Introductory Mechanics and Relativity{favorite}</li>
                <li> PHYSICS 5B - Introductory Electromagnetism, Waves, and Optics</li>
                <li> PHYSICS 5BL - Introduction to Experimental Physics I</li>
                <li> PHYSICS 5C - Introductory Thermodynamics and Quantum Mechanics</li>
                <li> PHYSICS 137A - Quantum Mechanics</li>
            </ul>
        </>
    )
}

export default App
