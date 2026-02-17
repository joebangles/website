export interface CourseNode {
    id: string;
    name: string;
    fullName: string;
    type: string;
    level: string;
}

export interface CourseLink {
    source: string;
    target: string;
    type: "required" | "recommended";
}

export const typeColors: Record<string, string> = {
    "cs": "rgb(0, 150, 75)",
    "eecs": "rgb(250, 154, 28)",
    "math": "rgb(0, 174, 255)",
    "physics": "rgb(185, 81, 255)",
    "stat": "rgb(255, 105, 180)",
};

// x-position targets by type (fraction of width)
export const typePositions: Record<string, number> = {
    "physics": 0.12,
    "math": 0.35,
    "cs": 0.58,
    "eecs": 0.78,
    "stat": 0.92,
};

// y-position targets by level (fraction of height)
export const levelPositions: Record<string, number> = {
    "intro": 0.08,
    "lower": 0.30,
    "mid": 0.55,
    "upper": 0.85,
};

export const nodesData: CourseNode[] = [
    // HIGH SCHOOL
    { id: "CALC1", name: "C1", fullName: "Calculus 1", type: "math", level: "intro" },
    { id: "CALC2", name: "C2", fullName: "Calculus 2", type: "math", level: "intro" },
    { id: "CALC3", name: "C3", fullName: "Calculus 3", type: "math", level: "lower" },
    { id: "DISCRETE", name: "DM", fullName: "Discrete Mathematics", type: "math", level: "lower" },

    // MATH LOWER DIV
    { id: "MATH54", name: "54", fullName: "MATH 54 - Linear Algebra and Differential Equations", type: "math", level: "lower" },
    { id: "MATH74", name: "74", fullName: "MATH 74 - Transition to Upper Division Mathematics", type: "math", level: "lower" },

    // CS LOWER DIV
    { id: "CS61A", name: "61A", fullName: "CS 61A - The Structure and Interpretation of Computer Programs", type: "cs", level: "intro" },
    { id: "CS61B", name: "61B", fullName: "CS 61B - Data Structures", type: "cs", level: "lower" },
    { id: "CS61C", name: "61C", fullName: "CS 61C - Great Ideas of Computer Architecture", type: "cs", level: "lower" },

    // PHYSICS LOWER DIV
    { id: "PHYS5A", name: "5A", fullName: "PHYSICS 5A - Introductory Mechanics and Relativity", type: "physics", level: "intro" },
    { id: "PHYS5B", name: "5B", fullName: "PHYSICS 5B - Introductory Electromagnetism, Waves, and Optics", type: "physics", level: "lower" },
    { id: "PHYS5BL", name: "5BL", fullName: "PHYSICS 5BL - Introduction to Experimental Physics I", type: "physics", level: "lower" },
    { id: "PHYS5C", name: "5C", fullName: "PHYSICS 5C - Introductory Thermodynamics and Quantum Mechanics", type: "physics", level: "lower" },

    // MATH UPPER DIV
    { id: "MATH104", name: "104", fullName: "MATH 104 - Introduction to Analysis", type: "math", level: "mid" },
    { id: "MATH110", name: "110", fullName: "MATH 110 - Abstract Linear Algebra", type: "math", level: "mid" },
    { id: "MATH113", name: "113", fullName: "MATH 113 - Introduction to Abstract Algebra", type: "math", level: "mid" },
    { id: "MATH128A", name: "128A", fullName: "MATH 128A - Numerical Analysis", type: "math", level: "mid" },

    { id: "MATH125A", name: "125A", fullName: "MATH 125A - Mathematical Logic", type: "math", level: "upper" },
    { id: "MATHH185", name: "H185", fullName: "MATH H185 - Honors Introduction to Complex Analysis", type: "math", level: "upper" },

    // CS UPPER DIV
    { id: "CS162", name: "162", fullName: "CS 162 - Operating Systems and System Programming", type: "cs", level: "upper" },
    { id: "CS168", name: "168", fullName: "CS 168 - Introduction to the Internet", type: "cs", level: "upper" },
    { id: "CS170", name: "170", fullName: "CS 170 - Efficient Algorithms and Intractable Problems", type: "cs", level: "upper" },
    { id: "CS189", name: "189", fullName: "CS 189 - Introduction to Machine Learning", type: "cs", level: "upper" },

    // EECS UPPER DIV
    { id: "EECS126", name: "126", fullName: "EECS 126 - Probability and Random Processes", type: "eecs", level: "mid" },
    { id: "EECS127", name: "127", fullName: "EECS 127 - Optimization Models in Engineering", type: "eecs", level: "mid" },

    { id: "EECS151", name: "151", fullName: "EECS 151 - Introduction to Digital Design and Integrated Circuits", type: "eecs", level: "upper" },
    { id: "EECS151LB", name: "151LB", fullName: "EECS 151LB - Field-Programmable Gate Array Laboratory", type: "eecs", level: "upper" },

    // PHYSICS UPPER DIV
    { id: "PHYS137A", name: "137A", fullName: "PHYSICS 137A - Quantum Mechanics", type: "physics", level: "mid" },

    // MISC
    { id: "STAT198", name: "198", fullName: "STAT 198 - Intro to AI Safety DeCal", type: "stat", level: "upper" },
];

export const linksData: CourseLink[] = [
    // HIGH SCHOOL
    { source: "CALC1", target: "CALC2", type: "required" },
    
    { source: "CALC2", target: "CALC3", type: "required" },

    // MATH LOWER DIV
    { source: "CALC2", target: "MATH54", type: "required" },

    { source: "CALC2", target: "MATH74", type: "required" },

    // CS LOWER DIV
    { source: "CALC1", target: "CS61A", type: "recommended"},

    { source: "CS61A", target: "CS61B", type: "required" },

    { source: "CS61B", target: "CS61C", type: "required" },

    // PHYSICS LOWER DIV
    { source: "CALC1", target: "PHYS5A", type: "required" },
    { source: "CALC2", target: "PHYS5A", type: "recommended" },

    { source: "PHYS5A", target: "PHYS5B", type: "required" },
    { source: "CALC3", target: "PHYS5B", type: "recommended" },

    { source: "PHYS5A", target: "PHYS5BL", type: "required" },
    { source: "PHYS5B", target: "PHYS5BL", type: "recommended" },

    { source: "PHYS5B", target: "PHYS5C", type: "required" },
    { source: "MATH54", target: "PHYS5C", type: "recommended" },

    // MATH UPPER DIV
    { source: "CALC3", target: "MATH104", type: "required" },
    { source: "MATH54", target: "MATH104", type: "required" },
    { source: "DISCRETE", target: "MATH104", type: "required" },

    { source: "MATH54", target: "MATH110", type: "required" },
    { source: "DISCRETE", target: "MATH110", type: "required" },

    { source: "MATH54", target: "MATH113", type: "required" },
    { source: "DISCRETE", target: "MATH113", type: "required" },

    { source: "CALC3", target: "MATH128A", type: "required" },
    { source: "MATH54", target: "MATH128A", type: "required" },
    { source: "CS61A", target: "MATH128A", type: "recommended" },

    { source: "DISCRETE", target: "MATH125A", type: "required" },
    { source: "MATH104", target: "MATH125A", type: "recommended" },
    { source: "MATH113", target: "MATH125A", type: "recommended" },

    { source: "CALC3", target: "MATHH185", type: "required" },
    { source: "MATH54", target: "MATHH185", type: "required" },
    { source: "MATH104", target: "MATHH185", type: "required" },

    // CS UPPER DIV
    { source: "CS61C", target: "CS162", type: "required"},
    { source: "DISCRETE", target: "CS162", type: "required"},

    { source: "CS61B", target: "CS168", type: "required"},
    { source: "CS61C", target: "CS168", type: "recommended"},
    
    { source: "CS61B", target: "CS170", type: "required"},
    { source: "DISCRETE", target: "CS170", type: "required"},
    
    { source: "CALC3", target: "CS189", type: "required"},
    { source: "MATH54", target: "CS189", type: "required"},
    { source: "DISCRETE", target: "CS189", type: "required"},

    // EECS UPPER DIV
    { source: "MATH54", target: "EECS126", type: "required"},
    { source: "DISCRETE", target: "EECS126", type: "required"},

    { source: "MATH54", target: "EECS127", type: "required"},

    { source: "CS61C", target: "EECS151", type: "required"},

    { source: "CS61C", target: "EECS151LB", type: "required"},

    // PHYSICS UPPER DIV
    { source: "CALC3", target: "PHYS137A", type: "recommended"},
    { source: "MATH54", target: "PHYS137A", type: "recommended"},
    { source: "PHYS5C", target: "PHYS137A", type: "required"},

    // MISC
    { source: "CALC3", target: "STAT198", type: "required"},
    { source: "MATH54", target: "STAT198", type: "required"},
    { source: "CS189", target: "STAT198", type: "recommended"},
];
