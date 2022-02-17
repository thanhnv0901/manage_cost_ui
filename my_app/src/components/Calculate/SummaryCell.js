import { Fragment } from "react"
import classes from 'SummaryTable.module.css'

const SummaryCell = (props) => {
    return (
        <Fragment>
            <tr className={classes.rf}>
                <th scope="row">1</th>
                <td>Have many trees</td>
                <td>Inc</td>
                <td>100</td>
            </tr >
        </Fragment>
    )
}