import '../css/table.css'
import { useEffect, useState } from 'react'

function TransactionTable(){
    const [info, setInfo] = useState(null)
    useEffect(()=>{
        fetch("http://localhost:3000")
        .then(resp=> resp.json())
        .then(data => setInfo(data))
    }, [])
        return(
            <div id="trans">
            {info.map((info)=>
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
                    <tr key={info.id}>
                        <td>{info.date}</td>
                        <td>{info.description}</td>
                        <td>{info.category}</td>
                        <td>{info.amount}</td>
                    </tr>      
                </tbody>
            </table>
            )}
        </div>
)
}
export default TransactionTable