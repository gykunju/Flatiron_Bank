import '../css/TransactionTable.css'

function TransactionTable({date, description, category, amount}){
    return(
        <div id="trans">            
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{date}</td>
                        <td>{description}</td>
                        <td>{category}</td>
                        <td>{amount}</td>
                    </tr>      
                </tbody>
            </table>
         </div>
)
}
export default TransactionTable