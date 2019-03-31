import React from "react";
import SyntaxHighlight from "../../SyntaxHighlight/SyntaxHighlight";

const ArrOverview = () => {
  return (
    <div>
      <h1> Javascript Arrays Overview </h1>
      <hr />
    
      <p>
        An array is an ordered collection of data (either primitive types or objects)
      </p>
      <p>
        Arrays are used to store multiple values in a single variable. This is compared to a variable that can store only one value
      </p>
      <p>
        Each item in an array has a number attached to it, called a <code>numeric index</code>, that allows you to access it
      </p>
      <p>
        In JavaScript, arrays start at a <code>0</code> index and can be manipulated with various methods
      </p>
      <p>
        What an array in JavaScript looks like:
      </p>
    
      <SyntaxHighlight
        syntax={`//Arrays in JavaScript can hold different types of data, as shown below\nconst myArray = [1, 2, 3, 4];\nconst catNamesArray = ["Jacqueline", "Sophia", "Autumn"];`}
      />
  
    </div>
  );
};

export default ArrOverview;
