# MongoDB $inc Operator Error
This repository demonstrates a common error when using the `$inc` operator in MongoDB update operations. The error occurs when attempting to increment a field that does not exist in the document.  The `bug.js` file shows the erroneous code, while `bugSolution.js` provides the corrected implementation.

## Bug Description
The `$inc` operator is used to increment a numerical field by a specified value. However, if the target field doesn't exist, the operation will fail.

## Solution
The solution involves using the `$setOnInsert` operator in conjunction with `$inc` to handle cases where the field might not exist. This ensures that the field is created and initialized with 0 if it doesn't exist before incrementing.