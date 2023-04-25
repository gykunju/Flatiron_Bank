import React, {useState, useEffect} from 'react'
import TableList from './TableList';
import Search from './Search';
import AdditionForm from './AdditionForm';

function DisplayContainer() {
    const [transactions, setTransactions] = useState([])
    const [search, setSearch] = useState("")

    useEffect(()=>{
        fetch("http://localhost:3000/transactions")
        .then((resp)=> resp.json())
        .then((data)=> setTransactions(data));
    }, []);

    //handle search
    function handleSearch(e){
        setSearch(e.target.value)
    }

   //Add new transaction
   function addTransaction(e, newTransaction){
        let id = transactions.length + 1;
        newTransaction = {...newTransaction, id}
        e.preventDefault();
        e.target.reset();

        fetch("http://localhost:3000/transactions",{
        method: "POST",
        headers : {
            "Content-Type" : "application/json",
        },
        body : JSON.stringify(newTransaction)
   })
   .then((response) => response.json())
   .then((data) => {
    setTransactions((transactions)=> [...transactions, data]);
   });
   }


  return (
    <div>
        <Search search={search} handleSearch={handleSearch} />
        <TableList transactions={transactions} />
        <AdditionForm addTransaction={addTransaction} />
    </div>
  )
}

export default DisplayContainer;