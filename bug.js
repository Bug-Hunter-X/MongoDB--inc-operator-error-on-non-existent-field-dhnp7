```javascript
// Incorrect use of $inc operator in MongoDB update operation
db.collection.updateOne({"_id":ObjectId("651842c65275641251657534")},{$inc:{invalidField:1}});
```