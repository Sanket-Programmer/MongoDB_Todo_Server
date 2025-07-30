<h2>To update documents we follow the syntaxes like:</h2>

<h3>This is the initial view before performing the operations</h3>

![Initial view](image.png)

<h3>Update One</h3>

<p>db.collectionName.updateOne(
 { filter },
 { $set: { existingField: newValue, newField: "new value", // ... }, }
 );</p>

 ![Update one](image-1.png)

 <h3>Update Many</h3>

 <p>db.collectionName.updateMany(
 { filter },
 { $set: { existingField: newValue, // ... }, }
 );</p>

 ![update many](image-2.png)

 <h3>Renaming a field</h3>

 <p>db.collectionName.updateOne(
 { filter },
 { $rename: { oldFieldName: "newFieldName" } }
 );</p>

 <h3>These are the commands used for performing the above opeartions</h3>

 ![commands for updating documents](image-3.png)