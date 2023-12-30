const express = require('express');
const mysql = require('mysql');
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json());
const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "crud",
})

//add user
app.post('/add', (req, res)=>{
	const sql = "INSERT INTO users SET ?";
	const data = {ID: req.body.ID, Name: req.body.Name, mail: req.body.mail, Phone: req.body.Phone};
	db.query(sql, data, (err, result)=>{
		if(err){
			return res.json(err);
		}
		else{
			return res.json(result);
		}
	})
})
//delete user
app.delete('/delete/:id', (req, res)=>{
	const sql = "DELETE FROM users WHERE ID = ?";
	const id = req.params.id;
	db.query(sql, id, (err, result)=>{
		if(err){
			return res.json(err);
		}
		else{
			return res.json(result);
		}
	})
})
//update user
app.put('/update/:id', (req, res)=>{
	const sql = "UPDATE users SET Name = ?, mail = ?, Phone = ? WHERE ID = ?";
	const id = req.params.id;
	const data = [req.body.Name, req.body.mail, req.body.Phone, id];
	db.query(sql, data, (err, result)=>{
		if(err){
			return res.json(err);
		}
		else{
			return res.json(result);
		}
	})
})


app.get('/', (re,res)=>{
	return res.json("From Backend Side")
})

app.get('/users', (req, res)=>{
	const sql = "Select * from users";
	db.query(sql, (err, data)=>{
		if(err){
            return res.json(err);
        }
        else{
            return res.json(data);
        }
	})
})

app.listen(3033, ()=>{
	console.log("listening")
})



//Handle login
app.post('/login', (req, res)=>{
	const sql = "SELECT * FROM login WHERE UserName = ? AND Password = ?";
	db.query(sql, [req.body.UserName, req.body.Password], (err, result)=>{
		if(err){
			return res.json("Login Failed");
		}
		else{
			return res.json(result);
		}
	})
})


//get book
app.get('/book', (req, res)=>{
	const sql = "Select * from book";
	db.query(sql, (err, data)=>{
		if(err){
			return res.json(err);
		}
		else{
			return res.json(data);
		}
	})
})

//get book by id
app.get('/book/:id', (req, res)=>{
	const sql = "Select * from book where id = ?";
	const id = req.params.id;
	db.query(sql, id, (err, data)=>{
		if(err){
			return res.json(err);
		}
		else{
			return res.json(data);
		}
	})
})
//add book
app.post('/addbook', (req, res)=>{
	const sql = "INSERT INTO borrowed SET ?";
	const data = {book_ID: req.body.book_ID, book_Name: req.body.book_Name, quantity: req.body.quantity, borrowing_date: req.body.borrowing_date, expiration_date: req.body.expiration_date};
	db.query(sql, data, (err, result)=>{
		if(err){
			return res.json(err);
		}
		else{
			return res.json(result);
		}
	})
})


