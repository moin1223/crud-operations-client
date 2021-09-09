import React, { useEffect, useState } from 'react';
import { getUsers } from '../Service/api';
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';




const useStyles = makeStyles({
    table: {
        width: '90%',
        margin: '50px 0 0 50px'
    },
    thead: {
        '& > *': {
            fontSize: 20,
            background: '#000000',
            color: '#FFFFFF'
        }
    },
    row: {
        '& > *': {
            fontSize: 18
        }
    }
})


const AllUsers = () => {
    const [users,setUsers] = useState([])
    const classes = useStyles();
    const history = useHistory();


    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data =>{
                
               setUsers(data)
               
            })
    }, [])



    const handleDelete = (_id) => {
       
        fetch(`http://localhost:5000/deleteUser/${_id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(result => {
            if(result){
                
            }

            alert('Your registration is successfully deleted');
            history.replace('/all');
        });
    }



    return (
        <Table className={classes.table}>
        <TableHead>
            <TableRow className={classes.thead}>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Username</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell></TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {users.map((user) => (
                <TableRow className={classes.row} key={user._id}>
                    <TableCell>{user.id}</TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.username}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.phone}</TableCell>
                   
                    <TableCell>
                        <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${user._id}`}>Edit</Button>
                        <Button color="secondary" variant="contained" onClick={() =>  handleDelete(user._id)}>Delete</Button> 
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>
    );
};

export default AllUsers;