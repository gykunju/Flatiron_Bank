import React from 'react'
import TransactionTable from './TransactionTable'

function TableList({transactions}) {
  return (
   <table>
        <tbody>
            {transactions.map((transaction) => (
                <TransactionTable 
                    key={transaction.id}
                    date={transaction.date}
                    description={transaction.description}
                    category={transaction.category}
                    amount={transaction.amount}
                />
            ))}
        </tbody>
   </table>
   
  )

}

export default TableList;