import { Fragment } from 'react'
import { SummaryTable } from './SummaryTable';
import SummaryResults from './SummaryResults';

const RightColumn = (props) => {


  return (
    <Fragment>

      <div className="col-md-4 col-lg-4 vh-100">
        <div className="position-sticky right_panel">
          <div className="summary_table">
            <SummaryTable></SummaryTable>
            <hr className="my-4" />
            <SummaryResults></SummaryResults>
          </div>
        </div>
      </div>
    </Fragment>

  )
}

export default RightColumn;
