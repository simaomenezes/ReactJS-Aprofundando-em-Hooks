import { useContext } from 'react'
import { HistoryContainer, HistoryList, Status } from './styles'
import { CyclesContext } from '../../contexts/CyclesContext'
import { formatDistanceToNow } from 'date-fns'

export function History() {
  const { cycles } = useContext(CyclesContext)
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
            {cycles.map((cycle) => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.minutesAmmount}</td>
                  <td>
                    {formatDistanceToNow(cycle.startDate, { addSuffix: true })}
                  </td>
                  <td>
                    {cycle.finishedDate && (
                      <Status statusColor="green">Doing</Status>
                    )}

                    {cycle.interrupteDate && (
                      <Status statusColor="red">Stop</Status>
                    )}

                    {!cycle.finishedDate && !cycle.interrupteDate && (
                      <Status statusColor="yellow">To do</Status>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
