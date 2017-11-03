import React, { Component } from 'react'

class WorksheetList extends Component {
  render() {
    const { worksheets } = this.props
    
    return(
      <article>
        <h1> Worksheets </h1>
        <section>
          <table>
            <thead>
              <tr>
                <th>date</th>
                <th>action</th>
                <th>actions</th>
              </tr>
            </thead>

            <tbody>
              { worksheets.map((worksheet, index) => (
                <tr key={ index }>
                  <td>{ worksheet.created_at }</td>
                  <td>{ worksheet.action }</td>
                  <td>
                    <a> Edit </a>
                    <a> Delete </a>
                  </td>
                </tr>
              )) }
            </tbody>
          </table>
        </section>
      </article>
    )
  }
}

export default WorksheetList