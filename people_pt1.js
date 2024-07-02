// Q1
db.people.find();

// Q2
db.people.find().count();

// Q3
db.people.find({state: 'Arizona'});

// Q4
db.people.find({state: 'Arizona', gender: 'Male'});

// Q5
db.people.find( {$or: [ {state: 'Arizona'}, {state:'New Mexico'} ] } );

// Q6
db.people.find( {age: {$lt: 40}} );

// Q7
db.people.find({ $and: [ {gender: 'Female'}, {state: 'Florida'}, {age: {$gte: 40}}, {age: {$lte: 45}} ] });

// Q8
db.people.find({first_name: /^H/i});

// Q9
db.people.find({state: 'Michigan'}).sort({first_name: 1});

// Q10
db.people.find({$or: [{state: 'Virginia'}, {first_name: 'Virginia'}]});

// Q11
db.people.find({age: {$lt: 30}}, {first_name: 1, last_name: 1, _id: 0});
// or the brute force way: 
// db.people.find({age: {$lt: 30}}, {_id: false, email: false, gender: false, age: false, state: false, children: false})

// Q12
db.people.find({state: 'Montana'}, {age: false});

// Q13
db.people.find({email: /\.edu/}, {_id: 0, email: 1});