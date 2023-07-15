/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

function GhibliTier( { componentDone } ) {
    return(
        <div>
        {componentDone && (
          <div>ghibli tier reached</div>
        )}
      </div>
    )
}

export default GhibliTier;