

import { Fragment } from "react"
import classes from './SummaryTable.module.css'

const SummaryTable = (prop) => {

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Reasion</th>
                    <th scope="col">Inc/Dec</th>
                    <th scope="col">Cost</th>
                </tr>
            </thead>
            <tbody>
                {/* Mock up data for test */}
                <SummaryCell isPlus={true} id="1" detail="Have many trees" cost={100}></SummaryCell>
                <SummaryCell isPlus={false} id="2" detail="damaged ceiling" cost={10}></SummaryCell>

            </tbody>
        </table>
    )
}


const SummaryCell = (props) => {
    return (
        <tr className={props.isPlus ? classes.plus_row : classes.minus_row}>
            <th scope="row">{props.id}</th>
            <td>{props.detail}</td>
            <td>{props.isPlus ? 'Inc' : 'Dec'}</td>
            <td>{props.cost}</td>
        </tr >
    )
}

export { SummaryTable, SummaryCell }