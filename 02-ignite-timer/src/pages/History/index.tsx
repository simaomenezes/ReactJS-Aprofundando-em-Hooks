import { HistoryContainer, HistoryList } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <h1>My History</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Duration</th>
              <th>Begin</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>My Task</td>
              <td>20 minuts</td>
              <td>Two month a go</td>
              <td>Doing</td>
            </tr>

            <tr>
              <td>My Task</td>
              <td>20 minuts</td>
              <td>Two month a go</td>
              <td>Doing</td>
            </tr>

            <tr>
              <td>My Task</td>
              <td>20 minuts</td>
              <td>Two month a go</td>
              <td>Doing</td>
            </tr>

            <tr>
              <td>My Task</td>
              <td>20 minuts</td>
              <td>Two month a go</td>
              <td>Doing</td>
            </tr>

            <tr>
              <td>My Task</td>
              <td>20 minuts</td>
              <td>Two month a go</td>
              <td>Doing</td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
