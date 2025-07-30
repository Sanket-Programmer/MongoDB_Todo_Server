<h2>This is the initial view of the database</h2>

![initial view](image.png)

<h2>To delete the documents we use the following syntaxes: </h2>

<p>1. db.collectionName.deleteOne({ filter }) : deletes only one document based on the filter</p>

![delete one document](image-1.png)

<p>2. db.collectionName.deleteMany({ price: 55 }) : deletes all those document that matches the filter</p>

![delete many documents](image-2.png)

<p>3. db.collectionName.deleteMany({}) : deletes all the documents in a collection</p>

![delete all documents](image-3.png)


<h3>These are the following commands used for the above operations</h3>

![commands for delete operations](image-4.png)