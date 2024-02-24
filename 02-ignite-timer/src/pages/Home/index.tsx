import { Play } from 'phosphor-react'
import {
  CountDownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">I will work in</label>
          <TaskInput
            list="task-suggestions"
            type="text"
            id="task"
            placeholder="Do you should insert same thing"
          />

          <datalist id="task-suggestions">
            <option value="Project 1" />
            <option value="Project 3" />
            <option value="Project 4" />
            <option value="Project 2" />
            <option value="Other things" />
          </datalist>

          <label htmlFor="minutesAmmount">Duration</label>
          <MinutesAmmountInput
            type="number"
            id="minutesAmmount"
            placeholder="0:0"
            step={5}
            min={5}
            max={60}
          />

          <span>minutes.</span>
        </FormContainer>

        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>

        <StartCountdownButton type="submit">
          <Play size={24} />
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
