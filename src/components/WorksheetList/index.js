import React, { Component } from 'react'

class WorksheetList extends Component {
  render() {
    return(
      <article>
        <h1> Worksheets </h1>
        <section>
          <table>
            <thead>
              <th>date</th>
              <th>type</th>
              <th>actions</th>
            </thead>

            <tbody>
              <tr>
                <td>01-11-2017</td>
                <td>Start</td>
                <td>
                  <a> Edit </a>
                  <a> Delete </a>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </article>
    )
  }
}
