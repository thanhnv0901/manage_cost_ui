import { Fragment } from 'react'
import { SummaryTable } from './SummaryTable';
import SummaryResults from './SummaryResults';

const RightColumn = (props) => {


  return (
    <Fragment>

      <div class="col-md-4 col-lg-4 vh-100">
        <div class="position-sticky right_panel">
          <div class="summary_table">
            <SummaryTable></SummaryTable>
            <hr class="my-4" />
            <SummaryResults></SummaryResults>
          </div>
        </div>
      </div>
    </Fragment>

  )
}

export default RightColumn;
