import { Fragment } from 'react'
import { SummaryTable } from './SummaryTable';

const SummaryColumn = (props) => {

  return (
    <Fragment>
      <div className="summary_table">
        <SummaryTable project={props.project}></SummaryTable>
      </div>
    </Fragment>

  )
}

export default SummaryColumn;
