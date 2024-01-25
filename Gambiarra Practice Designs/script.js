var gradeChecks = [];
var typeChecks = [];
var awardChecks = [];

function boxcheck(box) {
    /* Provides the overarching filter (grade, type, award) */
    const heading = box.value;

    /* Provides the actual value of the box being checked */
    const attribute = box.id;
    
    for (const [key, value] of Object.entries(schols)) {
        /* Provides the element that we are changing */
        const tile = document.getElementById(key);

        /* We want to iterate through the scholarships and make any that don't have the attribute disappear */
        
    }
}

const schols = {
    "gates": {
        tags: ["low-income", "network", "junior", "fullride"]
    }
}


/* Example scenario:
1. User checks the freshman box under grades
2. Heading = "Grades", Attribute = "Freshman"
3. Iterate through each scholarship in the scholarships dictionary
    4. If the tags include "freshman", nothing happens
    5. If the tags don't include "freshman", the scholarship disappears

This process is reversed if the box was originally checked and is now being unchecked

Each time a scholarship is erased based on a filter, the filter attribute is increased.
For the scholarship to be shown again this filter attribute must hit zero. Everytime it is unchecked one is subtracted from the filter attribute */